import { getAboutUsPageData, getSeoPageData } from "../actions/about.action";
import DynamicSection from "../components/dynamic-section";
import FooterSetup from "@utilities/footer-setup";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoRes = await getSeoPageData();

  if (!seoRes || !seoRes?.data?.attributes?.seo) return {};

  const seo = seoRes.data.attributes.seo;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: seo.preventIndexing ? "noindex, nofollow" : "index, follow",
  };
};

const AboutPage = async () => {
  const response = await getAboutUsPageData();

  if (!response || !response?.data?.attributes) return notFound();

  const pageContent = response?.data?.attributes?.pageContent;

  return (
    <>
      {pageContent.map((content, index) => (
        <DynamicSection
          key={`${index}-${content.__component}`}
          content={content}
        />
      ))}
      <FooterSetup variant="complex" />
    </>
  );
};

export default AboutPage;
