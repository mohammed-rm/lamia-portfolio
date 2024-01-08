import { client } from "@/lib/sanity";

export async function getHero() {
  const query = `*[_type == "heroInfo"]{title,role,description}[0]`;
  return await client.fetch(query);
}
