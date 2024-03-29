import { Container } from "@/modules/common/components/container";
import { Heading } from "@components/heading";

export type WorkHeadingProps = {
  container?: boolean;
};

const WorkHeading: React.FC<WorkHeadingProps> = ({ container }) => {
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
          Work
        </Heading>
      </div>
    </Container>
  );
};

export default WorkHeading;
