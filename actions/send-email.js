"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData) => {
  const senderName = formData.get("name");
  const senderEmail = formData.get("email");
  const senderMessage = formData.get("message");

  if (
    !validateString(senderName) ||
    !validateString(senderEmail) ||
    !validateString(senderMessage)
  ) {
    return {
      type: "error",
      message: "Invalid form. Please fill in all required fields",
    };
  }

  const response = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: process.env.PERSONNAL_EMAIL,
    reply_to: senderEmail,
    subject: `New Message From ${senderName} : ${senderEmail}`,
    text: senderMessage,
  });

  if (!("id" in response)) {
    return {
      type: "error",
      message: "Failed to send the email",
    };
  }
  return {
    type: "success",
    message: "Thank you for your email !",
  };
};
