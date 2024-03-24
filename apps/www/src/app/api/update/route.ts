import { revalidateTag } from "next/cache";

export function POST() {
  revalidateTag("strapi");

  console.log("Revalidate tag sent to Strapi.");

  return Response.json({
    message: "Revalidate tag sent to Strapi.",
  });
}
