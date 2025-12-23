// Conversation Engine - orchestrates human-like conversations
// Manages state, context, and response generation

import {
  ConversationContext,
  ConversationStage,
  Intent,
  IntentType,
  SentimentAnalysis,
  BotResponse,
  MessageHistoryItem,
  Sentiment
} from './types'
import { detectIntent, analyzeSentiment, normalizeMessage } from './nlpUtils'
import { selectResponseVariation, getFollowUpQuestions } from './responseVariations'
import { handleSmallTalk, isSmallTalk } from './smallTalk'
import { applyPersonality } from './personality'

/**
 * ConversationEngine class - Main orchestrator for conversations
 * Manages conversation state, context, and generates appropriate responses
 */
export class ConversationEngine {
  private context: ConversationContext

  constructor(initialContext?: ConversationContext) {
    this.context = initialContext || this.createInitialContext()
  }

  /**
   * Main entry point - process user message and generate bot response
   */
  public processMessage(userMessage: string): BotResponse {
    // Normalize and analyze message
    const normalized = normalizeMessage(userMessage)
    const intent = detectIntent(normalized, this.context)
    const sentiment = analyzeSentiment(userMessage)

    // Update context with new message
    this.updateContext(userMessage, intent, sentiment)

    // Check for small talk in initial stage
    if (
      isSmallTalk(normalized, intent.type) &&
      (this.context.conversationStage === 'initial' || this.context.smallTalkCount > 0)
    ) {
      const smallTalkResponse = handleSmallTalk(normalized, intent.type, this.context)
      this.context.smallTalkCount++

      return {
        response: smallTalkResponse,
        shouldShowQuickReplies: this.context.smallTalkCount >= 2,
        shouldShowForm: false
      }
    }

    // Generate main response with variations
    let response = selectResponseVariation(intent, this.context, sentiment)

    // Apply personality and empathy
    response = applyPersonality(response, this.context, sentiment)

    // Determine if we should ask follow-up questions
    const shouldAskFollowUp = this.shouldAskFollowUp(intent)
    const followUps = shouldAskFollowUp
      ? getFollowUpQuestions(intent.type, this.context)
      : undefined

    // Update conversation stage
    this.updateConversationStage()

    // Determine UI state
    const shouldShowForm = intent.type === 'quote_request'
    const shouldShowQuickReplies =
      this.context.conversationStage === 'closing' ||
      intent.type === 'thanks' ||
      (this.context.conversationStage === 'initial' && this.context.userContext.hasGreeted)

    return {
      response,
      followUps,
      shouldShowQuickReplies,
      shouldShowForm,
      sentiment: sentiment.sentiment,
      tone: this.getToneForResponse(intent, sentiment)
    }
  }

  /**
   * Update conversation context with new message
   */
  private updateContext(
    message: string,
    intent: Intent,
    sentiment: SentimentAnalysis
  ): void {
    // Add to message history
    const historyItem: MessageHistoryItem = {
      role: 'user',
      content: message,
      timestamp: new Date(),
      intent: intent.type,
      sentiment: sentiment.sentiment
    }
    this.context.messageHistory.push(historyItem)

    // Update current topic
    if (intent.type !== 'greeting' && intent.type !== 'thanks' && intent.type !== 'small_talk') {
      this.context.currentTopic = intent.type
    }

    // Update user context
    if (intent.type === 'greeting' || intent.type === 'how_are_you') {
      this.context.userContext.hasGreeted = true
    }

    // Track mentioned services
    if (intent.entities?.services) {
      intent.entities.services.forEach(service => {
        if (!this.context.userContext.mentionedServices.includes(service)) {
          this.context.userContext.mentionedServices.push(service)
        }
      })
    }

    // Update user sentiment (weighted average with history)
    this.context.userContext.sentiment = this.calculateOverallSentiment(sentiment.sentiment)

    // Update company size and urgency hints
    if (intent.entities?.companySize) {
      this.context.userContext.companySize = intent.entities.companySize
    }
    if (intent.entities?.urgency) {
      this.context.userContext.urgency = intent.entities.urgency
    }

    // Trim history to last 15 messages for performance
    if (this.context.messageHistory.length > 15) {
      this.context.messageHistory = this.context.messageHistory.slice(-15)
    }
  }

  /**
   * Calculate overall user sentiment based on recent history
   */
  private calculateOverallSentiment(newSentiment: Sentiment): Sentiment {
    const recentMessages = this.context.messageHistory.slice(-5)  // Last 5 messages
    const sentiments = [...recentMessages.map(m => m.sentiment), newSentiment].filter(Boolean) as Sentiment[]

    if (sentiments.length === 0) return 'neutral'

    // Count sentiment occurrences
    const counts = {
      positive: sentiments.filter(s => s === 'positive').length,
      negative: sentiments.filter(s => s === 'negative').length,
      neutral: sentiments.filter(s => s === 'neutral').length
    }

    // Return most common sentiment
    if (counts.positive >= counts.negative && counts.positive >= counts.neutral) {
      return 'positive'
    } else if (counts.negative >= counts.neutral) {
      return 'negative'
    }
    return 'neutral'
  }

  /**
   * Determine if we should ask a follow-up question
   */
  private shouldAskFollowUp(intent: Intent): boolean {
    // Don't ask follow-ups for these intents
    const noFollowUpIntents: IntentType[] = [
      'greeting',
      'thanks',
      'how_are_you',
      'capabilities',
      'joke',
      'weather',
      'quote_request',
      'small_talk',
      'general_inquiry'
    ]

    if (noFollowUpIntents.includes(intent.type)) {
      return false
    }

    // Don't ask too many follow-ups
    if (this.context.askedQuestions.length >= 3) {
      return false
    }

    // Ask follow-ups in exploring and deepening stages for service inquiries
    const complexTopics: IntentType[] = [
      'datacenter',
      'security',
      'cloud',
      'managed',
      'cabling',
      'wifi'
    ]

    const isComplexTopic = complexTopics.includes(intent.type)
    const isAppropriateStage =
      this.context.conversationStage === 'exploring' ||
      this.context.conversationStage === 'deepening'

    return isComplexTopic && isAppropriateStage
  }

  /**
   * Update conversation stage based on message count and context
   */
  private updateConversationStage(): void {
    const userMessageCount = this.context.messageHistory.filter(m => m.role === 'user').length

    if (userMessageCount <= 2) {
      this.context.conversationStage = 'initial'
    } else if (userMessageCount <= 5) {
      this.context.conversationStage = 'exploring'
    } else if (userMessageCount <= 8) {
      this.context.conversationStage = 'deepening'
    } else {
      this.context.conversationStage = 'closing'
    }
  }

  /**
   * Get appropriate tone for response based on intent and sentiment
   */
  private getToneForResponse(intent: Intent, sentiment: SentimentAnalysis) {
    // Empathetic tone for negative sentiment
    if (sentiment.sentiment === 'negative') {
      return 'empathetic'
    }

    // Enthusiastic for positive sentiment
    if (sentiment.sentiment === 'positive') {
      return 'enthusiastic'
    }

    // Friendly for greetings and casual intents
    const friendlyIntents: IntentType[] = ['greeting', 'how_are_you', 'thanks', 'capabilities']
    if (friendlyIntents.includes(intent.type)) {
      return 'friendly'
    }

    // Formal for business inquiries
    return 'formal'
  }

  /**
   * Create initial conversation context
   */
  private createInitialContext(): ConversationContext {
    return {
      sessionId: this.generateSessionId(),
      startTime: new Date(),
      messageHistory: [],
      conversationStage: 'initial',
      askedQuestions: [],
      followUpQueue: [],
      userContext: {
        hasGreeted: false,
        mentionedServices: [],
        expressedInterests: [],
        sentiment: 'neutral'
      },
      smallTalkCount: 0
    }
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  /**
   * Get current conversation context (for debugging or persistence)
   */
  public getContext(): ConversationContext {
    return { ...this.context }
  }

  /**
   * Reset conversation context (for chat clear)
   */
  public resetContext(): void {
    this.context = this.createInitialContext()
  }

  /**
   * Update context externally (for state restoration)
   */
  public setContext(context: ConversationContext): void {
    this.context = context
  }

  /**
   * Get conversation statistics (for analytics)
   */
  public getStats() {
    const userMessages = this.context.messageHistory.filter(m => m.role === 'user')

    return {
      sessionId: this.context.sessionId,
      messageCount: userMessages.length,
      duration: Date.now() - this.context.startTime.getTime(),
      stage: this.context.conversationStage,
      mentionedServices: this.context.userContext.mentionedServices,
      overallSentiment: this.context.userContext.sentiment,
      smallTalkCount: this.context.smallTalkCount
    }
  }

  /**
   * Check if this is a returning conversation (has message history)
   */
  public isReturningConversation(): boolean {
    return this.context.messageHistory.length > 0
  }

  /**
   * Get suggested next topics based on conversation history
   */
  public getSuggestedTopics(): string[] {
    const mentioned = this.context.userContext.mentionedServices
    const allTopics = ['cabling', 'wifi', 'datacenter', 'security', 'cloud', 'managed']

    // Suggest topics not yet discussed
    return allTopics.filter(topic => !mentioned.includes(topic)).slice(0, 3)
  }
}

/**
 * Create a new conversation engine instance
 * Helper function for easy instantiation
 */
export function createConversationEngine(context?: ConversationContext): ConversationEngine {
  return new ConversationEngine(context)
}
