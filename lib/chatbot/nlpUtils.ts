// NLP utilities for human-like chatbot
// Includes fuzzy matching, sentiment analysis, intent detection

import { Intent, SentimentAnalysis, ConversationContext, IntentType, CompanySize } from './types'

// ============================================================================
// FUZZY MATCHING - Levenshtein Distance Algorithm
// ============================================================================

/**
 * Calculate Levenshtein distance between two strings
 * Used for typo tolerance
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = []

  // Initialize matrix
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j
  }

  // Fill matrix
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,      // insertion
          matrix[i - 1][j] + 1       // deletion
        )
      }
    }
  }

  return matrix[str2.length][str1.length]
}

/**
 * Check if two strings match within a similarity threshold
 * @param input - User input string
 * @param pattern - Pattern to match against
 * @param threshold - Similarity threshold (0-1), default 0.75
 */
export function fuzzyMatch(input: string, pattern: string, threshold: number = 0.75): boolean {
  const distance = levenshteinDistance(input.toLowerCase(), pattern.toLowerCase())
  const maxLength = Math.max(input.length, pattern.length)

  // Avoid division by zero
  if (maxLength === 0) return true

  const similarity = 1 - (distance / maxLength)
  return similarity >= threshold
}

// ============================================================================
// MESSAGE NORMALIZATION
// ============================================================================

// Common abbreviations and informal language
const abbreviations: Record<string, string> = {
  'u': 'you',
  'ur': 'your',
  'r': 'are',
  'wanna': 'want to',
  'gonna': 'going to',
  'gimme': 'give me',
  'lemme': 'let me',
  'kinda': 'kind of',
  'gotta': 'got to',
  'dunno': 'don\'t know',
  'wont': 'won\'t',
  'cant': 'can\'t',
  'dont': 'don\'t',
  'im': 'i\'m',
  'ive': 'i\'ve',
  'youre': 'you\'re',
  'theyre': 'they\'re',
  'thats': 'that\'s',
  'whats': 'what\'s',
  'hows': 'how\'s',
  'thx': 'thanks',
  'ty': 'thank you',
  'pls': 'please',
  'plz': 'please',
}

// Common typos for key terms
const commonTypos: Record<string, string> = {
  'datacntr': 'datacenter',
  'datacentr': 'datacenter',
  'dataceter': 'datacenter',
  'cabel': 'cable',
  'cabeling': 'cabling',
  'cabelling': 'cabling',
  'securty': 'security',
  'secrity': 'security',
  'scurity': 'security',
  'wify': 'wifi',
  'wiffy': 'wifi',
  'wirless': 'wireless',
  'wireles': 'wireless',
}

/**
 * Normalize user message - expand abbreviations, fix typos, standardize
 */
export function normalizeMessage(message: string): string {
  let normalized = message.toLowerCase().trim()

  // Expand abbreviations
  Object.entries(abbreviations).forEach(([abbr, full]) => {
    const regex = new RegExp(`\\b${abbr}\\b`, 'gi')
    normalized = normalized.replace(regex, full)
  })

  // Fix common typos
  Object.entries(commonTypos).forEach(([typo, correct]) => {
    const regex = new RegExp(`\\b${typo}\\b`, 'gi')
    normalized = normalized.replace(regex, correct)
  })

  return normalized
}

// ============================================================================
// SYNONYM MAPPING
// ============================================================================

// Synonym database for key concepts
export const synonyms: Record<string, string[]> = {
  'cabling': ['wiring', 'cables', 'cat6', 'cat7', 'cat8', 'ethernet', 'network cables', 'structured cabling'],
  'wifi': ['wi-fi', 'wireless', 'wlan', 'wireless network'],
  'datacenter': ['data center', 'server room', 'data centre', 'dc'],
  'security': ['cctv', 'cameras', 'surveillance', 'access control', 'firewall'],
  'cloud': ['aws', 'azure', 'google cloud', 'cloud computing', 'saas'],
  'help': ['assist', 'support', 'aid', 'guide', 'information', 'info'],
  'price': ['cost', 'quote', 'pricing', 'budget', 'rates', 'how much'],
  'thanks': ['thank you', 'appreciate', 'grateful'],
  'managed': ['monitoring', 'maintenance', 'support'],
}

/**
 * Check if message contains any synonym of a keyword
 */
export function containsSynonym(message: string, keyword: string): boolean {
  const lowerMessage = message.toLowerCase()

  // Check exact keyword
  if (lowerMessage.includes(keyword.toLowerCase())) {
    return true
  }

  // Check synonyms
  const synonymList = synonyms[keyword.toLowerCase()] || []
  return synonymList.some(synonym => lowerMessage.includes(synonym.toLowerCase()))
}

// ============================================================================
// SENTIMENT ANALYSIS
// ============================================================================

const positiveWords = [
  'great', 'excellent', 'love', 'perfect', 'thanks', 'awesome',
  'good', 'helpful', 'appreciate', 'wonderful', 'fantastic', 'nice',
  'amazing', 'brilliant', 'terrific', 'pleased', 'happy', 'glad'
]

const negativeWords = [
  'bad', 'terrible', 'hate', 'frustrated', 'confused', 'disappointed',
  'problem', 'issue', 'wrong', 'error', 'broken', 'not working',
  'fail', 'poor', 'awful', 'horrible', 'worst', 'annoying'
]

const urgencyWords = [
  'urgent', 'asap', 'emergency', 'immediately', 'critical', 'now',
  'quickly', 'hurry', 'fast', 'right away', 'urgent', 'priority'
]

/**
 * Analyze sentiment of user message
 */
export function analyzeSentiment(text: string): SentimentAnalysis {
  const lowerText = text.toLowerCase()

  let positiveCount = 0
  let negativeCount = 0
  let urgencyCount = 0

  // Count sentiment indicators
  positiveWords.forEach(word => {
    if (lowerText.includes(word)) positiveCount++
  })

  negativeWords.forEach(word => {
    if (lowerText.includes(word)) negativeCount++
  })

  urgencyWords.forEach(word => {
    if (lowerText.includes(word)) urgencyCount++
  })

  // Determine sentiment
  if (urgencyCount > 0) {
    return {
      sentiment: 'negative',
      confidence: 0.8,
      emotionalIndicators: ['urgency']
    }
  }

  if (positiveCount > negativeCount) {
    return {
      sentiment: 'positive',
      confidence: Math.min(0.9, 0.6 + (positiveCount * 0.1)),
      emotionalIndicators: ['positive']
    }
  } else if (negativeCount > positiveCount) {
    return {
      sentiment: 'negative',
      confidence: Math.min(0.9, 0.6 + (negativeCount * 0.1)),
      emotionalIndicators: ['negative']
    }
  }

  return {
    sentiment: 'neutral',
    confidence: 0.5,
    emotionalIndicators: []
  }
}

// ============================================================================
// ENTITY EXTRACTION
// ============================================================================

/**
 * Extract entities from message (urgency, company size, etc.)
 */
function extractEntities(message: string, intentType: IntentType): Record<string, any> {
  const entities: Record<string, any> = {}
  const lowerMessage = message.toLowerCase()

  // Extract urgency
  if (urgencyWords.some(word => lowerMessage.includes(word))) {
    entities.urgency = 'high'
  }

  // Extract company size hints
  if (/enterprise|large|corporation|multinational|big company/i.test(message)) {
    entities.companySize = 'enterprise' as CompanySize
  } else if (/small|startup|smb|small business/i.test(message)) {
    entities.companySize = 'small' as CompanySize
  } else if (/medium|mid-size|mid-sized/i.test(message)) {
    entities.companySize = 'medium' as CompanySize
  }

  // Extract mentioned services
  const services: string[] = []
  if (containsSynonym(message, 'cabling')) services.push('cabling')
  if (containsSynonym(message, 'wifi')) services.push('wifi')
  if (containsSynonym(message, 'datacenter')) services.push('datacenter')
  if (containsSynonym(message, 'security')) services.push('security')
  if (containsSynonym(message, 'cloud')) services.push('cloud')

  if (services.length > 0) {
    entities.services = services
  }

  return entities
}

// ============================================================================
// INTENT DETECTION
// ============================================================================

// Intent pattern definitions with fuzzy keyword support
interface IntentPattern {
  type: IntentType
  patterns: RegExp[]
  fuzzyKeywords?: string[]
  confidence: number
}

const intentPatterns: IntentPattern[] = [
  {
    type: 'greeting',
    patterns: [/^(hi|hello|hey|good morning|good afternoon|good evening|greetings)/i],
    confidence: 0.9
  },
  {
    type: 'how_are_you',
    patterns: [/(how are you|how's it going|what's up|how do you do|how you doing)/i],
    confidence: 0.9
  },
  {
    type: 'thanks',
    patterns: [/(thanks|thank you|thx|appreciate|grateful)/i],
    confidence: 0.9
  },
  {
    type: 'capabilities',
    patterns: [/(what can you do|what do you know|how can you help|your capabilities|what are you|who are you)/i],
    confidence: 0.85
  },
  {
    type: 'joke',
    patterns: [/(tell me a joke|make me laugh|something funny|joke|funny)/i],
    confidence: 0.85
  },
  {
    type: 'weather',
    patterns: [/(weather|hot|cold|rain|sunny|temperature)/i],
    confidence: 0.7
  },
  {
    type: 'cabling',
    patterns: [/(cabling|cable|fiber|structured|cat6|cat7|cat8|ethernet)/i],
    fuzzyKeywords: ['cabling', 'cable', 'fiber'],
    confidence: 0.85
  },
  {
    type: 'wifi',
    patterns: [/(wifi|wireless|wi-fi|wlan)/i],
    fuzzyKeywords: ['wifi', 'wireless'],
    confidence: 0.85
  },
  {
    type: 'datacenter',
    patterns: [/(data ?center|datacenter|server room|raised floor|cooling|hvac)/i],
    fuzzyKeywords: ['datacenter', 'data center'],
    confidence: 0.85
  },
  {
    type: 'security',
    patterns: [/(security|cctv|camera|surveillance|firewall|access control)/i],
    fuzzyKeywords: ['security', 'cctv'],
    confidence: 0.85
  },
  {
    type: 'cloud',
    patterns: [/(cloud|aws|azure|google cloud|migration)/i],
    fuzzyKeywords: ['cloud'],
    confidence: 0.85
  },
  {
    type: 'managed',
    patterns: [/(managed|monitoring|maintenance|help desk)/i],
    confidence: 0.85
  },
  {
    type: 'pos',
    patterns: [/(pos|point of sale|retail)/i],
    confidence: 0.85
  },
  {
    type: 'voip',
    patterns: [/(voip|ip telephony|phone|telephone|video|conferencing|telepresence)/i],
    confidence: 0.85
  },
  {
    type: 'services',
    patterns: [/(service|what do you|what does beyond work|what can you offer)/i],
    confidence: 0.75
  },
  {
    type: 'partners',
    patterns: [/(partner|vendor|brand|cisco|dell|microsoft|hpe)/i],
    confidence: 0.8
  },
  {
    type: 'quote_request',
    patterns: [/(quote|consultation|contact|speak|talk|meeting|price|cost)/i],
    confidence: 0.8
  },
  {
    type: 'brochure',
    patterns: [/(brochure|download|pdf|document)/i],
    confidence: 0.8
  }
]

/**
 * Detect intent from user message with fuzzy matching support
 */
export function detectIntent(message: string, context: ConversationContext): Intent {
  const lowerMessage = message.toLowerCase()

  // Try exact pattern matching first
  for (const intentDef of intentPatterns) {
    // Check regex patterns
    for (const pattern of intentDef.patterns) {
      if (pattern.test(lowerMessage)) {
        return {
          type: intentDef.type,
          confidence: intentDef.confidence,
          entities: extractEntities(message, intentDef.type)
        }
      }
    }

    // Check fuzzy keyword matching
    if (intentDef.fuzzyKeywords) {
      const words = lowerMessage.split(/\s+/)
      for (const keyword of intentDef.fuzzyKeywords) {
        for (const word of words) {
          // Skip very short words
          if (word.length < 3) continue

          if (fuzzyMatch(word, keyword, 0.75)) {
            return {
              type: intentDef.type,
              confidence: intentDef.confidence * 0.9, // Slightly lower confidence for fuzzy match
              entities: extractEntities(message, intentDef.type)
            }
          }
        }
      }
    }
  }

  // Default intent
  return {
    type: 'general_inquiry',
    confidence: 0.5,
    entities: extractEntities(message, 'general_inquiry')
  }
}

/**
 * Check if message is a question
 */
export function isQuestion(message: string): boolean {
  const questionWords = ['what', 'how', 'why', 'when', 'where', 'who', 'which', 'can', 'do', 'does', 'is', 'are']
  const lowerMessage = message.toLowerCase().trim()

  // Ends with question mark
  if (lowerMessage.endsWith('?')) return true

  // Starts with question word
  const firstWord = lowerMessage.split(/\s+/)[0]
  if (questionWords.includes(firstWord)) return true

  return false
}

/**
 * Get message complexity (simple, medium, complex)
 */
export function getMessageComplexity(message: string): 'simple' | 'medium' | 'complex' {
  const wordCount = message.split(/\s+/).length

  if (wordCount <= 5) return 'simple'
  if (wordCount <= 15) return 'medium'
  return 'complex'
}
