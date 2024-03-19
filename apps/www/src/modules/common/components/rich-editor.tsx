import { Components } from "@/modules/common/types/components";
import { Container } from "@components/container";
import { RichText } from "./rich-text";

export type RichEditorProps = Components.RichEditor;

const RichEditor: React.FC<RichEditorProps> = ({ body, with_container }) => {
    return (
        <Container enabled={with_container}>
            <section className="w-full my-4 md:my-6 lg:my-8 content">
                <RichText content={body} />
            </section>
        </Container>
    );
};

export default RichEditor;