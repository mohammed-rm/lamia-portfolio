import { client } from "@/lib/sanity";

export async function getAbout() {
  const query = `*[_type == "aboutParagraph"]{text,coloredPhrases}[0]`;
  return await client.fetch(query);
}
