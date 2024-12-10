import ServicesHeading from "../widgets/heading";
import { Separator } from "@components/separator";
import ServiceList from "../widgets/service-list";
import FooterSetup from "@utilities/footer-setup";
import { getAllServiceAction } from "../actions/service.action";
import { notFound } from "next/navigation";

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
      <Separator className="mb-12 mt-6" container />
      <ServiceList container services={services.data || []} />
      <FooterSetup variant="complex" />
    </>
  );
};

export default ServicesPage;
