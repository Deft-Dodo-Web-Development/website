import ServicesHeading from "../widgets/heading";
import { Separator } from "@components/separator";
import ServiceList from "../widgets/service-list";
import FooterSetup from "@utilities/footer-setup";
import { getAllServiceAction } from "../actions/service.action";

const ServicesPage = async () => {
  const services = await getAllServiceAction();
  if (!services) return null;

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
      <Separator className="mb-28 mt-14" container />
      <ServiceList container services={services.data} />
      <FooterSetup variant="complex" />
    </>
  );
};

export default ServicesPage;
