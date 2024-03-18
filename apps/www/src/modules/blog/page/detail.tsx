import React from "react";
import { Metadata } from "next";
import FooterSetup from "@utilities/footer-setup";
import { getBlogBySlugAction } from "../actions/service.action";
import DynamicSection from "@/modules/common/components/dynamic-section";
import BlogHeader from "../widgets/blog-header";
import { Layout } from "@/modules/common/components/layout";
import { Container } from "@components/container";
import Author from "../components/author";
import { Separator } from "@/modules/common/components/separator";
import { Badge } from "@components/badge";

type Context = {
    params: {
        slug: string;
    };
};

export const generateMetadata = async (context: Context): Promise<Metadata> => {
    const { slug } = context.params;
    const blog = await getBlogBySlugAction(slug);

    if (!blog || !blog?.data?.attributes?.seo) return {};

    const seo = blog.data.attributes.seo;

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        robots: seo.preventIndexing ? "noindex, nofollow" : "index, follow",
    };
};

const BlogDetailPage: React.FC<Context> = async (context) => {
    const { slug } = context.params;

    const blog = await getBlogBySlugAction(slug);

    if (!blog) return null;

    const pageContent = blog?.data?.attributes?.body;
    const author = blog?.data?.attributes?.author;
    const categories = blog?.data?.attributes?.categories;

    return (
        <>
            <BlogHeader
                title={blog.data.attributes.title}
                createdAt={blog.data.attributes.createdAt}
                image={blog.data.attributes.image}
            />
            <Container enabled={true}>
                <Layout className="lg:grid-cols-8">
                    <div className="w-full lg:col-span-2 mt-8 mb-4 order-last lg:order-first">
                        {author && (
                            <>
                                <Author {...author} />
                                <Separator
                                    container={false}
                                    className="mb-4 mt-2 lg:mb-6 lg:mt-4"
                                />
                            </>
                        )}

                        {categories.data?.length > 0 ? (
                            <div className="flex items-center gap-2">
                                {categories.data?.map((category, index) => (
                                    <Badge variant="default" size="base" key={index}>{category.attributes.name}</Badge>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    <div className="w-full lg:col-span-6 lg:pl-8">
                        <div className="w-full">
                            {pageContent?.map((content, index) => (
                                <DynamicSection
                                    key={`${index}-${content.__component}`}
                                    content={content}
                                />
                            ))}
                        </div>
                    </div>
                </Layout>
            </Container>
            <FooterSetup variant="complex" />
        </>
    );
};

export default BlogDetailPage;
