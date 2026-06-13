'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: FormData) {
  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const goal = formData.get('goal') as string;
  const notes = formData.get('notes') as string;
  const phone = formData.get('phone') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Belk Body Lab Contact <notifications@belkbodylab.com>', // Uses verified domain
      to: ['trainwithbelk@gmail.com'], // Sent to Kyle's email found in the repo
      reply_to: email, // Allows Kyle to click 'Reply' and email the lead directly
      subject: `New Lead: ${goal || 'General Inquiry'} - ${fullName}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Goal:</strong> ${goal || 'Not selected'}</p>
        <p><strong>Notes/Challenges:</strong><br/>${notes}</p>
      `
    });
    
    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error };
    }
    
    return { success: true, data };
  } catch (err) {
    console.error("Unexpected Error:", err);
    return { success: false, error: err };
  }
}
