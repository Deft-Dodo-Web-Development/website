import { Separator } from "@components/separator";
import FooterSetup from "@utilities/footer-setup";
import { getAllBlogAction } from "../actions/service.action";
import { ArticleList } from "../widgets/article-list";
import { Container } from "@components/container";
import { Heading } from "@components/heading";

const BlogPage = async () => {
  const blogs = await getAllBlogAction();
  if (!blogs) return null;

  // example of how to get a single service
  /**
   * @example
   * import { getBlogAction } from "../actions/service.action";
   * const service = await getBlogAction(1);
   * console.log(service);
   */

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
      <ArticleList articles={blogs.data} container />
      <Separator className="mb-28 mt-14" container />
      <FooterSetup variant="complex" />
    </>
  );
};

export default BlogPage;
