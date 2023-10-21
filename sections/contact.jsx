"use client";
import React from 'react';
import Footer from "@/components/footer";
import {Button, Input, Textarea} from "@nextui-org/react";

const Contact = () => {
    return (<section
        id="contact"
        className="section justify-center">
        <p className="section-title">Let&apos;s Chat Data</p>
        <div className="w-full mt-44">
            <div className="container mx-auto max-w-xl p-4 space-y-5 font-serif">
                <Input
                    type="text"
                    label="Name"
                    variant="underlined"
                    color="primary"
                    classNames={{label: "text-lg"}}
                />
                <Input
                    type="email"
                    label="Email"
                    variant="underlined"
                    color="primary"
                    classNames={{label: "text-lg"}}
                />
                <Textarea
                    label="Message"
                    variant="underlined"
                    color="primary"
                    classNames={{label: "text-lg"}}
                />
                <Button color="primary" className="float-right rounded-none tracking-wide text-medium">
                    Submit
                </Button>
            </div>
        </div>
        <Footer/>
    </section>);
};

export default Contact;
