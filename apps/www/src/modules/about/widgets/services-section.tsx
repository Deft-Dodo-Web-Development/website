import { Heading } from "@components/heading";
import { Container } from "@components/container";
import { Separator } from "@components/separator";

export type ServiceSectionProps = {
  container?: boolean;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <Heading
        subHeading="Our"
        alignment="start"
        size="lg"
        variant="primary"
        textTransform="uppercase"
        className="mt-3"
      >
        Services
      </Heading>
      <Separator className="my-14" />
    </Container>
  );
};

export default ServiceSection;
