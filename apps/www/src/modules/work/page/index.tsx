import React from "react";
import { ProjectList } from "../widgets/project-list";
import { Separator } from "@components/separator";
import WorkHeading from "../widgets/heading";
import FooterSetup from "@utilities/footer-setup";
import { getAllWorkAction } from "../actions/work.action";
import { notFound } from "next/navigation";

const WorkPage: React.FC = async () => {
  const works = await getAllWorkAction();

  if (!works) return notFound();

  const formattedWorks = works.data?.map((work) => {
    return {
      title: work.attributes.title,
      summary: work.attributes.summary,
      image: work.attributes.image,
      slug: work.attributes.slug,
    };
  });

  return (
    <>
      <WorkHeading container />
      <Separator className="mb-28 mt-14" container />
      <ProjectList container projects={formattedWorks} />
      <FooterSetup variant="complex" />
    </>
  );
};

export default WorkPage;
