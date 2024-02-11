import { Container } from "@/modules/common/components/container";
import ServiceCard, { ServiceCardProps } from "../components/service-card";

export type ServiceListProps = {
  container?: boolean;
};

const services: ServiceCardProps[] = [
  {
    icon: "BarChart2",
    title: "CRO Audit",
    description:
      "A comprehensive assessment of your Shopify e-commerce store's performance with the goal of identifying opportunities to improve its conversion rates. Conversion rate optimization focuses on increasing the percentage of website.",
    slug: "cro-audit",
  },
  {
    icon: "Layout",
    title: "Theme Customization",
    description:
      "Refers to the process of modifying and tailoring the design, layout, features, and functionality of a pre-existing Shopify theme to better align with a store owner's brand, vision, and specific business needs.",
    slug: "theme-customization",
  },
  {
    icon: "TrendingUp",
    title: "SEO & Digital Marketing Integration",
    description:
      "Involve strategies and techniques to enhance the visibility, reach, and effectiveness of your Shopify e-commerce store in search engines and various online marketing channels.",
    slug: "seo-digital-marketing-integration",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Improving the speed, responsiveness, and overall efficiency of your Shopify e-commerce store. The goal of performance optimization is to create a seamless and enjoyable user experience.",
    slug: "performance-optimization",
  },
  {
    icon: "LifeBuoy",
    title: "Ongoing Support & Maintenance",
    description:
      "Refer to the services provided to ensure the continued health, functionality, and performance of your Shopify e-commerce store after it has been launched.",
    slug: "ongoing-support-maintenance",
  },
  {
    icon: "RefreshCcw",
    title: "Store Redesign & Revamp",
    description:
      "Involve the process of giving your existing Shopify e-commerce store a fresh and updated look, feel, and functionality. It's a strategic effort to enhance overall performance of your online store to better align with your brand's current goals.",
    slug: "store-redesign-revamp",
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
