"use client";
import React from 'react';
import Image from 'next/image'
import heroImage from "../public/hero-image.png"
import {Button, Link} from "@nextui-org/react";
import {heroInfo} from "@/data/hero";

const Hero = () => {
    return (
        <section
            id="hero"
            className="section">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:justify-evenly">
                <div className="mt-24 flex flex-col space-y-6 items-center lg:w-1/3">
                    <span className="text-2xl md:text-3xl lg:text-6xl font-bold">{heroInfo.title}</span>
                    <p className="p-6 text-center md:text-2xl tracking-wide md:tracking-widest lg:text-start lg:p-0">
                        {heroInfo.description}
                    </p>
                </div>
                <div>
                    <Image
                        src={heroImage}
                        alt="Hero Image"
                        className="w-64 h-64 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
                    />
                    <Button as={Link} color="primary" href="#contact" variant="flat"
                            className="uppercase tracking-widest hidden lg:flex">
                        Get in touch
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
