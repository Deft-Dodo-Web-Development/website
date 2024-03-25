/* eslint-disable turbo/no-undeclared-env-vars */
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface DeftDodoConfirmationProps {
  name?: string;
}

const baseUrl = process.env.SITE_URL ? `https://${process.env.SITE_URL}` : "";

export const DeftDodoConfirmation = ({
  name: username,
}: DeftDodoConfirmationProps) => {
  const previewText = `Hey ${username}, We have received your message and will get back to you as soon as possible.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-zinc-800 my-auto mx-auto font-sans px-2 text-white py-20">
          <Container className=" bg-[#383838] border-solid border-[#0A967E] border-2 rounded-lg my-[40px] mx-auto p-[20px] max-w-[390px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/deft-dodo.png`}
                width="130"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-white text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              We got your message!
            </Heading>
            <Text className="text-white text-[14px] leading-[24px]">
              Hey <strong>{username}</strong>,
            </Text>
            <Text className="text-white text-[14px] leading-[24px]">
              <Link
                href={`mailto:`}
                className="text-[#09C5A3] no-underline"
              ></Link>
              We have received your message and will get back to you as soon as
              possible.
            </Text>
            <Hr />

            <Text className="text-white text-[14px] mb-10">
              Thanks,
              <br />
              <span className="font-bold">
                <span className="text-[#09C5A3]">Deft Dodo </span>
                Team
              </span>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

DeftDodoConfirmation.PreviewProps = {
  name: "John Doe",
} as DeftDodoConfirmationProps;

export default DeftDodoConfirmation;
