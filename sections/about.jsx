import React from "react";
import { aboutParagraph } from "@/content/about";
import { menuItems } from "@/content/navbar";
import useColoredTextRenderer from "@/hooks/colored-phrases";

const About = () => {
  const renderedText = useColoredTextRenderer(
    aboutParagraph.text,
    aboutParagraph.coloredPhrases,
    "text-primary font-playpen font-semibold",
  );

  return (
    <section id="about" className="section">
      {/* Section Title */}
      <p className="section-title">{menuItems[0].about.navbarTitle}</p>

      {/* About Content */}
      <div className="mt-44 w-full container mx-auto md:ml-20 md:mr-20">
        <p className="md:text-center p-6 md:text-xl lg:text-2xl tracking-wide">
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
    </section>
  );
};

export default About;
