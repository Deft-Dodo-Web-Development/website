import { cn } from "@/lib/utils";
import { Badge } from "@/modules/common/components/badge";
import { Container } from "@/modules/common/components/container";
import { Heading } from "@/modules/common/components/heading";

const services = [
  "CRO Audit",
  "Theme Customization",
  "SEO & Digital Marketing Integration",
  "Performance Optimization",
  "Ongoing Support & Maintenance",
  "Store Redesign & Revamp",
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
              <Badge
                variant="outline"
                size="base"
                className="sm:px-6 sm:py-3 sm:text-xl lg:px-8 lg:py-4 lg:text-2xl"
              >
                {service}
              </Badge>
            </li>
          ))}
        </ul>
      </Comp>
    </Container>
  );
};

export default Services;