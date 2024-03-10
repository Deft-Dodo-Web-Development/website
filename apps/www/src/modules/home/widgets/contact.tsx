import { Container } from "@components/container";
import { Layout } from "@components/layout";
import { Heading } from "@components/heading";
import ContactForm from "@/modules/contact/widgets/contact-form";

export type ContactProps = {
    with_container: boolean;
    heading: {
        title: string;
        sub_title: string;
    };
    description: string;
};

const classes =
    "md:text-[48px] md:leading-[48px]";

const Contact: React.FC<ContactProps> = ({ with_container, heading, description }) => {
    return (
        <Container enabled={with_container}>
            <Layout className="my-10 md:my-14 lg:my-16">
                {heading || description ? (
                    <div className="w-full">
                        {heading ? (
                            <Heading
                                variant="primary"
                                subHeading={heading.sub_title || ""}
                                size="md"
                                alignment="start"
                                textTransform="uppercase"
                                className={classes}
                            >
                                <h2>{heading.title}</h2>
                            </Heading>
                        ) : null}

                        {description ? (
                            <p className="text-lg text-white mt-3 lg:max-w-[528px]">{description}</p>
                        ) : null}
                    </div>
                ) : null}
                <ContactForm />
            </Layout>
        </Container>
    );
};

export default Contact;