import React from "react";
import { ComponentsOptions } from "@/modules/common/types/components";
import AboutUs from "@/modules/home/widgets/about-us";
import Team from "../widgets/team";
import Testimonials from "@/modules/home/widgets/testimonials";
import { Separator } from "@components/separator";
import RichEditor from "@components/rich-editor";

export type DynamicSectionProps = {
    content: ComponentsOptions;
};

const DynamicSection: React.FC<DynamicSectionProps> = ({ content }) => {
    switch (content.__component) {
        case "home.about-us":
            return <AboutUs {...content} />;
        case "home.testimonials":
            return <Testimonials {...content} />;
        case "home.team":
            return <Team {...content} />;
        case "common.separator":
            return (
                <Separator
                    container={content.with_container}
                    style={{
                        marginBottom: `${content.margin_button}px`,
                        marginTop: `${content.margin_top}px`,
                    }}
                />
            );
        case "common.spacer":
            return (
                <div
                    style={{
                        height: `${content.height}px`,
                    }}
                />
            );
        case "common.rich-editor":
            return (
                <RichEditor {...content} />
            )
        default:
            return <div>Component not found</div>;
    }
};

export default DynamicSection;
