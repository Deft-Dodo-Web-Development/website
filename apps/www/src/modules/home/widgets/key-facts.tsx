import { Container } from "@/modules/common/components/container";
import { Layout } from "@/modules/common/components/layout";
import KeyFacts from "../components/key-facts-animated";

type KeyFactsProps = {
  container?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const KeyFactsSection: React.FC<KeyFactsProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <Layout className="items-center">
        <KeyFacts />
      </Layout>
    </Container>
  );
};

export default KeyFactsSection;
