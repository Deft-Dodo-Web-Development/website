import { Button } from "@/modules/common/components/button";
import { Container } from "@/modules/common/components/container";
import { Heading } from "@/modules/common/components/heading";
import NotFoundSvg from "../icons/404";

const Content = () => {
  return (
    <Container enabled asChild>
      <div className="pt-14 flex justify-center items-center overflow-hidden">
        <div className="text-center">
          <span className="text-6xl font-bold text-primary -rotate-12 block mt-2">
            404
          </span>
          <div className="mb-8">
            <NotFoundSvg className="mx-auto w-[300px] h-[250px]" />
          </div>
          <Heading
            size="md"
            alignment="middle"
            variant="primary"
            className="sm:text-5xl font-semibold md:text-6xl"
          >
            Page not found
          </Heading>

          <h1 className="text-4xl font-semibold sm:text-5xl"></h1>
          <p className="text-white mt-3">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <Button
            href="/"
            className="mt-12"
            variant="default"
            icon="ArrowUpRight"
          >
            Go back to Home
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Content;
