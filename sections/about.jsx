"use client";
import React from "react";
import { menuItems } from "@/content/navbar";
import useColoredTextRenderer from "@/hooks/colored-phrases";
import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/react";
import { useSectionInView } from "@/hooks/active-section-context";
import { urlFor } from "@/lib/sanity";

const About = ({ aboutParagraph, socials }) => {
  const { ref } = useSectionInView(menuItems.about.id);
  const renderedText = useColoredTextRenderer(
    aboutParagraph.text,
    aboutParagraph.coloredPhrases,
    "text-primary",
  );

  return (
    <section id="about" className="section" ref={ref}>
      <Card className="flex flex-col justify-center items-center w-[90%] mt-8 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-neutral-400 via-indigo-50 to-rose-100">
        <p className="section-title">{menuItems.about.navbarTitle}</p>
        <div className="mt-44 container mx-auto md:ml-20 md:mr-20">
          <p className="md:text-center md:text-xl lg:text-2xl tracking-wide">
            {renderedText.map((item, index) => {
              if (item.className) {
                return (
                  <span key={index} className={item.className}>
                    {item.content}
                  </span>
                );
              }
              return item.content;
            })}
          </p>
        </div>
        <CardFooter className="flex justify-center">
          <div className="flex flex-row justify-center mt-10 gap-8">
            {Object.keys(socials).map((key, index) => (
              <Link
                key={index}
                href={
                  key === "gmail"
                    ? `mailto:${socials[key].link}`
                    : socials[key].link
                }
                target="_blank"
              >
                <Image
                  src={urlFor(socials[key].icon).url()}
                  alt={key}
                  width={48}
                  height={48}
                  className="rounded-md hover:opacity-50"
                />
              </Link>
            ))}
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default About;
