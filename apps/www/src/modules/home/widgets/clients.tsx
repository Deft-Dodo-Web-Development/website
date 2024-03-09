import { cn } from "@/lib/utils";
import { Container } from "@components/container";

import ClientsCarousel, { ImageType } from "../components/clients-carousel";

export type ClientsProps = {
  className?: string;
  with_container?: boolean;
  list: ImageType[];
};

const Clients: React.FC<ClientsProps> = (props) => {
  const { with_container, list, className, ..._props } = props;

  return (
    <Container enabled={with_container} asChild>
      <section className={cn("", className)} {..._props}>
        <h2 className="text-[16px] text-center uppercase text-primary mb-8">
          Clients
        </h2>
        <ClientsCarousel images={list} />
      </section>
    </Container>
  );
};

export default Clients;
