"use client";
import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileVersion from "@/components/contact/mobile-version";
import DesktopVersion from "@/components/contact/desktop-version";
import { contact } from "@/content/contact";

export function ContactForm() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <DesktopVersion
        contactButton={contact.triggerButton}
        nameInput={contact.nameInput}
        emailInput={contact.emailInput}
        messageInput={contact.message}
        submitButton={contact.submitButton}
        successMessage={contact.succesMessage}
        errorMessage={contact.errorMessage}
      />
    );
  }

  return (
    <MobileVersion
      contactButton={contact.triggerButton}
      nameInput={contact.nameInput}
      emailInput={contact.emailInput}
      messageInput={contact.message}
      submitButton={contact.submitButton}
      successMessage={contact.succesMessage}
      errorMessage={contact.errorMessage}
    />
  );
}
