import { Components } from "@/modules/common/types/components";
import { HeroParallax } from "../components/projects-parallax";
import { Projects as ProjectType } from "@/modules/common/types/common";

export type ProjectsProps = Components.Projects;

const Projects: React.FC<ProjectsProps> = ({ projects, heading }) => {
  const { data } = projects;
  const size = data.length;

  // size should be at least 12 if it's not duplicate the data to make it 12
  if (size < 16) {
    const diff = 16 - size;
    const newItems: ProjectType[] = [];

    Array.from({ length: diff }).forEach((_, index) => {
      const existingIndex = index % size;

      if (!data[existingIndex]) {
        return;
      }

      const item = data[existingIndex]!;
      newItems.push(item);
    });

    projects.data = [...data, ...newItems];
  }

  return (
    <HeroParallax
      heading={heading}
      products={projects.data.map((project) => {
        const { title, image, summary, slug } = project.attributes;
        return {
          title: title,
          link: slug ? `/work/${slug}` : "#",
          thumbnail: image.data,
          summary,
        };
      })}
    />
  );
};

export { Projects };
