// Beyond Work Chatbot Knowledge Base
// Comprehensive service data from company PDFs

export interface ServiceCategory {
  name: string
  description: string
  services: string[]
}

export interface Partner {
  name: string
  category: string
}

export interface QuickReply {
  label: string
  value: string
}

// All Beyond Work Services organized by category
export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Passive Infrastructure',
    description: 'Foundation layer for all IT systems - structured cabling, fiber optics, and physical connectivity',
    services: [
      'Structured Cabling (CAT-6, CAT-6a, CAT-7, CAT-8)',
      'Fiber Optic Cabling - fusion splicing, termination, certification',
      'Patch Panels and Cabinets',
      'Network Outlets and Connectors (RJ-45)',
      'Cable Pathways and Trays',
      'Grounding and Earthing Systems',
      'Physical Infrastructure Setup',
    ],
  },
  {
    name: 'Active Infrastructure',
    description: 'Powered systems that process, manage, and direct data across your network',
    services: [
      'Enterprise Network & Wireless Solutions',
      'LAN and WAN Connection',
      'Fiber Optics Active Equipment',
      'Optical Access and Wireless Access',
      'Networking Equipment (Routers, Switches, Firewalls)',
      'VPN Solutions',
      'Enterprise Security Solutions',
    ],
  },
  {
    name: 'Data Center Infrastructure',
    description: 'Complete data center design, build, and optimization services',
    services: [
      'Server, Virtualization and VDI',
      'Enterprise Storage Solutions',
      'Raised Floor Installation',
      'Power Systems',
      'Precision Cooling Systems (HVAC)',
      'Fire Detection and Suppression',
      'Data Cabling Solutions',
      'Monitoring Systems',
      'Backup, Archive and Disaster Recovery',
    ],
  },
  {
    name: 'Unified Communication & Collaboration',
    description: 'Modern communication systems for seamless business operations',
    services: [
      'IP Telephony and VoIP',
      'Telepresence Solutions',
      'Videoconferencing',
      'Video Door Phone',
      'Audio-Visual (AV) Systems',
      'Conference Room Integration',
    ],
  },
  {
    name: 'Security & Surveillance',
    description: 'Physical and cyber security to protect your business',
    services: [
      'Intelligent Video Surveillance (IVS)',
      'CCTV/IP Camera Systems',
      'Access Control Systems',
      'Security Monitoring & Management',
      'Cybersecurity Solutions',
      'Firewall Implementation',
    ],
  },
  {
    name: 'Managed IT Services',
    description: 'Ongoing proactive management and monitoring of your IT infrastructure',
    services: [
      '24/7 System Monitoring',
      'Continuous Maintenance and Support',
      'Security Updates and Patch Management',
      'Performance Optimization',
      'Help Desk Services',
      'Technical Support',
      'Equipment Setup and Installation',
    ],
  },
  {
    name: 'Cloud Services',
    description: 'Cloud migration, management, and optimization for modern businesses',
    services: [
      'Cloud Migration Strategy',
      'Cloud Platform Management',
      'Hybrid Cloud Solutions',
      'Cloud Backup and Recovery',
      'Cloud Security',
    ],
  },
  {
    name: 'System Integration & Development',
    description: 'Custom integration and software development services',
    services: [
      'System Integration',
      'Custom API Development',
      'Data Migration and ETL',
      'DevOps and CI/CD Pipeline',
      'Business Process Integration',
      'Custom Software Development',
    ],
  },
  {
    name: 'Specialized Solutions',
    description: 'Industry-specific solutions tailored to your business needs',
    services: [
      'POS (Point of Sale) Solutions',
      'WiFi Solutions - planning, design, installation',
      'Time and Attendance Systems',
      'Wireless Networking Services',
      'Voice/Data Cabling',
    ],
  },
  {
    name: 'Consulting & Strategy',
    description: 'Strategic IT planning and consulting services',
    services: [
      'IT Strategy Consulting',
      'Business Process Integration Consulting',
      'Vendor and Product Selection',
      'Architecture Design and Review',
      'Technology Roadmap Development',
    ],
  },
  {
    name: 'Disaster Recovery & Backup',
    description: 'Comprehensive business continuity and data protection',
    services: [
      'Disaster Recovery Planning',
      'Backup Solutions',
      'Archive Management',
      'DR Testing and Validation',
      'Business Continuity Services',
    ],
  },
]

// Technology Partners
export const partners: Partner[] = [
  { name: 'CISCO', category: 'Networking & Security' },
  { name: 'HPE', category: 'Servers & Storage' },
  { name: 'DELL', category: 'Infrastructure' },
  { name: 'LENOVO', category: 'Hardware' },
  { name: 'MICROSOFT', category: 'Cloud & Software' },
  { name: 'GOOGLE', category: 'Cloud Services' },
  { name: 'LINKSYS', category: 'Networking' },
  { name: 'D-LINK', category: 'Network Equipment' },
  { name: 'LINNET', category: 'Telecommunications' },
  { name: 'CORNING', category: 'Fiber Optics' },
  { name: 'TRENDNET', category: 'Networking Solutions' },
  { name: 'BELDEN', category: 'Cabling & Connectivity' },
  { name: 'COMMSCOPE', category: 'Network Infrastructure' },
  { name: 'APC', category: 'Power & Cooling' },
  { name: 'KASPERSKY', category: 'Cybersecurity' },
  { name: 'VMWARE', category: 'Virtualization' },
  { name: 'BROADCOM', category: 'Enterprise Software' },
  { name: 'VEEAM', category: 'Backup & Recovery' },
  { name: 'EPSON', category: 'Displays & Printers' },
]

// Quick Reply Options
export const quickReplies: QuickReply[] = [
  { label: 'Our Services', value: 'services' },
  { label: 'Technology Partners', value: 'partners' },
  { label: 'Contact Us', value: 'quote' },
  { label: 'Download Brochure', value: 'brochure' },
]

// Chatbot Response Templates
export const responses = {
  greeting: {
    message: "Hello! I'm Beyond Work Assistant. How can I help you today? I can provide information about our IT infrastructure services, technology partners, or help you request a consultation.",
    quickReplies: true,
  },
  services: {
    message: `Beyond Work provides comprehensive IT infrastructure solutions including Passive Infrastructure for structured cabling and fiber optics, Active Infrastructure with networking and security equipment, complete Data Center Solutions, Unified Communications with VoIP and videoconferencing, 24/7 Managed IT Services, Cloud Services for migration and management, and comprehensive Security Solutions.

Would you like to learn more about any specific service?`,
    quickReplies: false,
  },
  partners: {
    message: `Beyond Work is a certified partner with industry-leading technology vendors including CISCO, HPE, Dell, Lenovo, Microsoft, Google, Linksys, D-Link, TrendNet, Corning, Belden, CommScope, APC, Kaspersky, VMware, Broadcom, Veeam, and Epson.

Our partnerships ensure you receive proven, enterprise-grade products backed by expert implementation and support.`,
    quickReplies: true,
  },
  quote: {
    message: "I'd be happy to help you request a consultation! You can reach us through:\n\n📧 Email: support@bwork.sa\n📞 Phone: +966 53 508 3449\n🌐 Visit our Contact page for more options\n\nOur team will get back to you within 24 hours. What else can I help you with?",
    quickReplies: true,
  },
  brochure: {
    message: "You can download our comprehensive service brochures:",
    downloads: [
      { name: 'Beyond Work Services Brochure', url: '/downloads/Beyond Work-services.pdf' },
      { name: 'IT Infrastructure Solutions', url: '/downloads/it-infrastructure-solutions.pdf' },
    ],
    quickReplies: true,
  },
  // Specific service responses
  cabling: {
    message: `Beyond Work offers professional structured cabling services including Copper Cabling with CAT-6, CAT-6a, CAT-7, and CAT-8 for data, voice, and PoE, as well as Fiber Optic Systems with design, fusion splicing, termination, and certification. We also provide reliable Voice and Data Cabling infrastructure for company communications.

We design and install flexible systems that plan for both present and future applications, with proper grounding, cable management, and full documentation.

Would you like to schedule a site survey?`,
    quickReplies: false,
  },
  wifi: {
    message: `Beyond Work provides expert WiFi planning, design, and installation services including site surveys, RF analysis, innovative antenna technology for maximum signal, interference optimization, scalable wireless networking, and enterprise-grade access points.

We use unique approaches to maximize WiFi signal and minimize interference, resulting in optimal usability throughout your facility.

Ready to improve your wireless network?`,
    quickReplies: false,
  },
  datacenter: {
    message: `Beyond Work offers complete data center infrastructure services including Power Systems with UPS, PDUs, and backup generators, Precision Cooling with HVAC systems for optimal temperature control, professional Raised Floor installation, Fire Detection and Suppression safety systems, high-density Data Cabling solutions, real-time Monitoring Systems, and enterprise Server and Storage solutions with virtualization.

From initial design to ongoing management, Beyond Work handles every aspect of your data center needs.`,
    quickReplies: false,
  },
  security: {
    message: `Beyond Work offers comprehensive security services including Physical Security with CCTV and IP Camera Systems for Intelligent Video Surveillance, Access Control Systems, and Video Door Phones. We also provide Cybersecurity services including Firewall implementation and management, 24/7 Security monitoring, Threat detection and response, and Enterprise security solutions.

We protect your business with multi-layered security approaches combining physical and digital defenses.`,
    quickReplies: false,
  },
  cloud: {
    message: `Beyond Work helps businesses migrate to and manage cloud platforms with Cloud Migration Strategy for smooth transition planning, Platform Management for AWS, Azure, and Google Cloud, Hybrid Cloud Solutions, Cloud Backup and Recovery for data protection, and Cloud Security for secure cloud environments.

Our certified engineers ensure your cloud infrastructure is optimized, secure, and cost-effective.`,
    quickReplies: false,
  },
  managed: {
    message: `Beyond Work provides comprehensive, proactive Managed IT Services including 24/7 system monitoring and alerts, continuous maintenance and updates, security patch management, performance optimization, help desk support, and equipment setup and installation.

Benefits include predictable monthly costs, reduced downtime, expert technical support, and the ability to focus on your core business. Let Beyond Work handle your IT infrastructure while you focus on growing your business.`,
    quickReplies: false,
  },
  pos: {
    message: `Beyond Work provides complete POS system implementation including hardware selection and installation, software integration, network infrastructure for POS, backup and redundancy systems, and training with ongoing support.

Ideal for retail, hospitality, and service businesses requiring reliable transaction processing.`,
    quickReplies: false,
  },
  voip: {
    message: `Beyond Work offers modern communication solutions including IP Telephony and VoIP for cost-effective phone systems, Telepresence for high-quality video collaboration, Videoconferencing for remote meeting solutions, and Conference Room Integration with professional AV systems.

Replace outdated phone systems with flexible, feature-rich IP telephony that grows with your business.`,
    quickReplies: false,
  },
  default: {
    message: "I'm here to help! You can ask me about our IT infrastructure services, technology partners and vendors, requesting a consultation, or specific solutions like WiFi, cabling, data centers, security, and more.\n\nWhat would you like to know?",
    quickReplies: true,
  },
}

// Pattern matching for intelligent responses
export function getResponse(userMessage: string): any {
  const message = userMessage.toLowerCase()

  // Greeting patterns
  if (/(^hi|^hello|^hey|good morning|good afternoon)/i.test(message)) {
    return responses.greeting
  }

  // Service-specific patterns
  if (/(cabling|cable|fiber|structured|cat6|cat7)/i.test(message)) {
    return responses.cabling
  }

  if (/(wifi|wireless|wi-fi|wlan)/i.test(message)) {
    return responses.wifi
  }

  if (/(data center|datacenter|server room|raised floor|cooling)/i.test(message)) {
    return responses.datacenter
  }

  if (/(security|cctv|camera|surveillance|firewall|access control)/i.test(message)) {
    return responses.security
  }

  if (/(cloud|aws|azure|google cloud|migration)/i.test(message)) {
    return responses.cloud
  }

  if (/(managed|monitoring|maintenance|help desk|support)/i.test(message)) {
    return responses.managed
  }

  if (/(pos|point of sale|retail)/i.test(message)) {
    return responses.pos
  }

  if (/(voip|ip telephony|phone|telephone|video|conferencing|telepresence)/i.test(message)) {
    return responses.voip
  }

  // General inquiries
  if (/(service|what do you|what does Beyond Work|what can you)/i.test(message)) {
    return responses.services
  }

  if (/(partner|vendor|brand|cisco|dell|microsoft|hpe)/i.test(message)) {
    return responses.partners
  }

  if (/(quote|consultation|contact|speak|talk|meeting)/i.test(message)) {
    return responses.quote
  }

  if (/(brochure|download|pdf|document)/i.test(message)) {
    return responses.brochure
  }

  // Default response
  return responses.default
}

// Get all services as a flat list
export function getAllServices(): string[] {
  return serviceCategories.flatMap(cat => cat.services)
}

// Search services by keyword
export function searchServices(keyword: string): ServiceCategory[] {
  const lowerKeyword = keyword.toLowerCase()
  return serviceCategories.filter(cat =>
    cat.name.toLowerCase().includes(lowerKeyword) ||
    cat.description.toLowerCase().includes(lowerKeyword) ||
    cat.services.some(service => service.toLowerCase().includes(lowerKeyword))
  )
}
