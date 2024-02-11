import React from "react";
import { ProjectList } from "../widgets/project-list";
import { Separator } from "@components/separator";
import WorkHeading from "../widgets/heading";

const WorkPage: React.FC = () => {
  return (
    <>
      <WorkHeading container />
      <Separator className="mb-28 mt-14" container />
      <ProjectList container />
    </>
  );
};

export default WorkPage;
