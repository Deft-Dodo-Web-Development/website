"use client";
import useAppData from "@hooks/useAppData";
import { Button } from "@components/button";
import { Container } from "@components/container";
import { Heading } from "@components/heading";

const services = [
  {
    title: "CRO Audit",
    slug: "cro-audit",
  },
  {
    title: "Theme Customization",
    slug: "theme-customization",
  },
  {
    title: "SEO & Digital Marketing Integration",
    slug: "seo-digital-marketing-integration",
  },
  {
    title: "Performance Optimization",
    slug: "performance-optimization",
  },
  {
    title: "Ongoing Support & Maintenance",
    slug: "ongoing-support-maintenance",
  },
  {
    title: "Store Redesign & Revamp",
    slug: "store-redesign-revamp",
  },
];

export interface ServicesProps {
  className?: string;
  heading?: string;
  services?: string[];
  container?: boolean;
}

const Services = (props: ServicesProps) => {
  const { heading = "Services", container } = props;
  const Comp = heading ? "section" : "div";
  const locale = useAppData((state) => state.locale);

  return (
    <Container enabled={container} asChild>
      <Comp>
        <Heading
          variant="secondary"
          size="sm"
          alignment="middle"
          textTransform="uppercase"
          className="mb-8"
        >
          {heading}
        </Heading>
        <ul className="flex flex-wrap gap-4 justify-center">
          {services.map((service, index) => (
            <li key={index} className="m-0">
              <Button
                variant="outline"
                className="md:text-xl lg:text-2xl md:py-6 lg:py-8"
                href={`/${locale}/services/${service.slug}`}
              >
                {service.title}
              </Button>
            </li>
          ))}
        </ul>
      </Comp>
    </Container>
  );
};

export default Services;
