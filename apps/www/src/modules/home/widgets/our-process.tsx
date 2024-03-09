import { Container } from "@components/container";
import OurProcessAnimated, {
  type OurProcessProps,
} from "../components/our-process-animated";

const OurProcess: React.FC<OurProcessProps> = (props) => {
  const { with_container: container } = props;

  return (
    <Container enabled={container}>
      <OurProcessAnimated {...props} />
    </Container>
  );
};

export default OurProcess;
