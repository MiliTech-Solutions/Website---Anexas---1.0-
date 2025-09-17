'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  errors: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    subject?: string[] | undefined;
    message?: string[] | undefined;
  }
  resetKey?: string;
};

export async function submitContactForm(
  prevState: ContactFormState, 
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }
  
  try {
    // Here you would typically send an email or save to a database.
    // For this example, we'll just log the data and simulate a delay.
    console.log('New contact form submission:', validatedFields.data);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Thank you for your message! We will get back to you shortly.',
      errors: {},
      resetKey: Date.now().toString(),
    };
  } catch (e) {
    return {
      message: 'An unexpected error occurred. Please try again.',
      errors: {},
    }
  }
}
