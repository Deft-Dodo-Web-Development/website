import { Components } from "@/modules/common/types/components";
import { HeroParallax } from "../components/projects-parallax";

export type ProjectsProps = Components.Projects;

const Projects: React.FC<ProjectsProps> = ({ projects, heading }) => {
  return (
    <HeroParallax
      heading={heading}
      products={projects.data.map((project) => {
        const { title, image, summary } = project.attributes;
        return {
          title: title,
          link: "/#",
          thumbnail: image.data,
          summary,
        };
      })}
    />
  );
};

export { Projects };
