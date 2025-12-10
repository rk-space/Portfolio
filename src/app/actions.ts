"use server";

import { z } from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getSdks } from "@/firebase";
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "@/firebase/config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// Helper to initialize Firebase Admin SDK
function getFirebaseAdmin() {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
  return getSdks(getApps()[0]);
}

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
    const { firestore } = getFirebaseAdmin();
    const submissionsCollection = collection(firestore, "contactFormSubmissions");
    
    await addDoc(submissionsCollection, {
      ...validatedFields.data,
      submissionDate: serverTimestamp(),
    });

    return {
      type: "success",
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (e: any) {
    console.error("Error submitting form to Firestore:", e);
    return {
      type: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
