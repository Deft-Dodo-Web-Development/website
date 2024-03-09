import { Container } from "@components/container";

import { ProjectScrollCarousel } from "../components/projects-carousel";
import { Components } from "@/modules/common/types/components";

export type ProjectsProps = Components.Projects;

const Projects: React.FC<ProjectsProps> = ({
  with_container: container,
  projects,
  title,
}) => {
  return (
    <Container enabled={container} asChild>
      <ProjectScrollCarousel cards={projects.data} title={title} />
    </Container>
  );
};

export { Projects };
