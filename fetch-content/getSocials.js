import { client } from "@/lib/sanity";

export async function getSocials() {
  const query = `*[_type == "socials"]{github {link, icon}, linkedin {link, icon}, gmail {link, icon}}[0]`;
  return await client.fetch(query);
}
