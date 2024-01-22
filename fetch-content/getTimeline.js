import { client } from "@/lib/sanity";

export async function getTimeline() {
  const query = `*[_type == "volunteering-timeline"] | order(position asc) {date, description, coloredPhrases}`;
  return await client.fetch(query);
}
