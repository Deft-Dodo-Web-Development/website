import React from "react";
import { Metadata } from "next";
import FooterSetup from "@utilities/footer-setup";
import { getWorkBySlugAction } from "../actions/work.action";
import DynamicSection from "@/modules/common/components/dynamic-section";
import NotFoundPage from "@/modules/not-found/page";

type Context = {
    params: {
        slug: string;
    };
};

export const generateMetadata = async (context: Context): Promise<Metadata> => {
    const { slug } = context.params;
    const work = await getWorkBySlugAction(slug);

    if (!work || !work?.data?.attributes?.seo) return {};

    const seo = work.data.attributes.seo;

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        robots: seo.preventIndexing ? "noindex, nofollow" : "index, follow",
    };
};

const WorkDetailPage: React.FC<Context> = async (context) => {
    const { slug } = context.params;

    const work = await getWorkBySlugAction(slug);


    if (!work.data) return (
        <NotFoundPage />
    );

    const pageContent = work?.data?.attributes?.description;

    return (
        <>
            {pageContent?.map((content, index) => (
                <DynamicSection
                    key={`${index}-${content.__component}`}
                    content={content}
                />
            ))}
            <FooterSetup variant="complex" />
        </>
    );
};

export default WorkDetailPage;
