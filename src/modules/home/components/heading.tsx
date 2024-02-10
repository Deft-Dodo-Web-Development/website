import { cn } from "@/lib/utils";
import { Heading } from "@/modules/common/components/heading";
import { Layout } from "@/modules/common/components/layout";

const classes =
  "lg:text-[68px] lg:leading-[68px] min-[1100px]:text-[72px] min-[1100px]:leading-[72px]  xl:text-[80px] xl:leading-[80px]";

export type HeadingSectionProps = {
  container?: boolean;
};

const HeadingSection: React.FC<HeadingSectionProps> = ({ container }) => {
  return (
    <Layout
      className={cn("gap-2 lg:gap-5 items-end", container && "container")}
    >
      <Heading
        variant="primary"
        subHeading="Crafting"
        size="lg"
        alignment="start"
        textTrasform="uppercase"
        className={classes}
      >
        <h1>Seamless</h1>
      </Heading>
      <Heading
        variant="primary"
        size="subtitle"
        alignment="start"
        textTrasform="uppercase"
        className={`${classes} md:text-[48px] md:-leading[48px] lg:text-right`}
      >
        Shopping Experiences
      </Heading>
    </Layout>
  );
};

export default HeadingSection;
