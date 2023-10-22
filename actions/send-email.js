"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData) => {
  const senderName = formData.get("name");
  const senderEmail = formData.get("email");
  const senderMessage = formData.get("message");

  if (!validateString(senderName)) {
    return {
      message: "Invalid name",
    };
  }

  if (!validateString(senderEmail)) {
    return {
      message: "Invalid email",
    };
  }

  if (!validateString(senderMessage)) {
    return {
      message: "Invalid message",
    };
  }

  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.PERSONNAL_EMAIL,
    reply_to: senderEmail,
    subject: `Test message from ${senderName} : ${senderEmail}`,
    text: senderMessage,
  });

  if (!("id" in response)) {
    return {
      message: "Failed to send the email",
    };
  }
  return {
    message: "Thank you for your email !",
  };
};
