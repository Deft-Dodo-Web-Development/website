import { Container } from "@components/container";

export type ContactHeadingProps = {
  container?: boolean;
};

const ContactHeading: React.FC<ContactHeadingProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <div className="pt-14">
        <h2 className="text-3xl md:text-4xl lg:text-[72px] lg:leading-[72px] uppercase text-pretty lg:max-w-[990px]">
          Ready to elevate your e-commerce experience?
        </h2>
      </div>
    </Container>
  );
};

export default ContactHeading;
