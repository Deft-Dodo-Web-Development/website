import { Layout } from "@/modules/common/components/layout";
import { Components } from "@/modules/common/types/components";
import { Heading } from "@components/heading";
import { Container } from "@components/container";
import { AspectRatio } from "@components/aspect-ratio";
import Image from "next/image";

export type ProjectOverviewProps = Components.ImageWithText;

const classes =
    "lg:text-[68px] lg:leading-[68px] min-[1100px]:text-[72px] min-[1100px]:leading-[72px]  xl:text-[80px] xl:leading-[80px]";

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
    description,
    heading,
    image,
    overviews = []
}) => {
    const overviewsTableHead = () => {
        return (
            <thead>
                <tr>
                    {overviews.map((overview, index) => (
                        <th key={index}>{overview.title}</th>
                    ))}
                </tr>
            </thead>
        );
    }

    const overviewsTableBody = () => {
        return (
            <tbody>
                <tr>
                    {overviews.map((overview, index) => (
                        <td key={index}>{overview.description}</td>
                    ))}
                </tr>
            </tbody>
        );
    }

    return (
        <Container enabled={true}>
            <Layout>
                {image ? (
                    <div className="w-full md:col-span-1 xl:col-span-4">
                        <AspectRatio ratio={4 / 3}>
                            <Image
                                src={image.image.data.attributes.url}
                                alt={image.image.data.attributes.alternativeText || "Project Image"}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </AspectRatio>
                    </div>
                ) : null}
                {heading || description ? (
                    <div className="w-full md:col-span-1 xl:col-span-3">
                        {heading ? (
                            <Heading
                                variant="primary"
                                subHeading={heading.sub_title || ""}
                                size="lg"
                                alignment="start"
                                textTransform="uppercase"
                                className={classes}
                            >
                                <h2>{heading.title}</h2>
                            </Heading>
                        ) : null}

                        {description ? (
                            <p className="text-lg text-white mt-3">{description}</p>
                        ) : null}

                        {overviews.length > 0 ? (
                            <table>
                                {overviewsTableHead()}
                                {overviewsTableBody()}
                            </table>
                        ) : null}
                    </div>
                ) : null}
            </Layout>
        </Container>
    );
};

export default ProjectOverview;