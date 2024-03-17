import React from "react";
import { ProjectList } from "../widgets/project-list";
import { Separator } from "@components/separator";
import WorkHeading from "../widgets/heading";
import FooterSetup from "@utilities/footer-setup";
import { getWorkBySlugAction } from "../actions/work.action";
import Overview from "../widgets/project-overview";

const WorkDetailPage: React.FC = async (context) => {
    const { slug } = (context as { params: { slug: string } }).params;

    const work = await getWorkBySlugAction(slug);

    if (!work) return null;

    return (
        <>
            <Overview
                __component="common.image-with-text"
                heading={{
                    id: 1,
                    title: "Skyler Blue",
                    sub_title: "Web Design",
                }}
                description="Skyler Blue is a web design project that we did for a client in the UK. The client wanted a modern and clean design for their website. We used a combination of modern design elements and a clean layout to achieve the desired look and feel."
                image={{
                    __component: "common.image",
                    id: 1,
                    image: {
                        data: {
                            id: 1,
                            attributes: {
                                name: "skyler-blue.jpg",
                                url: "/images/skyler-blue.jpg",
                                alternativeText: "Skyler Blue",
                                caption: "Skyler Blue",
                                width: 1920,
                                height: 1080,
                                formats: {
                                    thumbnail: {
                                        url: "/images/skyler-blue.jpg",
                                        width: 245,
                                        height: 138,
                                        name: "thumbnail",
                                        hash: "thumbnail_skyler_blue_1_1",
                                        ext: ".jpg",
                                        mime: "image/jpeg",
                                        size: 8.17,
                                    },
                                    small: {
                                        url: "/images/skyler-blue.jpg",
                                        width: 245,
                                        height: 138,
                                        name: "thumbnail",
                                        hash: "thumbnail_skyler_blue_1_1",
                                        ext: ".jpg",
                                        mime: "image/jpeg",
                                        size: 8.17,
                                    },
                                    medium: {
                                        url: "/images/skyler-blue.jpg",
                                        width: 245,
                                        height: 138,
                                        name: "thumbnail",
                                        hash: "thumbnail_skyler_blue_1_1",
                                        ext: ".jpg",
                                        mime: "image/jpeg",
                                        size: 8.17,
                                    },
                                    large: {
                                        url: "/images/skyler-blue.jpg",
                                        width: 245,
                                        height: 138,
                                        name: "thumbnail",
                                        hash: "thumbnail_skyler_blue_1_1",
                                        ext: ".jpg",
                                        mime: "image/jpeg",
                                        size: 8.17,
                                    }
                                }
                            },
                        },
                    },
                }}
                overviews={[]}
                id={0}
            />
            <WorkHeading container />
            <Separator className="mb-28 mt-14" container />
            <ProjectList container />
            <FooterSetup variant="complex" />
        </>
    );
};

export default WorkDetailPage;
