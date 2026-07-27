import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, you would send an email here using Resend, SendGrid, etc.
    // For now, we'll log the data and return success.
    
    console.log('--- New Contact Form Submission ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Data:', JSON.stringify(data, null, 2));
    console.log('-----------------------------------');

    // Simulate some latency
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been received! We will get back to you shortly.' 
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'There was an error processing your request.' },
      { status: 500 }
    );
  }
}
