import { Container } from "@components/container";
import { Layout } from "@components/layout";
import { Heading } from "@components/heading";
import { Button } from "@/modules/common/components/button";
import { Components } from "@/modules/common/types/components";
import ArticleCard from "@/modules/blog/components/article-card";

export type FeaturedArticlesProps = Components.Articles;

const classes =
    "lg:text-[68px] lg:leading-[68px] min-[1100px]:text-[72px] min-[1100px]:leading-[72px]  xl:text-[80px] xl:leading-[80px]";

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
    heading,
    description,
    blogs: articles,
    with_container,
    cta_url,
}) => {
    const HeadingTag = heading?.hierarchy || "h2";

    return (
        <Container enabled={with_container}>
            <Layout className="lg:grid-cols-1 my-10 md:my-14 lg:my-16">
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
                                <HeadingTag>{heading.title}</HeadingTag>
                            </Heading>
                        ) : null}

                        {description ? (
                            <p className="text-lg text-white mt-3">{description}</p>
                        ) : null}
                    </div>
                ) : null}

                {articles && (
                    <div
                        className={
                            heading && heading.sub_title
                                ? "xl:mt-6 w-full md:col-span-1"
                                : "w-full md:col-span-1"
                        }
                    >
                        <ul className="grid grid-cols-1 gap-8 overflow-auto scroll-smooth lg:pb-4 lg:flex lg:snap-mandatory lg:snap-x xl:grid xl:grid-cols-3">
                            {articles.data?.map((article, index) => (
                                <li
                                    className="h-full lg:flex-[0_0_33.333333%] lg:snap-center"
                                    key={index}
                                >
                                    <ArticleCard {...article} />
                                </li>
                            ))}
                        </ul>
                        {cta_url && (
                            <div className="flex justify-center mt-4 xl:col-span-7">
                                <Button className="px-14 py-8" icon="ArrowUpRight" href={cta_url}>
                                    View All
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </Layout>
        </Container>
    );
};

export default FeaturedArticles;