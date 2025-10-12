import { NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = newsletterSchema.parse(body)

    // In a real application, you would:
    // 1. Store the email in a database
    // 2. Send a confirmation email
    // 3. Add to your email marketing platform (Mailchimp, SendGrid, etc.)

    // For now, we'll just simulate a successful subscription
    console.log('Newsletter subscription:', validatedData.email)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
