import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields (name, email, and message are mandatory)
    const { name, company, email, phone, projectType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the inquiry (in production, this would save to a database or send an email)
    console.log('=== New Inquiry Received ===')
    console.log('Name:', name)
    console.log('Company:', company)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Project Type:', projectType)
    console.log('Message:', message)
    if (body.fileName) {
      console.log('Attached File:', body.fileName, `(${body.fileSize} bytes)`)
    }
    console.log('Timestamp:', new Date().toISOString())
    console.log('===========================\n')

    // Mock successful response
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully',
        id: `INQ-${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
