import { NextRequest, NextResponse } from 'next/server';
import { userSignupSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('User signup attempt:', { email: body.email, firstName: body.firstName });

    // Validate the signup data
    const validatedData = userSignupSchema.parse(body);
    
    // Check if user already exists (in a real app, you'd check your database)
    // For now, we'll simulate this check
    const existingUser = false; // In real app: await checkUserExists(validatedData.email)
    
    if (existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'An account with this email already exists. Please sign in instead.' 
        },
        { status: 409 }
      );
    }

    // In a real application, you would:
    // 1. Hash the password using bcrypt
    // 2. Save user to database
    // 3. Send welcome email
    // 4. Create user session/JWT token
    // 5. Set up user's debt analysis profile
    
    // For now, we'll simulate successful account creation
    const newUser = {
      id: `user_${Date.now()}`,
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      phone: validatedData.phone,
      createdAt: new Date().toISOString(),
      // Never return password in response
    };

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Account created successfully! Welcome to DebtOptimizer.',
      user: newUser,
      redirectTo: '/welcome?new=true', // Redirect to welcome page for new users
    });

  } catch (error) {
    console.error('User signup error:', error);
    
    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please check your information and try again.',
          details: error
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Something went wrong. Please try again.'
      },
      { status: 500 }
    );
  }
} 