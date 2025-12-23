// Natural timing utilities for human-like chatbot
// Calculates variable typing delays based on message length

import { TypingDelayConfig } from './types'

// Default typing delay configuration
const defaultConfig: TypingDelayConfig = {
  baseDelay: 500,          // Minimum delay in ms
  characterFactor: 15,     // ms per character (simulates typing speed)
  randomVariation: 0.3,    // ±30% randomness
  minDelay: 800,           // Absolute minimum delay
  maxDelay: 4000           // Absolute maximum delay (cap for very long messages)
}

/**
 * Calculate typing delay based on message length
 * Returns a delay in milliseconds that varies naturally
 *
 * Examples:
 * - Short message (20 chars): 800-1300ms
 * - Medium message (80 chars): 1400-2200ms
 * - Long message (200 chars): 3000-4000ms
 *
 * @param messageLength - Length of the message to send
 * @param config - Optional configuration overrides
 * @returns Delay in milliseconds
 */
export function calculateTypingDelay(
  messageLength: number,
  config: Partial<TypingDelayConfig> = {}
): number {
  // Merge with defaults
  const finalConfig = { ...defaultConfig, ...config }

  // Calculate base delay from message length
  const baseTime = finalConfig.baseDelay + (messageLength * finalConfig.characterFactor)

  // Cap at configured limits
  const cappedTime = Math.min(
    Math.max(baseTime, finalConfig.minDelay),
    finalConfig.maxDelay
  )

  // Add random variation for natural feel
  const randomFactor = 1 + ((Math.random() - 0.5) * 2 * finalConfig.randomVariation)

  // Final delay with randomness
  const finalDelay = Math.round(cappedTime * randomFactor)

  // Ensure within absolute bounds
  return Math.min(Math.max(finalDelay, finalConfig.minDelay), finalConfig.maxDelay)
}

/**
 * Calculate delay for a "thinking" period before typing
 * Used for complex questions that warrant a brief pause
 *
 * @returns Delay in milliseconds (800-1200ms)
 */
export function calculateThinkingDelay(): number {
  const baseThinkingTime = 1000
  const variation = 0.2  // ±20%
  const randomFactor = 1 + ((Math.random() - 0.5) * 2 * variation)

  return Math.round(baseThinkingTime * randomFactor)
}

/**
 * Calculate delay between multiple related messages
 * Used when sending follow-up questions after main response
 *
 * @returns Delay in milliseconds (1200-1800ms)
 */
export function calculateFollowUpDelay(): number {
  const baseFollowUpTime = 1500
  const variation = 0.2  // ±20%
  const randomFactor = 1 + ((Math.random() - 0.5) * 2 * variation)

  return Math.round(baseFollowUpTime * randomFactor)
}

/**
 * Calculate total time for multi-message response
 * Used for planning progressive conversations
 *
 * @param messages - Array of message strings
 * @param includeFollowUpDelays - Include delays between messages
 * @returns Total delay in milliseconds
 */
export function calculateTotalDelay(
  messages: string[],
  includeFollowUpDelays: boolean = true
): number {
  if (messages.length === 0) return 0

  let totalDelay = 0

  // Add typing delay for each message
  messages.forEach((message, index) => {
    totalDelay += calculateTypingDelay(message.length)

    // Add follow-up delay between messages (except after last message)
    if (includeFollowUpDelays && index < messages.length - 1) {
      totalDelay += calculateFollowUpDelay()
    }
  })

  return totalDelay
}

/**
 * Simulate human reading time for user message
 * Optional - can be used to add delay before bot starts "typing"
 *
 * @param messageLength - Length of user's message
 * @returns Reading time in milliseconds
 */
export function calculateReadingTime(messageLength: number): number {
  // Average reading speed: ~250 words per minute = ~4 words per second
  // Average word length: ~5 characters
  // So roughly 20 characters per second = 50ms per character
  const readingSpeed = 50  // ms per character
  const baseReadingTime = messageLength * readingSpeed

  // Cap reading time (don't make user wait too long)
  const cappedTime = Math.min(baseReadingTime, 2000)

  // Add small random variation
  const randomFactor = 1 + ((Math.random() - 0.5) * 0.4)  // ±20%

  return Math.round(cappedTime * randomFactor)
}

/**
 * Get typing speed category based on message
 * Can be used to adjust animation speed
 */
export function getTypingSpeed(messageLength: number): 'fast' | 'normal' | 'slow' {
  if (messageLength < 30) return 'fast'
  if (messageLength < 100) return 'normal'
  return 'slow'
}

/**
 * Helper to create a delay promise
 * Useful for async/await patterns
 *
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Progressive typing delay calculator
 * Returns an array of delays for progressive message reveal
 * (if you want to show message word-by-word or character-by-character)
 *
 * @param message - The message to type
 * @param mode - 'character' or 'word' typing mode
 * @returns Array of delays in milliseconds
 */
export function calculateProgressiveDelays(
  message: string,
  mode: 'character' | 'word' = 'character'
): number[] {
  const delays: number[] = []
  const items = mode === 'character' ? message.split('') : message.split(/\s+/)

  items.forEach((item, index) => {
    // Faster at the beginning, slightly variable throughout
    const baseDelay = mode === 'character' ? 50 : 150
    const randomFactor = 0.8 + (Math.random() * 0.4)  // 0.8 to 1.2
    delays.push(Math.round(baseDelay * randomFactor))

    // Add extra pause after punctuation
    if (mode === 'character' && ['.', '!', '?', ',', ';'].includes(item)) {
      delays[index] = delays[index] * 2
    }
  })

  return delays
}
