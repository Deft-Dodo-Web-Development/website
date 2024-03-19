import { Heading } from "@components/heading";
import { Container } from "@components/container";
import { StrapiResponse, Media } from "@/modules/common/types/common";
import { Separator } from "@/modules/common/components/separator";
import { Image } from "@/modules/blog/components/Image";
import { formatDate } from "../utilities";

export type BlogHeaderProps = {
    title: string;
    createdAt: string;
    image: StrapiResponse<Media>;
};

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, createdAt, image }) => {
    return (
        <Container enabled={true}>
            <div className="w-full">
                <Heading
                    subHeading={formatDate(createdAt)}
                    size="md"
                    variant="primary"
                    className="md:text-[48px] md:leading-[48px]"
                >
                    {title ? title : ""}
                </Heading>
            </div>
            <Separator
                container={false}
                className="mb-8 mt-6 lg:mb-14 lg:mt-10"
            />
            {image && (
                <div className="w-full">
                    <Image
                        image={image}
                        aspectRatio={{
                            sm: 1 / 1,
                            md: 4 / 2.5,
                            lg: 16 / 7,
                        }}
                    />
                </div>
            )}
        </Container>
    );
}

export default BlogHeader;