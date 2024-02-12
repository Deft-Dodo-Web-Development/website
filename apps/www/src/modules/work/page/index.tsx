import React from "react";
import { ProjectList } from "../widgets/project-list";
import { Separator } from "@components/separator";
import WorkHeading from "../widgets/heading";
import FooterSetup from "@utilities/footer-setup";

const WorkPage: React.FC = () => {
  return (
    <>
      <WorkHeading container />
      <Separator className="mb-28 mt-14" container />
      <ProjectList container />
      <FooterSetup variant="complex" />
    </>
  );
};

export default WorkPage;
