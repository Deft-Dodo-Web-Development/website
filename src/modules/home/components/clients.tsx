import { cn } from "@/lib/utils";
import { Container } from "@components/container";

import client1 from "../assets/skyler-logo.webp";
import client2 from "../assets/lucky-boy-logo.webp";
import client3 from "../assets/powers-logo.webp";
import ClientsCarousel, { Image } from "./clients-carousel";

const images: Image[] = [
  {
    src: client1,
    width: 85,
    height: 48,
    alt: "Client 1",
  },
  {
    src: client2,
    width: 215,
    height: 48,
    alt: "Client 2",
  },
  {
    src: client3,
    width: 135,
    height: 48,
    alt: "Client 3",
  },
  {
    src: client1,
    width: 85,
    height: 48,
    alt: "Client 4",
  },
  {
    src: client2,
    width: 215,
    height: 48,
    alt: "Client 5",
  },
];

export type ClientsProps = {
  container?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Clients: React.FC<ClientsProps> = ({
  container,
  className,
  ...props
}) => {
  return (
    <Container enabled={container}>
      <section className={cn("", className)} {...props}>
        <h2 className="text-[16px] text-center uppercase text-primary mb-8">
          Clients
        </h2>
      </section>
      <ClientsCarousel images={images} />
    </Container>
  );
};

export default Clients;
