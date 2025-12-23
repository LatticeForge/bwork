// Personality system - adds human-like warmth and empathy to responses
// Applies conversational fillers, empathy phrases, and tone adjustments

import { PersonalityTraits, EmpathyResponses, SentimentAnalysis, ConversationContext, Sentiment } from './types'

// Bot personality configuration
export const botPersonality: PersonalityTraits = {
  friendliness: 0.8,      // High - warm and approachable
  professionalism: 0.7,   // Balanced - professional but not stuffy
  enthusiasm: 0.6,        // Moderate - positive without being over-the-top
  empathy: 0.9,          // Very high - understanding and supportive
  humor: 0.3             // Low - occasional light humor only
}

// Empathy phrases for different sentiment contexts
export const empathyPhrases: EmpathyResponses = {
  positive: [
    "That's exciting!",
    "I love helping with that!",
    "Great choice!",
    "You're in the right place!",
    "Wonderful!",
    "That sounds fantastic!",
    "I'm glad to hear that!",
    "Perfect!"
  ],
  negative: [
    "I understand that can be frustrating.",
    "Let me help you sort this out.",
    "I totally get it.",
    "That's a valid concern.",
    "I can see why that would be an issue.",
    "Let's work through this together.",
    "I hear you.",
    "That makes sense to feel that way."
  ],
  urgent: [
    "I can see this is urgent for you.",
    "Let's get this sorted out quickly.",
    "I'm here to help resolve this right away.",
    "I understand the urgency.",
    "Let's prioritize this.",
    "I'll make sure we address this promptly."
  ]
}

// Conversational fillers to make responses feel more natural
const conversationalFillers = [
  "Actually,",
  "You know what,",
  "To be honest,",
  "I think",
  "From what I've seen,",
  "From my understanding,",
  "In my experience,",
  "The way I see it,",
  "If you ask me,",
  "Here's the thing,",
  "Let me tell you,"
]

// Acknowledgment phrases
const acknowledgments = [
  "I understand.",
  "Got it!",
  "That makes sense.",
  "I see what you're looking for.",
  "Perfect, let me help with that.",
  "Absolutely!",
  "Of course!",
  "Right,",
  "Okay,"
]

// Transition phrases (for smooth topic changes)
const transitionPhrases = [
  "Speaking of which,",
  "On that note,",
  "That reminds me,",
  "While we're on the subject,",
  "By the way,",
  "Also,"
]

/**
 * Apply personality to a response
 * Adds empathy, conversational fillers, and natural tone
 */
export function applyPersonality(
  response: string,
  context: ConversationContext,
  sentiment: SentimentAnalysis
): string {
  let enhancedResponse = response

  // Add empathy phrase at the beginning based on sentiment
  if (shouldAddEmpathy(context, sentiment)) {
    const empathyPhrase = selectEmpathyPhrase(sentiment.sentiment, context.userContext.urgency)
    enhancedResponse = `${empathyPhrase} ${enhancedResponse}`
  }

  // Add conversational filler occasionally (20% chance in exploring/deepening stages)
  if (shouldAddFiller(context)) {
    const filler = selectConversationalFiller()
    // Insert after first sentence or at beginning
    enhancedResponse = insertFiller(enhancedResponse, filler)
  }

  // Add acknowledgment for complex questions
  if (shouldAddAcknowledgment(context)) {
    const ack = selectAcknowledgment()
    enhancedResponse = `${ack} ${enhancedResponse}`
  }

  return enhancedResponse
}

/**
 * Select appropriate empathy phrase based on sentiment
 */
function selectEmpathyPhrase(sentiment: Sentiment, urgency?: string): string {
  let phrases: string[]

  // Urgent sentiment takes priority
  if (urgency === 'high') {
    phrases = empathyPhrases.urgent
  } else if (sentiment === 'positive') {
    phrases = empathyPhrases.positive
  } else if (sentiment === 'negative') {
    phrases = empathyPhrases.negative
  } else {
    return ''  // No empathy phrase for neutral in casual context
  }

  return phrases[Math.floor(Math.random() * phrases.length)]
}

/**
 * Select random conversational filler
 */
function selectConversationalFiller(): string {
  return conversationalFillers[Math.floor(Math.random() * conversationalFillers.length)]
}

/**
 * Select random acknowledgment phrase
 */
function selectAcknowledgment(): string {
  return acknowledgments[Math.floor(Math.random() * acknowledgments.length)]
}

/**
 * Determine if we should add empathy phrase
 */
function shouldAddEmpathy(context: ConversationContext, sentiment: SentimentAnalysis): boolean {
  // Always add empathy for strong positive or negative sentiment
  if (sentiment.confidence > 0.7 && sentiment.sentiment !== 'neutral') {
    return true
  }

  // Add empathy for urgent situations
  if (context.userContext.urgency === 'high') {
    return true
  }

  // Don't overuse empathy - only in initial and exploring stages
  if (context.conversationStage === 'deepening' || context.conversationStage === 'closing') {
    return false
  }

  return false
}

/**
 * Determine if we should add conversational filler
 */
function shouldAddFiller(context: ConversationContext): boolean {
  // Only in exploring and deepening stages
  if (context.conversationStage !== 'exploring' && context.conversationStage !== 'deepening') {
    return false
  }

  // 20% chance
  return Math.random() < 0.2
}

/**
 * Determine if we should add acknowledgment
 */
function shouldAddAcknowledgment(context: ConversationContext): boolean {
  // Don't add acknowledgment in initial stage
  if (context.conversationStage === 'initial') {
    return false
  }

  // Add for messages after the 2nd one
  const messageCount = context.messageHistory.filter(m => m.role === 'user').length
  if (messageCount <= 2) {
    return false
  }

  // 30% chance
  return Math.random() < 0.3
}

/**
 * Insert filler into response at appropriate position
 */
function insertFiller(response: string, filler: string): string {
  // Find first sentence end
  const sentenceEnd = response.search(/[.!?]\s/)

  if (sentenceEnd !== -1 && sentenceEnd < response.length / 2) {
    // Insert after first sentence
    const beforeFiller = response.substring(0, sentenceEnd + 2)
    const afterFiller = response.substring(sentenceEnd + 2)
    return `${beforeFiller}${filler} ${afterFiller}`
  }

  // Otherwise, add at beginning
  return `${filler} ${response}`
}

/**
 * Add warmth to response by softening language
 */
export function softenLanguage(text: string): string {
  let softened = text

  // Replace direct commands with suggestions
  softened = softened.replace(/^You should/, 'You might want to')
  softened = softened.replace(/^You need to/, 'It would be great if you could')
  softened = softened.replace(/^You must/, 'It\'s important to')

  // Soften questions
  softened = softened.replace(/^Do you/, 'Would you like to')
  softened = softened.replace(/^Can you/, 'Could you')

  return softened
}

/**
 * Add enthusiasm to response (for positive contexts)
 */
export function addEnthusiasm(text: string, level: number = 0.5): string {
  if (level < 0.3) return text

  let enthusiastic = text

  // Add exclamation marks (sparingly)
  if (level > 0.7 && !text.includes('!')) {
    enthusiastic = enthusiastic.replace(/\.$/, '!')
  }

  // Add positive adjectives
  if (level > 0.5) {
    enthusiastic = enthusiastic.replace(/solution/, 'great solution')
    enthusiastic = enthusiastic.replace(/service/, 'excellent service')
    enthusiastic = enthusiastic.replace(/features/, 'amazing features')
  }

  return enthusiastic
}

/**
 * Make response more formal (for professional contexts)
 */
export function makeFormal(text: string): string {
  let formal = text

  // Replace casual contractions with full forms
  formal = formal.replace(/I'm/, 'I am')
  formal = formal.replace(/you're/, 'you are')
  formal = formal.replace(/we're/, 'we are')
  formal = formal.replace(/it's/, 'it is')
  formal = formal.replace(/that's/, 'that is')
  formal = formal.replace(/don't/, 'do not')
  formal = formal.replace(/can't/, 'cannot')

  return formal
}

/**
 * Make response more casual (for friendly contexts)
 */
export function makeCasual(text: string): string {
  let casual = text

  // Use contractions
  casual = casual.replace(/I am/g, 'I\'m')
  casual = casual.replace(/you are/g, 'you\'re')
  casual = casual.replace(/we are/g, 'we\'re')
  casual = casual.replace(/it is/g, 'it\'s')
  casual = casual.replace(/that is/g, 'that\'s')
  casual = casual.replace(/do not/g, 'don\'t')
  casual = casual.replace(/cannot/g, 'can\'t')

  return casual
}

/**
 * Add personal touch to response
 */
export function addPersonalTouch(text: string, context: ConversationContext): string {
  let personal = text

  // Reference previous topics in later stages
  if (context.conversationStage === 'deepening' || context.conversationStage === 'closing') {
    const services = context.userContext.mentionedServices
    if (services.length > 1) {
      // Could add references like "Along with the [previous topic] we discussed..."
      // For now, keep it simple
    }
  }

  return personal
}

/**
 * Get closing sentiment for end of conversation
 */
export function getClosingSentiment(): string {
  const closings = [
    "Feel free to reach out anytime!",
    "I'm here whenever you need help!",
    "Don't hesitate to ask if you have more questions!",
    "Happy to help anytime!",
    "Looking forward to assisting you again!",
    "I'm always here if you need anything else!"
  ]

  return closings[Math.floor(Math.random() * closings.length)]
}

/**
 * Apply tone adjustments based on context
 */
export function applyTone(
  text: string,
  tone: 'formal' | 'friendly' | 'enthusiastic' | 'empathetic'
): string {
  let adjusted = text

  switch (tone) {
    case 'formal':
      adjusted = makeFormal(adjusted)
      break
    case 'friendly':
      adjusted = makeCasual(adjusted)
      break
    case 'enthusiastic':
      adjusted = makeCasual(adjusted)
      adjusted = addEnthusiasm(adjusted, 0.7)
      break
    case 'empathetic':
      adjusted = makeCasual(adjusted)
      adjusted = softenLanguage(adjusted)
      break
  }

  return adjusted
}
