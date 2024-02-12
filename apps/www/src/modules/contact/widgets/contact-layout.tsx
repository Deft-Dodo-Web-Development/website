import { Layout } from "@components/layout";
import ContactForm from "./contact-form";
import { Container } from "@components/container";

export type ContactLayoutProps = {
  container?: boolean;
};

const ContactLayout: React.FC<ContactLayoutProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <Layout>
        <section className="flex flex-col justify-between min-h-40 lg:max-w-[528px]">
          <h3 className="mt-5 text-[16px] text-primary uppercase">
            Let&apos;s Talk
          </h3>
          <p className="text-[18px] text-white-56">
            Whether you&apos;re starting from scratch, looking to revamp your
            existing store, or seeking custom e-commerce solutions, we&apos;ve
            got you covered.
          </p>
        </section>
        <div>
          <ContactForm />
        </div>
      </Layout>
    </Container>
  );
};

export default ContactLayout;
