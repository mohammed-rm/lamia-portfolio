"use client";
import React from 'react';
import Image from 'next/image'
import heroImage from "../public/hero-image.png"
import {Button, Link} from "@nextui-org/react";
import {heroInfo} from "@/data/hero";

const Hero = () => {
    return (<section
        id="hero"
        className="section items-center">
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:justify-evenly">
            <div className="mt-24 flex flex-col space-y-6 items-center lg:items-start lg:w-1/3">
                    <span
                        className="flex flex-col text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-bold">
                        <p>{heroInfo.title}</p>
                        <p className="purple-gradient">
                            <span className="text-black">a</span>{heroInfo.role}
                        </p>
                    </span>
                <p className="p-6 text-center font-serif md:text-2xl tracking-wide md:tracking-widest lg:text-start lg:p-0">
                    {heroInfo.description}
                </p>
            </div>
            <div>
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    className="w-64 h-64 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
                    priority
                />
                <Button as={Link} color="primary" href="#contact"
                        className="uppercase tracking-widest hidden lg:flex rounded-none">
                    Get in touch
                </Button>
            </div>
        </div>
    </section>);
};

export default Hero;
