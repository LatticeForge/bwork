// Response variations for natural, human-like conversation
// Multiple response options for each intent with context-aware selection

import { Intent, IntentType, ResponseVariation, ConversationContext, SentimentAnalysis, ProgressiveResponse } from './types'
import { responses as legacyResponses } from '../chatbotKnowledge'

// ============================================================================
// RESPONSE VARIATIONS DATABASE
// ============================================================================

interface ResponseVariationsMap {
  [key: string]: ResponseVariation[]
}

const responseVariations: ResponseVariationsMap = {
  // GREETING VARIATIONS
  greeting: [
    {
      text: "Hi there! Great to connect with you today. I'm here to help with all things IT infrastructure. What brings you here?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'initial' }
    },
    {
      text: "Hello! Welcome to Beyond Work. I'd love to learn more about your IT needs. What can I help you explore today?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    },
    {
      text: "Hey! Nice to see you. I'm your Beyond Work assistant - think of me as your IT infrastructure guide. What would you like to know?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'initial' }
    },
    {
      text: "Good to hear from you! I'm here to help you with IT solutions - from cabling to cloud services. What's on your mind?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // SERVICES OVERVIEW VARIATIONS
  services: [
    {
      text: "Beyond Work provides comprehensive IT infrastructure solutions including Passive Infrastructure for structured cabling and fiber optics, Active Infrastructure with networking and security equipment, complete Data Center Solutions, Unified Communications, 24/7 Managed IT Services, Cloud Services, and comprehensive Security Solutions. What specific area interests you most?",
      tone: 'formal',
      contextConditions: { conversationStage: 'initial' }
    },
    {
      text: "We cover everything you need for IT infrastructure! Our services range from the foundation - like cabling and fiber optics - all the way to advanced cloud solutions and 24/7 managed services. Is there a particular service you'd like to dive into?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Great question! We're a full-service IT infrastructure partner. We handle passive infrastructure (cabling, fiber), active systems (networking, security), data centers, cloud migration, managed IT services, and more. Which area would be most helpful for you right now?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // CABLING VARIATIONS
  cabling: [
    {
      text: "Beyond Work offers professional structured cabling services including Copper Cabling with CAT-6, CAT-6a, CAT-7, and CAT-8 for data, voice, and PoE, as well as Fiber Optic Systems with design, fusion splicing, termination, and certification. We also provide reliable Voice and Data Cabling infrastructure. Would you like to schedule a site survey?",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "We're experts in structured cabling! From Cat6 to Cat8 copper cabling, plus fiber optic systems - we handle design, installation, and certification. We make sure your cabling infrastructure is future-proof and properly documented. What type of project are you working on?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Cabling is our foundation! We provide everything from basic Cat6 installations to advanced fiber optic networks. Our team handles fusion splicing, termination, certification - the whole package. Are you starting fresh or upgrading existing infrastructure?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // WIFI VARIATIONS
  wifi: [
    {
      text: "Beyond Work provides expert WiFi planning, design, and installation services including site surveys, RF analysis, innovative antenna technology for maximum signal, interference optimization, scalable wireless networking, and enterprise-grade access points. Ready to improve your wireless network?",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "WiFi can be tricky, but we've got it down to a science! We start with RF analysis and site surveys, then use advanced antenna placement to maximize coverage and minimize interference. The result? Strong, reliable wireless throughout your facility. What's your space like?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Let's get your WiFi sorted! We do complete wireless planning - site surveys, RF optimization, enterprise access points, the works. We've helped businesses eliminate dead zones and boost performance. What challenges are you facing with your current wireless setup?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // DATA CENTER VARIATIONS
  datacenter: [
    {
      text: "Beyond Work offers complete data center infrastructure services including Power Systems with UPS, PDUs, and backup generators, Precision Cooling with HVAC systems, professional Raised Floor installation, Fire Detection and Suppression systems, high-density Data Cabling, real-time Monitoring, and enterprise Server and Storage solutions with virtualization. From initial design to ongoing management, Beyond Work handles every aspect of your data center needs.",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Data centers are complex, but that's where we excel! We handle everything - power systems, cooling, raised floors, fire suppression, cabling, monitoring, and servers with virtualization. What aspect of data center infrastructure are you most focused on right now?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "We build and optimize complete data centers! From power and cooling to servers and storage, we've got you covered. Whether you're building new or upgrading existing, our team handles design, implementation, and ongoing management. What's your data center project looking like?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // SECURITY VARIATIONS
  security: [
    {
      text: "Beyond Work offers comprehensive security services including Physical Security with CCTV and IP Camera Systems for Intelligent Video Surveillance, Access Control Systems, and Video Door Phones. We also provide Cybersecurity services including Firewall implementation and management, 24/7 Security monitoring, Threat detection and response, and Enterprise security solutions. We protect your business with multi-layered security approaches combining physical and digital defenses.",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Security is critical, and we take it seriously! We provide both physical security (CCTV, access control) and cybersecurity (firewalls, threat detection, monitoring). We believe in layered defense - protecting your business from every angle. What's your primary security concern?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Let's secure your business! We offer complete security solutions - from camera systems and access control to firewalls and 24/7 monitoring. Physical + cyber security working together. What areas do you want to protect first?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // CLOUD VARIATIONS
  cloud: [
    {
      text: "Beyond Work helps businesses migrate to and manage cloud platforms with Cloud Migration Strategy for smooth transition planning, Platform Management for AWS, Azure, and Google Cloud, Hybrid Cloud Solutions, Cloud Backup and Recovery for data protection, and Cloud Security for secure cloud environments. Our certified engineers ensure your cloud infrastructure is optimized, secure, and cost-effective.",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Moving to the cloud can seem daunting, but we make it smooth! We handle migration strategy, platform management (AWS, Azure, Google Cloud), hybrid setups, backup, and security. Our team makes sure you get the benefits of cloud without the headaches. Are you already in the cloud or just getting started?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Cloud services are our specialty! We help you migrate, optimize, and manage cloud infrastructure across AWS, Azure, and Google Cloud. Whether it's a full migration or hybrid setup, we ensure you're getting maximum value. What's driving your cloud interest?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // MANAGED SERVICES VARIATIONS
  managed: [
    {
      text: "Beyond Work provides comprehensive, proactive Managed IT Services including 24/7 system monitoring and alerts, continuous maintenance and updates, security patch management, performance optimization, help desk support, and equipment setup and installation. Benefits include predictable monthly costs, reduced downtime, expert technical support, and the ability to focus on your core business. Let Beyond Work handle your IT infrastructure while you focus on growing your business.",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Think of us as your IT department! We provide 24/7 monitoring, maintenance, security updates, help desk support - everything you need to keep your IT running smoothly. You get predictable costs, less downtime, and expert support whenever you need it. Sound like what you're looking for?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Managed IT is about peace of mind! We monitor your systems 24/7, handle updates and patches, optimize performance, and provide help desk support. You focus on your business, we handle the IT. What IT challenges are taking up your time right now?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // PARTNERS VARIATIONS
  partners: [
    {
      text: "Beyond Work is a certified partner with industry-leading technology vendors including CISCO, HPE, Dell, Lenovo, Microsoft, Google, Linksys, D-Link, TrendNet, Corning, Belden, CommScope, APC, Kaspersky, VMware, Broadcom, Veeam, and Epson. Our partnerships ensure you receive proven, enterprise-grade products backed by expert implementation and support.",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "We work with the best in the business! Our partner list includes CISCO, HPE, Dell, Microsoft, Google, VMware, and many more industry leaders. This means you get enterprise-grade equipment with expert implementation and full support. Are you looking for a specific vendor or solution?",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "We're proud to be certified partners with top technology brands! CISCO, HPE, Dell, Microsoft, Google, VMware - we work with all the major players. This gives you access to the best products with our expert support. Which technologies are you currently using?",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ],

  // QUOTE REQUEST VARIATIONS
  quote_request: [
    {
      text: "I'd be happy to help you request a consultation! Please fill out the form and our team will get back to you within 24 hours to discuss your specific needs.",
      tone: 'formal',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Great! Let's get you connected with our team. Fill out the form below and we'll reach out within 24 hours to discuss your project in detail.",
      tone: 'friendly',
      contextConditions: { conversationStage: 'exploring' }
    },
    {
      text: "Perfect! Let's make this happen. Fill in your details below and our team will contact you within 24 hours. We'll discuss your needs and create a customized solution for you.",
      tone: 'enthusiastic',
      contextConditions: { conversationStage: 'initial' }
    }
  ]
}

// ============================================================================
// PROGRESSIVE RESPONSE TEMPLATES (for follow-up questions)
// ============================================================================

const progressiveResponses: Record<IntentType, ProgressiveResponse> = {
  datacenter: {
    initialResponse: "Great question about data centers! We offer complete solutions. To help you better, what aspect interests you most - power and cooling systems, physical infrastructure like raised floors, or IT equipment like servers and storage?",
    followUpQuestions: [
      "Are you building a new data center or upgrading an existing one?",
      "What size facility are you working with?",
      "Do you have specific compliance or uptime requirements?"
    ],
    detailedInfo: {
      'power': "Our power systems include enterprise-grade UPS solutions, intelligent PDUs for distribution, and backup generators to ensure 100% uptime even during grid failures.",
      'cooling': "We design precision cooling systems using advanced HVAC technology to maintain optimal temperature and humidity, even for high-density equipment racks.",
      'servers': "We provide enterprise server solutions from HPE and Dell, complete with virtualization, storage arrays, and backup systems."
    }
  },
  security: {
    initialResponse: "Security is crucial! We provide both physical and cybersecurity solutions. Which is your primary concern - physical security like cameras and access control, or cybersecurity like firewalls and monitoring?",
    followUpQuestions: [
      "What areas or assets do you need to protect?",
      "Do you have any existing security systems?",
      "Are you looking for 24/7 monitoring services?"
    ],
    detailedInfo: {
      'physical': "Our physical security includes IP camera systems with intelligent video analytics, biometric access control, and integration with alarm systems.",
      'cyber': "For cybersecurity, we provide next-generation firewalls, intrusion detection, 24/7 SOC monitoring, and threat response services."
    }
  },
  cloud: {
    initialResponse: "Cloud services can transform your business! Are you looking to migrate to the cloud, optimize your existing cloud setup, or implement a hybrid solution?",
    followUpQuestions: [
      "Which cloud platform are you interested in - AWS, Azure, or Google Cloud?",
      "What applications or workloads are you planning to move?",
      "Do you have any compliance or data residency requirements?"
    ],
    detailedInfo: {
      'migration': "We create detailed migration strategies, handle data transfer, application refactoring, and ensure zero downtime during the transition.",
      'optimization': "Our cloud optimization services reduce costs, improve performance, and ensure you're using the right services for your workload."
    }
  },
  cabling: {
    initialResponse: "We handle all types of structured cabling! Are you interested in copper cabling (Cat6/Cat7/Cat8), fiber optic systems, or both?",
    followUpQuestions: [
      "What's the size of your facility?",
      "Is this a new installation or upgrading existing cabling?",
      "Do you need voice, data, or both?"
    ],
    detailedInfo: {
      'copper': "Our copper cabling includes Cat6, Cat6a, Cat7, and Cat8 options with full certification and documentation. We ensure proper cable management and future scalability.",
      'fiber': "Fiber optic installations include single-mode and multi-mode fiber, fusion splicing, termination, and OTDR testing for guaranteed performance."
    }
  },
  wifi: {
    initialResponse: "WiFi solutions are our specialty! Are you dealing with coverage issues, performance problems, or setting up a new wireless network?",
    followUpQuestions: [
      "What's the approximate square footage of your facility?",
      "How many users will be connecting?",
      "Do you have any special requirements like outdoor coverage or guest networks?"
    ],
    detailedInfo: {
      'coverage': "We conduct RF surveys to identify dead zones and design optimal access point placement for complete coverage.",
      'performance': "Our solutions include enterprise APs, controller-based management, and QoS configuration for consistent high performance."
    }
  },
  managed: {
    initialResponse: "Managed IT services give you peace of mind! Are you looking for complete IT management or specific services like monitoring, help desk, or maintenance?",
    followUpQuestions: [
      "How many users/devices do you need to support?",
      "Do you have an existing IT team or would we be your primary IT support?",
      "What are your biggest IT pain points right now?"
    ],
    detailedInfo: {
      'monitoring': "24/7 proactive monitoring with automated alerts, so we catch and fix issues before they impact your business.",
      'helpdesk': "Full help desk support for your team - from password resets to troubleshooting complex technical issues."
    }
  },
  greeting: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  thanks: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  how_are_you: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  capabilities: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  joke: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  weather: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  small_talk: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  pos: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  voip: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  services: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  partners: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  brochure: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  quote_request: { initialResponse: "", followUpQuestions: [], detailedInfo: {} },
  general_inquiry: { initialResponse: "", followUpQuestions: [], detailedInfo: {} }
}

// ============================================================================
// RESPONSE SELECTION LOGIC
// ============================================================================

/**
 * Select appropriate response variation based on context
 */
export function selectResponseVariation(
  intent: Intent,
  context: ConversationContext,
  sentiment: SentimentAnalysis
): string {
  const variations = responseVariations[intent.type]

  // If no variations defined, fall back to legacy response
  if (!variations || variations.length === 0) {
    return getLegacyResponse(intent.type)
  }

  // Filter variations based on context conditions
  const matchingVariations = variations.filter(variation => {
    if (!variation.contextConditions) return true

    const conditions = variation.contextConditions
    if (conditions.conversationStage && conditions.conversationStage !== context.conversationStage) {
      return false
    }
    if (conditions.userSentiment && conditions.userSentiment !== sentiment.sentiment) {
      return false
    }
    if (conditions.hasGreeted !== undefined && conditions.hasGreeted !== context.userContext.hasGreeted) {
      return false
    }

    return true
  })

  // Select random variation from matching ones
  if (matchingVariations.length > 0) {
    return matchingVariations[Math.floor(Math.random() * matchingVariations.length)].text
  }

  // Fallback to any variation if no matches
  return variations[Math.floor(Math.random() * variations.length)].text
}

/**
 * Get follow-up questions for progressive conversation
 */
export function getFollowUpQuestions(
  intentType: IntentType,
  context: ConversationContext
): string[] {
  const progressive = progressiveResponses[intentType]

  if (!progressive || progressive.followUpQuestions.length === 0) {
    return []
  }

  // Filter out already asked questions
  const unasked = progressive.followUpQuestions.filter(
    q => !context.askedQuestions.includes(q)
  )

  // Return first unasked question
  if (unasked.length > 0) {
    context.askedQuestions.push(unasked[0])
    return [unasked[0]]
  }

  return []
}

/**
 * Get progressive initial response instead of full info dump
 */
export function getProgressiveResponse(intentType: IntentType): string | null {
  const progressive = progressiveResponses[intentType]
  return progressive?.initialResponse || null
}

/**
 * Fall back to legacy response from chatbotKnowledge
 */
function getLegacyResponse(intentType: IntentType): string {
  const mapping: Record<string, string> = {
    'greeting': legacyResponses.greeting.message,
    'services': legacyResponses.services.message,
    'partners': legacyResponses.partners.message,
    'quote_request': legacyResponses.quote.message,
    'brochure': legacyResponses.brochure.message,
    'cabling': legacyResponses.cabling.message,
    'wifi': legacyResponses.wifi.message,
    'datacenter': legacyResponses.datacenter.message,
    'security': legacyResponses.security.message,
    'cloud': legacyResponses.cloud.message,
    'managed': legacyResponses.managed.message,
    'pos': legacyResponses.pos.message,
    'voip': legacyResponses.voip.message,
  }

  return mapping[intentType] || legacyResponses.default.message
}

/**
 * Check if progressive response should be used
 */
export function shouldUseProgressiveResponse(
  intentType: IntentType,
  context: ConversationContext
): boolean {
  // Use progressive for complex topics in exploring/deepening stages
  const progressiveIntents: IntentType[] = ['datacenter', 'security', 'cloud', 'cabling', 'wifi', 'managed']

  return (
    progressiveIntents.includes(intentType) &&
    (context.conversationStage === 'exploring' || context.conversationStage === 'deepening')
  )
}
