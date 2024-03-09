import { Container } from "@/modules/common/components/container";
import { Heading } from "@/modules/common/components/heading";
import { Layout } from "@/modules/common/components/layout";

const classes =
  "lg:text-[68px] lg:leading-[68px] min-[1100px]:text-[72px] min-[1100px]:leading-[72px]  xl:text-[80px] xl:leading-[80px]";

export type HeadingSectionProps = {
  container?: boolean;
  start?: {
    title: string;
    sub_title: string;
  };
  finish?: string;
};

const HeadingSection: React.FC<HeadingSectionProps> = ({
  container,
  start,
  finish,
}) => {
  return (
    <Container enabled={container} asChild>
      <Layout className="gap-2 lg:gap-5 items-end" asChild>
        <section>
          {!!start && (
            <Heading
              variant="primary"
              subHeading={start.sub_title || ""}
              size="lg"
              alignment="start"
              textTransform="uppercase"
              className={classes}
            >
              {!!start.title && <h2>{start.title}</h2>}
            </Heading>
          )}
          {!!finish && (
            <Heading
              variant="primary"
              size="subtitle"
              alignment="start"
              textTransform="uppercase"
              className={`${classes} md:text-[48px] md:-leading[48px] lg:text-right`}
            >
              <h3>{finish}</h3>
            </Heading>
          )}
        </section>
      </Layout>
    </Container>
  );
};

export default HeadingSection;
