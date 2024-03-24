import { Container } from "@components/container";
import Profile from "../components/profile";
import { Components } from "@/modules/common/types/components";
import { Heading } from "@components/heading";

export type TeamProps = Components.Team;

const Team: React.FC<TeamProps> = ({
  with_container,
  members,
  heading
}) => {

  const HeadingTag = heading.hierarchy || "h2";

  return (
    <Container enabled={with_container}>
      {heading && (
        <div className="mb-12 lg:mb-20">
          <Heading
            subHeading={heading.sub_title || ""}
            alignment="middle"
            size="lg"
            variant="primary"
            textTransform="uppercase"
          >
            <HeadingTag>{heading.title}</HeadingTag>
          </Heading>
        </div>
      )}
      <ul className="space-y-14 lg:space-y-8">
        {members?.data.map((member, index) => (
          <li key={index}>
            <Profile {...member} reverse={(index + 1) % 2 === 0} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Team;
