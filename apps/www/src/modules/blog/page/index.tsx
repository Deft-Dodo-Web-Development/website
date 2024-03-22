import { Separator } from "@components/separator";
import FooterSetup from "@utilities/footer-setup";
import { getAllBlogAction } from "../actions/service.action";
import { ArticleList } from "../widgets/article-list";
import { Container } from "@components/container";
import { Heading } from "@components/heading";
import { notFound } from "next/navigation";

const BlogPage = async () => {
  const blogs = await getAllBlogAction();

  // example of how to get a single service
  /**
   * @example
   * import { getBlogAction } from "../actions/service.action";
   * const service = await getBlogAction(1);
   * console.log(service);
   */

  if (!blogs) return notFound();

  const formattedBlogs = blogs.data.map((blog) => {
    return {
      title: blog.attributes.title,
      categories: blog.attributes.categories,
      summary: blog.attributes.summary,
      image: blog.attributes.image,
      slug: blog.attributes.slug,
      createdAt: blog.attributes.createdAt,
    };
  });

  return (
    <>
      <Container enabled={true} asChild>
        <div className="pt-14">
          <Heading
            subHeading="Resources"
            alignment="middle"
            size="lg"
            variant="primary"
            textTransform="uppercase"
            className="mt-3"
          >
            Our Blog
          </Heading>
        </div>
      </Container>
      <Separator className="mb-28 mt-14" container />
      <ArticleList articles={formattedBlogs} container />
      <Separator className="mb-28 mt-14" container />
      <FooterSetup variant="complex" />
    </>
  );
};

export default BlogPage;
