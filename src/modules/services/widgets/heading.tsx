import { Container } from "@/modules/common/components/container";
import { Heading } from "@components/heading";

export type ServicesHeadingProps = {
  container?: boolean;
};

const ServicesHeading: React.FC<ServicesHeadingProps> = ({ container }) => {
  return (
    <Container enabled={container} asChild>
      <div className="pt-14">
        <Heading
          subHeading="Our"
          alignment="middle"
          size="lg"
          variant="primary"
          textTransform="uppercase"
          className="mt-3"
        >
          Services
        </Heading>
      </div>
    </Container>
  );
};

export default ServicesHeading;
