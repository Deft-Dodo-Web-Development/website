import FooterSetup from "@/modules/common/utilities/footer-setup";
import { getHomePageData, getSeoPageData } from "../actions/home-page";

import { Metadata } from "next";
import DynamicSection from "@/modules/common/components/dynamic-section";

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

const HomePage = async () => {
  const response = await getHomePageData();

  if (!response || !response.data) {
    return null;
  }

  const pageContent = response?.data?.attributes?.pageContent;

  if (!pageContent) {
    console.log("No page content found");
    return null;
  }

  return (
    <>
      {pageContent.map((content, index) => (
        <DynamicSection
          key={`${index}-${content.__component}`}
          content={content}
        />
      ))}
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
