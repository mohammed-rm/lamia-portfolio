"use client";
import React from "react";
import Footer from "@/components/footer";
import { Button, Input, Textarea } from "@nextui-org/react";
import { sendEmail } from "@/actions/send-email";

const Contact = () => {
  return (
    <section id="contact" className="section justify-center">
      <p className="section-title">Let&apos;s Chat Data</p>
      <div className="w-full mt-44">
        <form
          className="container mx-auto max-w-xl p-4 space-y-5 font-serif"
          action={async (formData) => {
            const response = await sendEmail(formData);
            console.log(response);
          }}
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
          <Button
            type="submit"
            color="primary"
            className="float-right rounded-none tracking-wide text-medium"
          >
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
