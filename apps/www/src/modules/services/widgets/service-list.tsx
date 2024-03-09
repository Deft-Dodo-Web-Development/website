import { Container } from "@/modules/common/components/container";
import ServiceCard, { ServiceCardProps } from "../components/service-card";

export type ServiceListProps = {
  container?: boolean;
};

const services: ServiceCardProps[] = [
  {
    id: 1,
    attributes: {
      createdAt: "2021-10-14T14:00:00.000Z",
      updatedAt: "2021-10-14T14:00:00.000Z",
      title: "Service 1",
      cta: "Learn More",
      icon: "theme",
      description: "Service 1 description",
      slug: "service-1",
    },
  },
];

const ServiceList: React.FC<ServiceListProps> = ({ container }) => {
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
