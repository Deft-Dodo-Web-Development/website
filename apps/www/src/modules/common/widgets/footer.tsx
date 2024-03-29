"use client";

import Link from "next/link";
import { Button } from "../components/button";
import useFooter from "../hooks/useFooter";
import { Separator } from "../components/separator";
import { Brand } from "../components/brand";
import { Info, Social, Copyright } from "../types/footer";

export type FooterProps = {
  info?: Info,
  socials?: Social[],
  copyright?: Copyright
};

const Footer = (props: FooterProps) => {
  const variant = useFooter((state) => state.variant);
  if (variant === "basic") return <BaseFooter {...props} />;

  return (
    <>
      <Separator className="my-32" container />
      <BaseFooter {...props} />
    </>
  );
};

const BaseFooter = ({
  info,
  socials,
  copyright
}: FooterProps) => (
  <footer className="pt-28 pb-14 container">
    <div className="w-full flex justify-between flex-wrap flex-col md:flex-row gap-5 md:items-start items-center text-center md:text-left">
      <section className="space-y-2">
        <Brand className="w-[90px] h-auto mx-auto md:ml-0" aria-hidden />
        <div>
          {info?.direction ? (<p className="text-white">{info.direction}</p>) : null}
          {info?.phone ? (<Link className="block" href={'tel:' + info.phone}>{info.phone}</Link>) : null}
          {info?.email ? (<Link className="block" href={`mailto:${info.email}`} >{info.email}</Link>) : null}
        </div>
      </section>
      {socials?.length > 0 ? (
        <ul className="flex gap-4 mt-3 flex-wrap md:flex-nowrap justify-center sm:justify-normal">
          {socials?.map((social, i) => (
            <li key={`${social.text}-${i}`}>
              <Button
                href={social.url ? social.url : "#"}
                target="_blank"
                className="py-6 px-8 text-[16px] font-[400]"
                variant="outline"
              >
                {social.text}
              </Button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
    <div className="flex w-full justify-between mt-14 flex-col md:flex-row items-center md:items-start gap-2">
      <div className="order-2 md:order-1 min-w-40" />
      {copyright?.back_to_top && (
        <span
          role="button"
          className="uppercase cursor-pointer order-1 md:order-2"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back To Top
        </span>
      )}
      {copyright?.copyright ? (
        <p className="order-3 text-white mt-3 md:mt-0">
          {copyright.copyright}
        </p>
      ) : null}
    </div>
  </footer>
);

export default Footer;
