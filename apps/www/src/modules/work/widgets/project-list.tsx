import { Container } from "@/modules/common/components/container";
import ProjectCard, { ProjectCardProps } from "../components/project-card";
import project1 from "@assets/project-1.webp";
import project2 from "@assets/project-2.webp";
import project3 from "@assets/project-3.webp";
import project4 from "@assets/project-4.webp";
import project5 from "@assets/project-5.webp";
import project6 from "@assets/project-6.webp";

const Cards: ProjectCardProps[] = [
  {
    url: project1,
    title: "Skyler Blue",
    subtitle: "CRO Audit, Theme Customization",
    id: 1,
  },
  {
    url: project2,
    title: "Lucky Boy Co.",
    subtitle: "Theme Customization, Performance Optimation",
    id: 2,
  },
  {
    url: project3,
    title: "Power Sports Memoribilia",
    subtitle: "Theme Customization, Performance Optimation",
    id: 3,
  },
  {
    url: project4,
    title: "Another Store",
    subtitle: "CRO Audit, Theme Customization",
    id: 4,
  },
  {
    id: 5,
    title: "Just Clean",
    subtitle: "CRO Audit, Theme Customization",
    url: project5,
  },
  {
    id: 6,
    title: "Bottom Rise",
    subtitle: "Theme Customization, Performance Optimation",
    url: project6,
  },
];

export type ProjectListProps = {
  container?: boolean;
};

const ProjectList: React.FC<ProjectListProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2">
        {Cards.map((card) => {
          return (
            <li key={card.id}>
              <ProjectCard {...card} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export { ProjectList };
