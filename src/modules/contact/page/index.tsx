import { Separator } from "@components/separator";
import ContactHeading from "../widgets/heading";
import ContactLayout from "../widgets/contact-layout";
import FooterSetup from "@/modules/common/utilities/footer-setup";

const ContactPage = () => {
  return (
    <>
      <ContactHeading container />
      <Separator className="my-14" container />
      <ContactLayout container />
      <FooterSetup variant="minimal" />
    </>
  );
};

export default ContactPage;
