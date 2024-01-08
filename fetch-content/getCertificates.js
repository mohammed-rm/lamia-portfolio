import { client } from "@/lib/sanity";

export async function getCertificates() {
  const query = `*[_type == "certificates"]{category, icon, images}`;
  return await client.fetch(query);
}
