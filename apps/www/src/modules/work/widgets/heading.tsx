import { Container } from "@/modules/common/components/container";
import { Heading } from "@components/heading";

export type WorkHeadingProps = {
  container?: boolean;
};

const WorkHeading: React.FC<WorkHeadingProps> = ({ container }) => {
  return (
    <Container enabled={container} asChild>
      <div className="pt-6">
        <Heading
          subHeading="Portfolio"
          alignment="middle"
          size="lg"
          variant="primary"
          textTransform="uppercase"
          className="mt-3"
        >
          Our Projects
        </Heading>
      </div>
    </Container>
  );
};

export default WorkHeading;
