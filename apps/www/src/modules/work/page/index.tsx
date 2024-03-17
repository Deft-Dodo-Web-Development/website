import React from "react";
import { ProjectList } from "../widgets/project-list";
import { Separator } from "@components/separator";
import WorkHeading from "../widgets/heading";
import FooterSetup from "@utilities/footer-setup";
import { getAllWorkAction } from "../actions/work.action";

const WorkPage: React.FC = async () => {
  const works = await getAllWorkAction();

  if (!works) return null;

  // now you can use the works data
  /**
   * @example
   * works.data.map((work) => {
   *  return (
   *    <div key={work.id}>
   *      <h1>{work.attributes.title}</h1>
   *      <p>{work.attributes.description}</p>
   *    </div>
   *  )
   * })
   */

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
