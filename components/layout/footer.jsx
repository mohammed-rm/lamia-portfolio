"use client";
import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "@nextui-org/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { links } from "@/content/socials";

const Footer = () => {
  return (
    <footer className="bg-[#dde3e9] shadow m-2 dark:bg-gray-800 absolute bottom-0 w-full">
      <div
        className="flex flex-col md:flex-row items-center justify-between w-full mx-auto max-w-screen-xl p-2
            text-sm md:text-lg text-gray-500 dark:text-gray-400"
      >
        <span className="text-center">
          © 2023 Lamia C.™ All Rights Reserved.
        </span>

        <span className="flex flex-row items-center gap-2">
          Made with
          <BsFillSuitHeartFill color="red" />
          <span>by</span>
          <Link href={links.hopymed} target="_blank" rel="noopener noreferrer">
            HopyMed
          </Link>
        </span>
      </div>

      <div className="flex gap-4 flex-row justify-center md:justify-start w-full mx-auto max-w-screen-xl p-2">
        <Link
          href={links.github}
          target="_blank"
          color="foreground"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <AiFillGithub className="w-8 h-8" />
        </Link>
        <Link
          href={links.linkedin}
          target="_blank"
          color="foreground"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
