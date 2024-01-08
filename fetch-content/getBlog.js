import { client } from "@/lib/sanity";

export async function getBlog() {
  const query = `*[_type == "blog"]{text, link}[0]`;
  return await client.fetch(query);
}
