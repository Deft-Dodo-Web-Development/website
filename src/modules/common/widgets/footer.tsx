"use client";

import Link from "next/link";
import { Button } from "../components/button";
import useFooter from "../hooks/useFooter";
import { Separator } from "../components/separator";

const socials = [
  {
    name: "upwork",
    href: "#",
  },
  {
    name: "linkedin",
    href: "#",
  },
  {
    name: "instagram",
    href: "#",
  },
];

const Footer = () => {
  const variant = useFooter((state) => state.variant);
  if (variant === "basic") return <BaseFooter />;

  return (
    <>
      <Separator className="my-32" container />
      <BaseFooter />
    </>
  );
};

const BaseFooter = () => (
  <footer className="pt-28 pb-14 container">
    <div className="w-full flex justify-between flex-col md:flex-row gap-5 md:items-start items-center text-center md:text-left">
      <section className="space-y-2">
        <h3 className="space-x-1 text-xl uppercase">
          <span className="font-bold">DeftDodo</span>
          <span className="font-thin">®</span>
        </h3>
        <div>
          <p className="text-white-56">Sheridan, Wyoming 82801, USA</p>
          <p>+000 123 456 789 </p>
          <Link href={`mailto:info@deftdodo.com`} className="text-white-56">
            info@deftdodo.com
          </Link>
        </div>
      </section>
      <ul className="flex gap-4 mt-3 flex-wrap md:flex-nowrap justify-center sm:justify-normal">
        {socials.map((social, i) => (
          <li key={`${social.name}-${i}`}>
            <Button
              href="#"
              target="_blank"
              className="py-6 px-8 text-[16px] font-[400]"
              variant="outline"
            >
              {social.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex w-full justify-between mt-14 flex-col md:flex-row items-center md:items-start gap-2">
      <Link href="/#" className="text-white-56 order-2 md:order-1">
        Privacy & Cookie Policy
      </Link>
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
      <p className="order-3 text-white-56 mt-3 md:mt-0">
        © 2023 Deft Dodo All Right Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
