export default function useColoredTextRenderer(text, wordsToColor) {
  if (!wordsToColor || wordsToColor.length === 0) {
    return [text];
  }

  // Create a regular expression from the wordsToColor array
  const regex = new RegExp(wordsToColor.join("|"), "gi");

  // Split the text into an array of words and phrases
  const splitText = text.split(regex);

  // Find the words and phrases that should be colored
  const coloredWords = text.match(regex);

  // Combine the words and phrases into a new array, with the colored words wrapped in a span
  return splitText.reduce((prev, current, i) => {
    if (coloredWords && coloredWords[i]) {
      return prev.concat(current, coloredWords[i]);
    }
    return prev.concat(current);
  }, []);
}
