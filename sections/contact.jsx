"use client";

import React from "react";
import Footer from "@/components/footer";
import { Input, Textarea } from "@nextui-org/react";
import { sendEmail } from "@/actions/send-email";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = async (formData) => {
    const response = await sendEmail(formData);

    if (response.type === "error") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      document.getElementById("submit-form").reset();
    }
  };

  return (
    <section id="contact" className="section justify-center">
      <p className="section-title">Let&apos;s Chat Data</p>
      <div className="w-full mt-44">
        <form
          id="submit-form"
          className="container mx-auto max-w-xl p-4 space-y-5 font-serif"
          action={handleSubmit}
        >
          <Input
            isClearable
            // isRequired
            name="name"
            type="text"
            label="Name"
            variant="underlined"
            color="primary"
            classNames={{ label: "text-lg" }}
          />
          <Input
            isClearable
            // isRequired
            name="email"
            type="email"
            label="Email"
            variant="underlined"
            color="primary"
            classNames={{ label: "text-lg" }}
          />
          <Textarea
            // isRequired
            name="message"
            label="Message"
            variant="underlined"
            color="primary"
            classNames={{ label: "text-lg" }}
          />
          <SubmitButton />
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
