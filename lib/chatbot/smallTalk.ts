// Small talk handler - handles casual conversation and transitions to business
// Provides friendly, human-like responses to non-business queries

import { SmallTalkCategory, ConversationContext, IntentType } from './types'

// ============================================================================
// SMALL TALK CATEGORIES AND RESPONSES
// ============================================================================

const smallTalkCategories: Record<string, SmallTalkCategory> = {
  howAreYou: {
    patterns: [
      /(how are you|how's it going|what's up|how do you do|how you doing|how are things)/i
    ],
    responses: [
      "I'm doing great, thank you for asking! Ready to help you with any IT infrastructure questions. How about you?",
      "I'm wonderful! Excited to help you today. What brings you here?",
      "Doing well! Always happy to assist with IT solutions. How can I help?",
      "I'm great, thanks! Looking forward to helping you out. What would you like to know?"
    ]
  },

  thanks: {
    patterns: [
      /(thanks|thank you|thx|appreciate|grateful)/i
    ],
    responses: [
      "You're very welcome! Happy to help!",
      "My pleasure! Let me know if you need anything else.",
      "Anytime! That's what I'm here for.",
      "Glad I could help! Feel free to ask more questions.",
      "You're welcome! Is there anything else I can assist you with?"
    ]
  },

  capabilities: {
    patterns: [
      /(what can you do|what do you know|how can you help|your capabilities|what are you|who are you)/i
    ],
    responses: [
      "Great question! I can help you explore Beyond Work's IT infrastructure services - from network cabling to data centers, cloud solutions to security systems. I can answer questions, provide information, and connect you with our team for quotes. What interests you?",
      "I'm here to be your IT infrastructure guide! I know all about our services, technology partners, and solutions. Ask me about cabling, data centers, cloud services, security - you name it!",
      "Think of me as your Beyond Work expert! I can tell you about our IT services, help you find the right solutions, answer technical questions, and get you in touch with our team. What would you like to explore?"
    ]
  },

  jokes: {
    patterns: [
      /(tell me a joke|make me laugh|something funny|joke)/i
    ],
    responses: [
      "Why did the IT professional go broke? Because they used up all their cache! Speaking of which, how can I help with your IT needs?",
      "I'd love to, but I'm better with cables than comedy! What can I help you with today?",
      "How about this: Why do programmers prefer dark mode? Because light attracts bugs! Now, what IT solutions can I help you explore?",
      "Here's one: Why did the network administrator go broke? Too many packet losses! Now, let's talk about something I'm really good at - IT infrastructure!"
    ]
  },

  weather: {
    patterns: [
      /(weather|hot|cold|rain|sunny|temperature|climate)/i
    ],
    responses: [
      "I'm more focused on IT climate control - like data center cooling! Speaking of which, can I help with any infrastructure questions?",
      "The weather's always perfect in our data centers! How can I assist you today?",
      "I don't know much about the weather, but I know plenty about keeping data centers at the perfect temperature! What can I help you with?"
    ]
  },

  goodbye: {
    patterns: [
      /(bye|goodbye|see you|talk later|gotta go|have to go)/i
    ],
    responses: [
      "Thanks for chatting! Feel free to come back anytime you have IT questions. Have a great day!",
      "Great talking with you! Don't hesitate to reach out if you need anything. Take care!",
      "See you later! Remember, I'm here whenever you need IT infrastructure help. Have a wonderful day!",
      "Goodbye! Looking forward to helping you again. Feel free to return anytime!"
    ]
  },

  compliment: {
    patterns: [
      /(you're great|you're helpful|you're awesome|you're amazing|good job|well done)/i
    ],
    responses: [
      "Thank you so much! I really appreciate that. It's my pleasure to help!",
      "That's very kind of you! I'm glad I could be helpful.",
      "Thanks! I love helping people find the right IT solutions. What else can I do for you?",
      "You just made my day! Happy to assist anytime."
    ]
  },

  confused: {
    patterns: [
      /(i don't understand|confused|what do you mean|huh|unclear)/i
    ],
    responses: [
      "I apologize for any confusion! Let me try to explain it differently. What specifically can I clarify?",
      "Sorry about that! Let me break it down better. What part would you like me to explain?",
      "Let me try again with simpler terms. What would you like to know more about?",
      "I understand it can be complex. Let's take it step by step. What can I clarify for you?"
    ]
  },

  insult: {
    patterns: [
      /(stupid|dumb|useless|terrible|worst|suck)/i
    ],
    responses: [
      "I'm sorry you're frustrated. Let me try to help you better. What specifically are you looking for?",
      "I apologize if I haven't been helpful. Can you tell me more about what you need?",
      "I understand your frustration. Let's start fresh - what can I help you with?",
      "I'm sorry I didn't meet your expectations. How can I better assist you?"
    ]
  }
}

// Transition phrases to guide back to business
const businessTransitions = [
  "I'd love to keep chatting, but I'm especially good at helping with IT infrastructure! What brought you here today?",
  "You know what, let's see how I can help you with IT solutions - that's my specialty! What are you looking for?",
  "I really enjoy our conversation! Now, is there anything IT-related I can help you with?",
  "While we're chatting, is there any IT infrastructure question I can help you explore?",
  "I'm happy to chat, but I'm most useful when helping with IT needs! What can I help you with?"
]

// ============================================================================
// SMALL TALK DETECTION AND HANDLING
// ============================================================================

/**
 * Check if message is small talk
 */
export function isSmallTalk(normalizedMessage: string, intentType?: IntentType): boolean {
  // Check if intent type indicates small talk
  const smallTalkIntents: IntentType[] = ['how_are_you', 'thanks', 'capabilities', 'joke', 'weather']
  if (intentType && smallTalkIntents.includes(intentType)) {
    return true
  }

  // Check against small talk patterns
  for (const category of Object.values(smallTalkCategories)) {
    for (const pattern of category.patterns) {
      if (pattern.test(normalizedMessage)) {
        return true
      }
    }
  }

  return false
}

/**
 * Handle small talk message and return appropriate response
 */
export function handleSmallTalk(
  normalizedMessage: string,
  intentType: IntentType,
  context: ConversationContext
): string {
  // Try to find matching category
  for (const [categoryName, category] of Object.entries(smallTalkCategories)) {
    for (const pattern of category.patterns) {
      if (pattern.test(normalizedMessage)) {
        const response = selectSmallTalkResponse(category)

        // Add transition after 2+ small talk exchanges
        if (context.smallTalkCount >= 2) {
          return `${response} ${selectBusinessTransition()}`
        }

        return response
      }
    }
  }

  // Fallback based on intent type
  return getSmallTalkByIntent(intentType, context)
}

/**
 * Select random response from category
 */
function selectSmallTalkResponse(category: SmallTalkCategory): string {
  const responses = category.responses
  return responses[Math.floor(Math.random() * responses.length)]
}

/**
 * Select random business transition phrase
 */
function selectBusinessTransition(): string {
  return businessTransitions[Math.floor(Math.random() * businessTransitions.length)]
}

/**
 * Get small talk response by intent type
 */
function getSmallTalkByIntent(intentType: IntentType, context: ConversationContext): string {
  const mapping: Record<IntentType, string[]> = {
    how_are_you: smallTalkCategories.howAreYou.responses,
    thanks: smallTalkCategories.thanks.responses,
    capabilities: smallTalkCategories.capabilities.responses,
    joke: smallTalkCategories.jokes.responses,
    weather: smallTalkCategories.weather.responses,
    greeting: [],
    cabling: [],
    wifi: [],
    datacenter: [],
    security: [],
    cloud: [],
    managed: [],
    pos: [],
    voip: [],
    services: [],
    partners: [],
    quote_request: [],
    brochure: [],
    small_talk: [],
    general_inquiry: []
  }

  const responses = mapping[intentType]
  if (!responses || responses.length === 0) {
    // Generic small talk response
    const genericResponses = [
      "That's interesting! I'm here to help with IT infrastructure questions. What can I help you with?",
      "I appreciate you chatting with me! Is there anything IT-related I can assist you with today?",
      "Thanks for that! Now, what brings you to Beyond Work today?"
    ]
    const response = genericResponses[Math.floor(Math.random() * genericResponses.length)]

    // Add transition if needed
    if (context.smallTalkCount >= 2) {
      return `${response} ${selectBusinessTransition()}`
    }

    return response
  }

  const response = responses[Math.floor(Math.random() * responses.length)]

  // Add transition after multiple small talk exchanges
  if (context.smallTalkCount >= 2 && intentType !== 'capabilities') {
    return `${response} ${selectBusinessTransition()}`
  }

  return response
}

/**
 * Check if we should force a business transition
 */
export function shouldForceBusinessTransition(context: ConversationContext): boolean {
  // Force transition after 3 small talk exchanges
  return context.smallTalkCount >= 3
}

/**
 * Generate strong business transition message
 */
export function generateBusinessTransition(context: ConversationContext): string {
  const strongTransitions = [
    "I'd love to continue chatting, but I think I can be most helpful by discussing IT solutions! What specific IT needs can I help you with today?",
    "You know what, let me focus on what I do best - helping with IT infrastructure! Are you interested in learning about our services like data centers, cloud solutions, or networking?",
    "I really enjoy our chat! Now, let's talk about how Beyond Work can help your business. What IT challenges are you facing?"
  ]

  return strongTransitions[Math.floor(Math.random() * strongTransitions.length)]
}

/**
 * Detect if user is trying to get back to business
 */
export function isBusinessIntent(normalizedMessage: string): boolean {
  const businessKeywords = [
    'service', 'help', 'need', 'want', 'looking for', 'interested',
    'question', 'tell me about', 'information', 'quote', 'price', 'cost'
  ]

  return businessKeywords.some(keyword => normalizedMessage.includes(keyword))
}

/**
 * Get category name for analytics
 */
export function getSmallTalkCategory(normalizedMessage: string): string | null {
  for (const [categoryName, category] of Object.entries(smallTalkCategories)) {
    for (const pattern of category.patterns) {
      if (pattern.test(normalizedMessage)) {
        return categoryName
      }
    }
  }

  return null
}
