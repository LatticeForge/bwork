// Type definitions for the human-like chatbot enhancement

// Conversation stages
export type ConversationStage = 'initial' | 'exploring' | 'deepening' | 'closing'

// User sentiment
export type Sentiment = 'positive' | 'negative' | 'neutral'

// Company size hints
export type CompanySize = 'small' | 'medium' | 'enterprise'

// Urgency levels
export type Urgency = 'low' | 'medium' | 'high'

// Message role
export type MessageRole = 'user' | 'bot'

// Conversation tone
export type Tone = 'formal' | 'friendly' | 'enthusiastic' | 'empathetic'

// Intent types - all possible conversation intents
export type IntentType =
  | 'greeting'
  | 'cabling'
  | 'wifi'
  | 'datacenter'
  | 'security'
  | 'cloud'
  | 'managed'
  | 'pos'
  | 'voip'
  | 'services'
  | 'partners'
  | 'quote_request'
  | 'brochure'
  | 'thanks'
  | 'how_are_you'
  | 'capabilities'
  | 'joke'
  | 'weather'
  | 'small_talk'
  | 'general_inquiry'

// Message history item
export interface MessageHistoryItem {
  role: MessageRole
  content: string
  timestamp: Date
  intent?: IntentType
  sentiment?: Sentiment
}

// User context - learned during conversation
export interface UserContext {
  hasGreeted: boolean
  mentionedServices: string[]
  expressedInterests: string[]
  sentiment: Sentiment
  companySize?: CompanySize
  urgency?: Urgency
}

// Conversation context - full session state
export interface ConversationContext {
  // Session tracking
  sessionId: string
  startTime: Date

  // Conversation memory
  messageHistory: MessageHistoryItem[]

  // State tracking
  currentTopic?: IntentType
  conversationStage: ConversationStage

  // Progressive conversation
  askedQuestions: string[]
  followUpQueue: string[]

  // User preferences (learned during conversation)
  userContext: UserContext

  // Small talk tracking
  smallTalkCount: number
  lastSmallTalkTopic?: string
}

// Intent detection result
export interface Intent {
  type: IntentType
  confidence: number  // 0-1
  entities?: {
    services?: string[]
    companySize?: CompanySize
    urgency?: Urgency
    [key: string]: any
  }
}

// Sentiment analysis result
export interface SentimentAnalysis {
  sentiment: Sentiment
  confidence: number  // 0-1
  emotionalIndicators: string[]
}

// Enhanced Message interface (extends existing)
export interface EnhancedMessage {
  id: string
  text: string
  sender: MessageRole
  timestamp: Date
  downloads?: { name: string; url: string }[]

  // New fields for context
  intent?: IntentType
  sentiment?: Sentiment
  confidence?: number
  isFollowUp?: boolean
  relatedTo?: string  // ID of parent message
  metadata?: {
    typingDelay?: number
    responseVariation?: number
  }
}

// Response variation structure
export interface ResponseVariation {
  text: string
  tone: Tone
  sentiment?: Sentiment
  contextConditions?: {
    conversationStage?: ConversationStage
    userSentiment?: Sentiment
    messageCount?: number
    hasGreeted?: boolean
  }
}

// Progressive response structure
export interface ProgressiveResponse {
  initialResponse: string
  followUpQuestions: string[]
  detailedInfo: Record<string, string>  // Key: topic, Value: detailed answer
}

// Bot personality configuration
export interface PersonalityTraits {
  friendliness: number      // 0-1
  professionalism: number   // 0-1
  enthusiasm: number        // 0-1
  empathy: number          // 0-1
  humor: number            // 0-1
}

// Empathy response map
export interface EmpathyResponses {
  positive: string[]
  negative: string[]
  urgent: string[]
}

// Response with metadata
export interface BotResponse {
  response: string
  followUps?: string[]
  shouldShowQuickReplies: boolean
  shouldShowForm: boolean
  downloads?: { name: string; url: string }[]
  sentiment?: Sentiment
  tone?: Tone
}

// Typing delay configuration
export interface TypingDelayConfig {
  baseDelay: number
  characterFactor: number
  randomVariation: number
  minDelay: number
  maxDelay: number
}

// Small talk category
export interface SmallTalkCategory {
  patterns: RegExp[]
  responses: string[]
  followUpTransitions?: string[]
}
