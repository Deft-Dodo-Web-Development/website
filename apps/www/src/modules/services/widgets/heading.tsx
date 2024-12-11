import { Container } from "@/modules/common/components/container";
import { Heading } from "@components/heading";

export type ServicesHeadingProps = {
  container?: boolean;
  service?: {
    title: string;
  };
};

const serviceHeadingClass = "mb-6 lg:text-7xl lg:leading-[72px]";

const ServicesHeading: React.FC<ServicesHeadingProps> = ({
  container,
  service,
}) => {
  const title = service?.title;

  return (
    <Container enabled={container} asChild>
      <div className={!title ? "pt-6" : ""}>
        <Heading
          subHeading={title ? "Service" : "What we do"}
          alignment={title ? "start" : "middle"}
          size="lg"
          variant="primary"
          textTransform="uppercase"
          className={`mt-3 ${title ? serviceHeadingClass : ""}`}
        >
          {title || "Our Services"}
        </Heading>
      </div>
    </Container>
  );
};

export default ServicesHeading;
