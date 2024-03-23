import React from "react";
import { Metadata } from "next";
import FooterSetup from "@utilities/footer-setup";
import { getServiceBySlugAction } from "../actions/service.action";
import DynamicSection from "@/modules/common/components/dynamic-section";
import { notFound } from "next/navigation";

type Context = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async (context: Context): Promise<Metadata> => {
  const { slug } = context.params;
  const service = await getServiceBySlugAction(slug);

  if (!service || !service?.data?.attributes?.seo) return {};

  const seo = service.data.attributes.seo;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: seo.preventIndexing ? "noindex, nofollow" : "index, follow",
  };
};

const ServiceDetailPage: React.FC<Context> = async (context) => {
  const { slug } = context.params;

  const service = await getServiceBySlugAction(slug);

  if (!service || !service?.data?.attributes) return notFound();

  const pageContent = service?.data?.attributes?.description;

  return (
    <>
      {pageContent?.map((content, index) => (
        <DynamicSection
          key={`${index}-${content.__component}`}
          content={content}
        />
      ))}
      <FooterSetup variant="complex" />
    </>
  );
};

export default ServiceDetailPage;
