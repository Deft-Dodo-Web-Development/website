import { Container } from "@/modules/common/components/container";
import { Layout } from "@/modules/common/components/layout";
import KeyFactsAnimated from "../components/key-facts-animated";
import { Components } from "@/modules/common/types/components";

type KeyFactsProps = Components.KeyFacts;

const KeyFactsSection: React.FC<KeyFactsProps> = (props) => {
  return (
    <Container enabled={props.with_container}>
      <Layout className="items-center">
        <KeyFactsAnimated {...props} />
      </Layout>
    </Container>
  );
};

export default KeyFactsSection;
