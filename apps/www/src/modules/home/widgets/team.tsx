import { Container } from "@components/container";
import { Layout } from "@components/layout";
import { Heading } from "@components/heading";
import TeamCard from "@/modules/home/components/team-card";
import { Components } from "@/modules/common/types/components";

type TeamProps = Components.Team;

const Team: React.FC<TeamProps> = ({ with_container, heading, members }) => {
  return (
    <Container enabled={with_container}>
      <Layout className="lg:grid-cols-1 my-10 md:my-14 lg:my-16">
        {heading ? (
          <Heading
            variant="primary"
            subHeading={heading.sub_title || ""}
            size="md"
            alignment="middle"
            textTransform="uppercase"
            className="md:text-[48px] md:leading-[48px]"
          >
            <h2>{heading.title}</h2>
          </Heading>
        ) : null}

        <Layout className="md:grid-cols-3 lg:grid-cols-3">
          {members.data.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </Layout>
      </Layout>
    </Container>
  );
};

export default Team;
