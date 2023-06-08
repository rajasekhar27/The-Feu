// third party packages
import { motion } from "framer-motion";

// import  Components

import GetInTouch from "@/components/GetInTouch";

import CustomerDetails from "@/components/CustomerDetails";

import Layout from "@/components/Layout";
import Seo from "@/components/Seo/seo";

const ContactUsPage = () => {
  return (
    <Layout>
      <Seo
        title={"Contact Us"}
        url={"contactus"}
        description={
          "Contact Us at Feu: Connect with us for reservations, inquiries, or feedback. We value your input and look forward to enhancing your dining experience."
        }
      />
      <GetInTouch />
      <CustomerDetails />
    </Layout>
  );
};

export default ContactUsPage;
