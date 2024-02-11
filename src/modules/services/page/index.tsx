import React from "react";
import ServicesHeading from "../widgets/heading";
import { Separator } from "@components/separator";
import ServiceList from "../widgets/service-list";
import FooterSetup from "@utilities/footer-setup";

const ServicesPage = () => {
  return (
    <>
      <ServicesHeading container />
      <Separator className="mb-28 mt-14" container />
      <ServiceList container />
      <FooterSetup variant="complex" />
    </>
  );
};

export default ServicesPage;
