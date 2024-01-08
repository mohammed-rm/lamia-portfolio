import { client } from "@/lib/sanity";

export async function getVolunteering() {
  const query = `*[_type == "volunteering"]{text}[0]`;
  return await client.fetch(query);
}
