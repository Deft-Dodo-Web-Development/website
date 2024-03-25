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
  const sender = process.env.RESEND_SENDER_EMAIL || "isaac@zitdevs.com"; // This is my email. Should be changed to the email of the company

  const sent = await resend.emails.send({
    from: sender,
    to: data.email,
    subject: `Thanks for reaching out, ${data.name}!`,
    react: <DeftDodoConfirmation name={data.name} />,
  });

  const sent2 = await resend.emails.send({
    from: sender,
    to: sender,
    subject: `New message from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  });

  if (sent.error || sent2.error) return { status: 400, message: sent.error };

  return { status: 200, message: "Success" };
}
