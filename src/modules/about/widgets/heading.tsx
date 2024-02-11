import { Container } from "@/modules/common/components/container";
import { Heading } from "@components/heading";

export type AboutUsHeadingProps = {
  container?: boolean;
};

const AboutUsHeading: React.FC<AboutUsHeadingProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <div className="pt-14">
        <Heading
          subHeading="About Us"
          alignment="middle"
          size="lg"
          variant="primary"
          textTransform="uppercase"
          className="mt-3"
        >
          <h2>
            <span className="font-bold">Deft Dodo</span>
            <span className="font-thin">®</span>
          </h2>
        </Heading>
      </div>
    </Container>
  );
};

export default AboutUsHeading;
