import ServicesHeading from "../widgets/heading";
import { Separator } from "@components/separator";
import ServiceList from "../widgets/service-list";
import FooterSetup from "@utilities/footer-setup";
import { getAllServiceAction } from "../actions/service.action";
import { notFound } from "next/navigation";
import { Container } from "@components/container";

const ServicesPage = async () => {
  const services = await getAllServiceAction();
  if (!services) return notFound();

  // example of how to get a single service
  /**
   * @example
   * import { getServiceAction } from "../actions/service.action";
   * const service = await getServiceAction(1);
   * console.log(service);
   */

  return (
    <>
      <ServicesHeading container />
      <Container enabled={true} asChild>
        <section className="w-full my-4 md:my-6 lg:my-8 content uppercase text-center">
          <p className="text-xl">Our pricing structure is <span className="text-primary">simple</span>, <span className="text-primary">straightforward</span>, and <span className="text-primary">transparent</span>.
          <br/>
          We charge a flat rate of $75 / hour across all of our services.
          </p>
        </section>
      </Container>
      <Separator className="mb-12 mt-6" container />
      <ServiceList container services={services.data || []} />
      <FooterSetup variant="complex" />
    </>
  );
};

export default ServicesPage;
