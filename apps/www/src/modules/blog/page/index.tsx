import { Separator } from "@components/separator";
import FooterSetup from "@utilities/footer-setup";
import { getAllBlogAction } from "../actions/service.action";

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
      <Separator className="mb-28 mt-14" container />
      <FooterSetup variant="complex" />
    </>
  );
};

export default BlogPage;
