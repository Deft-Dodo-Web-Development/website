import { Container } from "@components/container";
import { Layout } from "@components/layout";
import { Heading } from "@components/heading";
import ServiceCard from "@/modules/services/components/service-card";
import { Button } from "@/modules/common/components/button";
import { Components } from "@/modules/common/types/components";

export type FeaturedServicesProps = Components.Services;

const classes =
  "lg:text-[68px] lg:leading-[68px] min-[1100px]:text-[72px] min-[1100px]:leading-[72px]  xl:text-[80px] xl:leading-[80px]";

const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  heading,
  description,
  services,
  with_container,
  cta_url,
}) => {
  return (
    <Container enabled={with_container}>
      <Layout className="lg:grid-cols-1 xl:grid-cols-7 my-10 md:my-14 lg:my-16">
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
                <h2>{heading.title}</h2>
              </Heading>
            ) : null}

            {description ? (
              <p className="text-lg text-white mt-3">{description}</p>
            ) : null}
          </div>
        ) : null}

        {services && (
          <div
            className={
              heading.sub_title
                ? "xl:mt-6 w-full md:col-span-1 xl:col-span-4"
                : "w-full md:col-span-1 xl:col-span-4"
            }
          >
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 overflow-auto scroll-smooth lg:pb-4 lg:flex lg:snap-mandatory lg:snap-x xl:grid xl:grid-cols-2">
              {services.data?.map((service, index) => (
                <li
                  className="h-full lg:flex-[0_0_33.333333%] lg:snap-center"
                  key={index}
                >
                  <ServiceCard {...service} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {cta_url && (
          <div className="flex justify-center mt-4 xl:col-span-7">
            <Button className="px-14 py-8" icon="ArrowUpRight" href={cta_url}>
              View All
            </Button>
          </div>
        )}
      </Layout>
    </Container>
  );
};

export default FeaturedServices;
