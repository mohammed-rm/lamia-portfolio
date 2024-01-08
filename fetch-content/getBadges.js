import { client } from "@/lib/sanity";

export async function getBadges() {
  const query = `*[_type == "badges"]{title, keywords, badgeIcon, link}`;
  return await client.fetch(query);
}
