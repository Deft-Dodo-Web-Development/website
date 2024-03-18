import { Container } from "@/modules/common/components/container";
import ProjectCard, { ProjectCardProps } from "../components/project-card";

export type ProjectListProps = {
  container?: boolean;
  projects: ProjectCardProps[];
};

const ProjectList: React.FC<ProjectListProps> = ({ container, projects }) => {
  return (
    <Container enabled={container}>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2">
        {projects?.map((project, index) => {
          return (
            <li key={index}>
              <ProjectCard {...project} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export { ProjectList };
