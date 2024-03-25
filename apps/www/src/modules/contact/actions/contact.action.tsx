/* eslint-disable turbo/no-undeclared-env-vars */
"use server";
import { Resend } from "resend";
import DeftDodoConfirmation from "@deft-dodo/emails/emails/deft-dodo-confirmation";
import { config } from "dotenv";

config();

export async function ContactAction(data: {
  name: string;
  email: string;
  message: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const sent = await resend.emails.send({
    from: "isaac@zitdevs.com",
    to: data.email,
    subject: `Thanks for reaching out, ${data.name}!`,
    react: <DeftDodoConfirmation name={data.name} />,
  });

  console.log(sent);

  if (sent.error) return { status: 400, message: sent.error };

  return { status: 200, message: "Success" };
}
