import { NextRequest, NextResponse } from 'next/server';
import { emailSignupSchema, contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    console.log(`${type} submission:`, data);

    // Validate based on form type
    if (type === 'email_signup') {
      const validatedData = emailSignupSchema.parse(data);
      
      // Here you would typically:
      // - Save to database
      // - Send to email service (Mailchimp, ConvertKit, etc.)
      // - Trigger welcome email
      
      return NextResponse.json({
        success: true,
        message: 'Successfully signed up for debt analysis',
        data: validatedData,
      });
    }

    if (type === 'contact') {
      const validatedData = contactFormSchema.parse(data);
      
      // Here you would typically:
      // - Save to database
      // - Send notification email
      // - Create support ticket
      
      return NextResponse.json({
        success: true,
        message: 'Contact form submitted successfully',
        data: validatedData,
      });
    }

    if (type === 'newsletter') {
      // Simple email validation for newsletter
      if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        return NextResponse.json(
          { success: false, error: 'Invalid email address' },
          { status: 400 }
        );
      }
      
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: { email: data.email },
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid form type' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Invalid form data'
      },
      { status: 400 }
    );
  }
} 