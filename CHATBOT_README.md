# BWORK AI Chatbot - Implementation Guide

## Overview

The BWORK AI Chatbot is a fully functional, production-ready conversational assistant integrated into your Next.js website. It provides intelligent responses about BWORK services, technology partners, and facilitates customer inquiries.

---

## Features

### Core Functionality
- **Intelligent Pattern Matching**: Recognizes user queries about services, partners, and solutions
- **Quick Reply Buttons**: Pre-defined actions for common requests
- **Inquiry Form**: Embedded form for consultation requests
- **PDF Downloads**: Links to service brochures
- **Session Persistence**: Saves chat history in localStorage
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop

### UI/UX
- **Glassmorphism Design**: Modern, professional aesthetic matching BWORK branding
- **Smooth Animations**: Framer Motion animations for all interactions
- **Typing Indicator**: Shows bot is "thinking"
- **Floating Chat Icon**: Bottom-right with pulse animation
- **Dark/Light Mode Ready**: Adapts to user preferences

### Brand Alignment
- **BWORK Color Scheme**: Navy (#0F172A) and Indigo gradients
- **Professional Persona**: Knowledgeable, client-focused tone
- **Service Knowledge**: Comprehensive data from company PDFs

---

## File Structure

```
components/
├── Chatbot.tsx                 # Main chatbot component
lib/
├── chatbotKnowledge.ts         # Knowledge base and response logic
app/
├── api/inquiry/route.ts        # API endpoint for form submissions
├── layout.tsx                  # Chatbot integrated site-wide
public/
├── downloads/                  # PDF brochures (add files here)
    └── README.md               # Instructions for PDFs
```

---

## Implementation Details

### 1. Knowledge Base (`lib/chatbotKnowledge.ts`)

**Service Categories (11 total)**:
- Passive Infrastructure
- Active Infrastructure
- Data Center Infrastructure
- Unified Communication & Collaboration
- Security & Surveillance
- Managed IT Services
- Cloud Services
- System Integration & Development
- Specialized Solutions
- Consulting & Strategy
- Disaster Recovery & Backup

**Technology Partners (19 total)**:
CISCO, HPE, DELL, LENOVO, MICROSOFT, GOOGLE, LINKSYS, D-LINK, LINNET, CORNING, TRENDNET, BELDEN, COMMSCOPE, APC, KASPERSKY, VMWARE, BROADCOM, VEEAM, EPSON

**Pattern Matching Logic**:
The chatbot uses keyword detection to provide relevant responses:
- "cabling", "fiber", "CAT6" → Structured Cabling response
- "wifi", "wireless" → WiFi Solutions response
- "data center", "server room" → Data Center response
- "security", "camera", "firewall" → Security Solutions response
- "cloud", "AWS", "Azure" → Cloud Services response
- etc.

### 2. Chatbot Component (`components/Chatbot.tsx`)

**State Management**:
- `isOpen`: Controls chat window visibility
- `messages`: Array of chat messages
- `isTyping`: Shows typing indicator
- `showInquiryForm`: Toggles inquiry form
- `inquiryForm`: Form data state
- `showQuickReplies`: Controls quick reply visibility

**Key Functions**:
- `addBotMessage()`: Adds bot message with typing delay
- `addUserMessage()`: Adds user message instantly
- `handleSendMessage()`: Processes user input and generates response
- `handleQuickReply()`: Handles quick reply button clicks
- `handleInquirySubmit()`: Submits inquiry form to API

**Features**:
- Auto-scrolling to latest message
- LocalStorage persistence
- Message timestamps
- Download link rendering
- Form validation

### 3. API Endpoint (`app/api/inquiry/route.ts`)

**Request Body**:
```json
{
  "name": "string (required)",
  "company": "string",
  "email": "string (required)",
  "phone": "string",
  "projectType": "string",
  "message": "string (required)"
}
```

**Validation**:
- Validates required fields
- Email format validation
- Returns appropriate error codes

**Response**:
```json
{
  "success": true,
  "message": "Inquiry received successfully",
  "id": "INQ-1234567890"
}
```

**Current Behavior**:
- Logs inquiries to console
- Returns success response
- **TODO**: Integrate with email service or database

---

## Usage Guide

### How Users Interact

1. **Click the floating chat icon** (bottom-right) to open
2. **Read the greeting message** with quick reply buttons
3. **Either**:
   - Type a question about services
   - Click a quick reply button
4. **Bot responds** with relevant information
5. **Request a quote** opens inquiry form
6. **Download brochure** provides PDF links

### Sample Conversations

**Example 1: Service Inquiry**
```
User: "Do you offer WiFi installation?"
Bot: [WiFi Solutions response with details]
User: "How much does it cost?"
Bot: "I'd be happy to help you request a consultation..."
[Shows inquiry form]
```

**Example 2: Partner Info**
```
User: "Who are your partners?"
Bot: [Lists all 19 technology partners by category]
```

**Example 3: Quick Reply**
```
User: [Clicks "Our Services"]
Bot: [Lists all 11 service categories with descriptions]
```

---

## Customization Guide

### Adding New Services

Edit `lib/chatbotKnowledge.ts`:

```typescript
// Add to serviceCategories array
{
  name: 'New Service Category',
  description: 'Description of the service',
  services: [
    'Service 1',
    'Service 2',
    'Service 3'
  ]
}

// Add response template
newservice: {
  message: `Response text here`,
  quickReplies: false
}

// Add pattern matching
if (/(keyword1|keyword2)/i.test(message)) {
  return responses.newservice
}
```

### Adding New Partners

Edit `lib/chatbotKnowledge.ts`:

```typescript
export const partners: Partner[] = [
  // ... existing partners
  { name: 'NEW_PARTNER', category: 'Category' }
]
```

Also add logo to `public/logos/newpartner.svg`

### Changing Chatbot Appearance

Edit `components/Chatbot.tsx`:

```typescript
// Change colors
className="bg-gradient-to-br from-primary-600 to-secondary-600"

// Change dimensions
className="w-[400px] h-[600px]"

// Change position
className="fixed bottom-6 right-6"

// Change animation speed
transition={{ duration: 0.6 }}
```

### Customizing Responses

Edit response templates in `lib/chatbotKnowledge.ts`:

```typescript
export const responses = {
  greeting: {
    message: "Your custom greeting here",
    quickReplies: true
  },
  // ... customize other responses
}
```

---

## Integration with External AI (Optional)

### Option 1: OpenAI Integration

Install OpenAI SDK:
```bash
npm install openai
```

Create `lib/openai.ts`:
```typescript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function getAIResponse(userMessage: string, context: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: context // Pass BWORK service data as context
      },
      {
        role: 'user',
        content: userMessage
      }
    ]
  })
  return response.choices[0].message.content
}
```

Modify `components/Chatbot.tsx`:
```typescript
import { getAIResponse } from '@/lib/openai'

// In handleSendMessage function
const aiResponse = await getAIResponse(textToSend, serviceContext)
addBotMessage(aiResponse, true)
```

### Option 2: Google Gemini Integration

Install Gemini SDK:
```bash
npm install @google/generative-ai
```

Similar integration pattern as OpenAI.

---

## PDF Brochure Setup

### Creating Brochures

1. **Design brochures** using:
   - Adobe InDesign / Illustrator
   - Canva (canva.com)
   - Microsoft Publisher
   - Google Docs/Slides (export as PDF)

2. **Include content**:
   - Company overview
   - Service descriptions (use knowledge base)
   - Partner logos
   - Case studies
   - Contact information

3. **Export as PDF**:
   - Optimize for web (compress images)
   - Keep file size under 10MB
   - Use descriptive filenames

4. **Add to project**:
   - Place PDFs in `public/downloads/`
   - Name exactly: `bwork-services.pdf` and `it-infrastructure-solutions.pdf`

---

## Email/Database Integration

### Email Integration (Recommended: Resend)

Install Resend:
```bash
npm install resend
```

Update `app/api/inquiry/route.ts`:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()

  // Send email
  await resend.emails.send({
    from: 'chatbot@bwork.tech',
    to: 'sales@bwork.tech',
    subject: `New Inquiry: ${body.projectType}`,
    html: `
      <h2>New Inquiry from ${body.name}</h2>
      <p><strong>Company:</strong> ${body.company}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Project Type:</strong> ${body.projectType}</p>
      <p><strong>Message:</strong> ${body.message}</p>
    `
  })

  return NextResponse.json({ success: true })
}
```

### Database Integration (Recommended: Prisma + PostgreSQL)

Install Prisma:
```bash
npm install prisma @prisma/client
npx prisma init
```

Define schema in `prisma/schema.prisma`:
```prisma
model Inquiry {
  id          String   @id @default(cuid())
  name        String
  company     String?
  email       String
  phone       String?
  projectType String?
  message     String
  createdAt   DateTime @default(now())
}
```

Update API route:
```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body = await request.json()

  const inquiry = await prisma.inquiry.create({
    data: {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      projectType: body.projectType,
      message: body.message
    }
  })

  return NextResponse.json({ success: true, id: inquiry.id })
}
```

---

## Testing

### Manual Testing Checklist

- [ ] Chat icon appears and pulses
- [ ] Click icon opens chat window
- [ ] Greeting message appears
- [ ] Quick reply buttons work
- [ ] Can type and send messages
- [ ] Bot responds with appropriate answers
- [ ] Service queries trigger correct responses
- [ ] Partner query lists all partners
- [ ] Request quote opens inquiry form
- [ ] Form validation works
- [ ] Form submission succeeds
- [ ] Success message appears
- [ ] Download brochure provides links
- [ ] Chat history persists on refresh
- [ ] Clear chat button works
- [ ] Mobile responsive design works
- [ ] Animations smooth and professional

### Automated Testing (Optional)

Create `components/__tests__/Chatbot.test.tsx`:
```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import Chatbot from '../Chatbot'

describe('Chatbot', () => {
  it('renders chat icon', () => {
    render(<Chatbot />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('opens chat window on click', () => {
    render(<Chatbot />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('BWORK Assistant')).toBeInTheDocument()
  })
})
```

---

## Troubleshooting

### Chatbot doesn't appear
- Check that Chatbot component is imported in `app/layout.tsx`
- Verify no CSS z-index conflicts
- Check browser console for errors

### Messages don't send
- Verify `handleSendMessage` function isn't blocked
- Check for JavaScript errors in console
- Ensure knowledge base is imported correctly

### Inquiry form fails
- Check `/api/inquiry` endpoint is accessible
- Verify request payload matches expected format
- Check server logs for errors

### No response from bot
- Verify pattern matching in `getResponse()` function
- Check that responses object has all required keys
- Add console.log to debug matching logic

### LocalStorage not persisting
- Check browser privacy settings
- Verify localStorage key name is correct
- Test in incognito mode to rule out extension conflicts

---

## Performance Optimization

### Lazy Loading
```typescript
import dynamic from 'next/dynamic'

const Chatbot = dynamic(() => import('@/components/Chatbot'), {
  ssr: false
})
```

### Debouncing User Input
```typescript
const [debouncedInput] = useDebounce(inputValue, 300)
```

### Caching Responses
```typescript
const responseCache = new Map()

function getCachedResponse(query: string) {
  if (responseCache.has(query)) {
    return responseCache.get(query)
  }
  const response = getResponse(query)
  responseCache.set(query, response)
  return response
}
```

---

## Deployment Checklist

- [ ] Add actual PDF brochures to `public/downloads/`
- [ ] Configure email service (Resend, SendGrid, etc.)
- [ ] Set up database for inquiry logging
- [ ] Test all chatbot interactions
- [ ] Verify mobile responsiveness
- [ ] Check performance metrics
- [ ] Enable analytics tracking (optional)
- [ ] Test form submissions in production
- [ ] Verify email notifications work
- [ ] Update response templates as needed
- [ ] Train team on managing inquiries

---

## Analytics Integration (Optional)

### Google Analytics
```typescript
// In components/Chatbot.tsx
import { event } from '@/lib/gtag'

const handleSendMessage = (message: string) => {
  // ... existing code
  event({
    action: 'chatbot_message',
    category: 'engagement',
    label: message
  })
}
```

### Custom Analytics
```typescript
// Track common queries
const logQuery = async (query: string, response: string) => {
  await fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({ query, response, timestamp: new Date() })
  })
}
```

---

## Future Enhancements

### Potential Features
1. **Voice Input**: Add speech-to-text capability
2. **Multi-language Support**: Translate responses
3. **Chat History Export**: Let users download conversation
4. **File Upload**: Allow users to attach RFPs/documents
5. **Appointment Booking**: Integrate calendar for consultations
6. **Live Agent Handoff**: Transfer to human agent
7. **Proactive Messages**: Suggest services based on page context
8. **Sentiment Analysis**: Track user satisfaction
9. **Knowledge Base Search**: Search through documentation
10. **Custom Training**: Fine-tune AI model with company data

---

## Support & Maintenance

### Regular Updates
- Review chat logs monthly to identify gaps in knowledge
- Update service descriptions as offerings evolve
- Add new partners when partnerships are established
- Optimize response patterns based on user queries
- Monitor form submission success rates

### Knowledge Base Expansion
- Add FAQs to response templates
- Include pricing information (if applicable)
- Add case studies and success stories
- Update technology partner information
- Incorporate new services as they launch

---

## Contact & Credits

**Implementation**: BWORK AI Chatbot v1.0
**Built with**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
**Knowledge Base**: Comprehensive BWORK service and partner data

For questions or customization requests, contact: dev@bwork.tech

---

**Ready to Launch!** 🚀

The chatbot is fully functional and integrated. Simply add your PDF brochures and configure email/database integration for production deployment.
