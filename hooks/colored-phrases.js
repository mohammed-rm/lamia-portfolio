const useColoredTextRenderer = (text, coloredPhrases, className) => {
  const splitText = text.split(
    new RegExp(`(${coloredPhrases.join("|")})`, "gi"),
  );

  return splitText.map((part) => {
    if (coloredPhrases.includes(part.toLowerCase())) {
      return {
        content: part,
        className: className || "text-primary font-playpen font-semibold",
      };
    }
    return { content: part };
  });
};

export default useColoredTextRenderer;
