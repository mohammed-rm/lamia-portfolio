import React from "react";
import useColoredTextRenderer from "@/hooks/colored-phrases";
import { cn } from "@/lib/utils";

const ColoredParagraph = ({ paragraph, coloredWords, className }) => {
  const coloredParagraph = useColoredTextRenderer(
    paragraph,
    coloredWords || [],
  );

  return (
    <>
      {coloredParagraph.map((item, index) =>
        coloredWords && coloredWords.includes(item) ? (
          <span key={index} className={cn("text-purple-600", className)}>
            {item}
          </span>
        ) : (
          item
        ),
      )}
    </>
  );
};

export default ColoredParagraph;
