import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type RichTextProps = {
    content: string;
};

const RichText: React.FC<RichTextProps> = ({ content }) => {
    return <Markdown disallowedElements={['h1']} remarkPlugins={[remarkGfm]}>{content}</Markdown>;
};

export { RichText };