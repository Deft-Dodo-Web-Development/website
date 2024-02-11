import { Container } from "@components/container";

import project1 from "../assets/project-1.webp";
import project2 from "../assets/project-2.webp";
import project3 from "../assets/project-3.webp";
import project4 from "../assets/project-4.webp";
import { ProjectScrollCarousel } from "../components/projects-carousel";

export type ProjectsProps = {
  container?: boolean;
};

const cards = [
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
];

const Projects: React.FC<ProjectsProps> = ({ container }) => {
  return (
    <Container enabled={container} asChild>
      <ProjectScrollCarousel cards={cards} />
    </Container>
  );
};

export { Projects };
