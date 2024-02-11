import { Container } from "@components/container";
import Profile, { ProfileProps } from "../components/profile";
import Dan from "../assets/dan.webp";

const Profiles: ProfileProps[] = [
  {
    name: "Dan Duehren",
    position: "Shopify Developer",
    description: `<p>
    We craft immersive online shopping experiences that leave lasting
    impressions. With a team of passionate developers, creative designers,
    and strategic thinkers, we are committed to pushing the boundaries of
    e-commerce excellence.
  </p>

  <p>
    We are committed to empowering businesses, small and large, to thrive in
    the digital age. Whether you're a startup with big dreams or an
    established brand seeking to refresh your online presence, [Agency Name]
    is here to make your e-commerce journey seamless, exciting, and
    profitable.
  </p>`,
    picture: Dan,
  },
];

export type TeamProps = {
  container?: boolean;
};

const Team: React.FC<TeamProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <ul className="space-y-14 lg:space-y-8">
        {[...Profiles, ...Profiles, ...Profiles].map((profile, index) => (
          <li key={index}>
            <Profile {...profile} reverse={(index + 1) % 2 === 0} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Team;
