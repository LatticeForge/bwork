'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getResponse, quickReplies, partners, responses } from '@/lib/chatbotKnowledge'
import { createConversationEngine } from '@/lib/chatbot/conversationEngine'
import { calculateTypingDelay, calculateFollowUpDelay } from '@/lib/chatbot/timing'

interface Message {
  id: string
  text: string
  sender: 'bot' | 'user'
  timestamp: Date
  downloads?: { name: string; url: string }[]
  intent?: string
  sentiment?: string
}

interface InquiryForm {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  message: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [inquiryForm, setInquiryForm] = useState<InquiryForm>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Initialize conversation engine (memoized to persist across renders)
  const conversationEngine = useMemo(() => createConversationEngine(), [])

  // Initialize with greeting message
  useEffect(() => {
    addBotMessage(responses.greeting.message, responses.greeting.quickReplies)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addBotMessage = (text: string, showReplies: boolean = false, downloads?: any[]) => {
    setIsTyping(true)
    // Calculate dynamic typing delay based on message length
    const typingDelay = calculateTypingDelay(text.length)

    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        downloads,
      }
      setMessages(prev => [...prev, newMessage])
      setIsTyping(false)
      setShowQuickReplies(showReplies)
    }, typingDelay)
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, newMessage])

    // Save individual message to backend immediately
    saveMessageToBackend(text)
  }

  // Save individual user message to backend
  const saveMessageToBackend = async (message: string, retryCount = 0) => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/chat-enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        console.log('✅ Message saved successfully')
      } else if (response.status === 429 && retryCount < 2) {
        // Rate limited, retry after delay
        console.log('⏳ Rate limited, retrying in 5 seconds...')
        setTimeout(() => saveMessageToBackend(message, retryCount + 1), 5000)
      } else {
        console.error('Failed to save message:', await response.text())
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('Request timeout saving message')
        if (retryCount < 2) {
          setTimeout(() => saveMessageToBackend(message, retryCount + 1), 3000)
        }
      } else {
        console.error('Error saving message:', error)
        // Silently fail for message logging - don't interrupt user experience
      }
    }
  }


  const handleSendMessage = (message?: string) => {
    const textToSend = message || inputValue.trim()
    if (!textToSend) return

    setShowQuickReplies(false)
    addUserMessage(textToSend)
    setInputValue('')

    // Process message through conversation engine
    const botResponse = conversationEngine.processMessage(textToSend)

    // Calculate dynamic typing delay based on response length
    const typingDelay = calculateTypingDelay(botResponse.response.length)

    // Show typing indicator
    setIsTyping(true)

    // Send main response after typing delay
    setTimeout(() => {
      setIsTyping(false)

      // Add bot message
      const newMessage: Message = {
        id: Date.now().toString(),
        text: botResponse.response,
        sender: 'bot',
        timestamp: new Date(),
        sentiment: botResponse.sentiment,
      }
      setMessages(prev => [...prev, newMessage])

      // Update UI state
      setShowQuickReplies(botResponse.shouldShowQuickReplies)
      if (botResponse.shouldShowForm) {
        setShowInquiryForm(true)
      }

      // Handle follow-up questions
      if (botResponse.followUps && botResponse.followUps.length > 0) {
        const followUpDelay = calculateFollowUpDelay()

        // Send follow-up after a brief pause
        setTimeout(() => {
          setIsTyping(true)
          const followUpTypingDelay = calculateTypingDelay(botResponse.followUps![0].length)

          setTimeout(() => {
            setIsTyping(false)
            const followUpMessage: Message = {
              id: (Date.now() + 1).toString(),
              text: botResponse.followUps![0],
              sender: 'bot',
              timestamp: new Date(),
            }
            setMessages(prev => [...prev, followUpMessage])
          }, followUpTypingDelay)
        }, followUpDelay)
      }
    }, typingDelay)
  }

  const handleQuickReply = (value: string) => {
    setShowQuickReplies(false)

    switch (value) {
      case 'services':
        addUserMessage('Tell me about your services')
        addBotMessage(responses.services.message, false)
        break
      case 'partners':
        addUserMessage('Who are your technology partners?')
        addBotMessage(responses.partners.message, true)
        break
      case 'quote':
        addUserMessage('I would like to request a quote')
        setShowInquiryForm(true)
        addBotMessage(responses.quote.message, false)
        break
      case 'brochure':
        addUserMessage('I want to download the brochure')
        addBotMessage(responses.brochure.message, true, responses.brochure.downloads)
        break
    }
  }

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Show loading message
    addBotMessage("Processing your inquiry...", false)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 15000) // 15 second timeout

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryForm),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        addBotMessage(
          "Thank you for your inquiry! Our team will review your request and get back to you within 24 hours. Is there anything else I can help you with?",
          true
        )
        setShowInquiryForm(false)
        setInquiryForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
        })
      } else {
        const data = await response.json().catch(() => ({}))
        let errorMessage = "I apologize, but there was an error submitting your inquiry. "

        if (response.status === 429) {
          errorMessage += "You've submitted too many requests. Please wait a few minutes and try again, or contact us directly at support@bwork.sa"
        } else if (response.status === 400 && data.details) {
          errorMessage += "Please check your form data and try again, or contact us directly at support@bwork.sa"
        } else if (response.status >= 500) {
          errorMessage += "Our server is experiencing issues. Please try again in a few moments or contact us directly at support@bwork.sa"
        } else {
          errorMessage += "Please try again or contact us directly at support@bwork.sa"
        }

        addBotMessage(errorMessage, true)
      }
    } catch (error) {
      let errorMessage = "I apologize, but there was an error submitting your inquiry. "

      if (error instanceof Error && error.name === 'AbortError') {
        errorMessage += "The request timed out. Please check your internet connection and try again, or contact us directly at support@bwork.sa"
      } else if (error instanceof Error && (error.message.includes('fetch') || error.message.includes('network'))) {
        errorMessage += "Please check your internet connection and try again, or contact us directly at support@bwork.sa"
      } else {
        errorMessage += "Please try again or contact us directly at support@bwork.sa"
      }

      addBotMessage(errorMessage, true)
      console.error('Inquiry submission error:', error)
    }
  }

  const handleClearChat = () => {
    setMessages([])
    conversationEngine.resetContext()
    addBotMessage(responses.greeting.message, responses.greeting.quickReplies)
    setShowInquiryForm(false)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isOpen
            ? '0 0 0 0 rgba(59, 130, 246, 0)'
            : [
                '0 0 0 0 rgba(59, 130, 246, 0.7)',
                '0 0 0 20px rgba(59, 130, 246, 0)',
              ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.div
              key="logo"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="text-2xl font-bold"
            >
              B
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)] flex flex-col bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-secondary-200/50 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <div>
                  <h3 className="font-semibold">Beyond Work AI Assistant</h3>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-xs text-white/80">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                title="Close chat"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%)',
              }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-br-none'
                        : 'bg-white border border-secondary-200 text-secondary-900 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>

                    {/* Download Links */}
                    {message.downloads && message.downloads.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.downloads.map((download, idx) => (
                          <a
                            key={idx}
                            href={download.url}
                            download
                            className="flex items-center space-x-2 p-2 bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors text-primary-600 text-sm"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span>{download.name}</span>
                          </a>
                        ))}
                      </div>
                    )}

                    <p className="text-xs mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-secondary-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-secondary-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-secondary-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-secondary-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Buttons */}
            {showQuickReplies && !showInquiryForm && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 pb-2 flex flex-wrap gap-2"
              >
                {quickReplies.map((reply) => (
                  <button
                    key={reply.value}
                    onClick={() => handleQuickReply(reply.value)}
                    className="px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-50 transition-colors"
                  >
                    {reply.label}
                  </button>
                ))}
              </motion.div>
            )}

            {/* Inquiry Form */}
            {showInquiryForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 pb-2 max-h-[300px] overflow-y-auto"
              >
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Name *"
                      aria-label="Your name"
                      required
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      aria-label="Company name"
                      value={inquiryForm.company}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                      className="px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email *"
                    aria-label="Email address"
                    required
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    aria-label="Phone number"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <select
                    value={inquiryForm.projectType}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, projectType: e.target.value })}
                    aria-label="Project type"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-600"
                  >
                    <option value="">Project Type</option>
                    <option value="cabling">Structured Cabling</option>
                    <option value="datacenter">Data Center</option>
                    <option value="networking">Networking</option>
                    <option value="security">Security Systems</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="managed">Managed IT</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    placeholder="Your message *"
                    aria-label="Your message"
                    required
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  />
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowInquiryForm(false)}
                      className="px-4 py-2 bg-secondary-200 text-secondary-700 rounded-lg text-sm font-medium hover:bg-secondary-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Input Area */}
            {!showInquiryForm && (
              <div className="p-4 border-t border-secondary-200/50">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex space-x-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    aria-label="Chat message input"
                    className="flex-1 px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="px-4 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
