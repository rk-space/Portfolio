"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  try {
    // Here you would typically send an email or save to a database.
    // For this demo, we'll just log it to the console.
    console.log("New contact form submission:");
    console.log(validatedFields.data);

    return {
      type: "success",
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (e) {
    return {
      type: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
