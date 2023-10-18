"use client";
import React from 'react';
import Footer from "@/components/footer";
import {Button, Input, Link, Textarea} from "@nextui-org/react";

const Contact = () => {
    return (<section
        id="contact"
        className="section">
        <p className="section-title">Contact</p>
        <div className="w-full mt-44">
            <div className="container mx-auto max-w-xl p-4 space-y-5">
                <Input type="text" label="Name" variant="underlined" size="lg" color="primary"/>
                <Input type="email" label="Email" variant="underlined" size="lg" color="primary"/>
                <Textarea
                    label="Message"
                    size="lg"
                    variant="underlined"
                    color="primary"
                />
                <Button color="primary" variant="flat" className="float-right">
                    Submit
                </Button>
            </div>
        </div>
        <Footer/>
    </section>);
};

export default Contact;
