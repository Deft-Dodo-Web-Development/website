import { Container } from "@/modules/common/components/container";
import ServiceCard from "../components/service-card";
import { Services } from "@/modules/common/types/common";

export type ServiceListProps = {
  container?: boolean;
  services: Services[];
};

const ServiceList: React.FC<ServiceListProps> = ({ container, services }) => {
  return (
    <Container enabled={container}>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={index}>
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ServiceList;
