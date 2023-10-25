import Faqs from "../components/common/Faqs";
import Ask from "../components/contactUs/Ask";
import Banner from "../components/contactUs/Banner";
import ContactOverview from "../components/contactUs/ContactOverview";
import faqData from "../data/faqData";
import ContactInformation from "../components/contactUs/ContactInformation";

const contactUs = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner />

      {/* Contact Overview start here */}
      <ContactOverview />

      {/* Ask start here */}
      <Ask />

      {/* Faqs start here */}
      {/* <Faqs data={faqData} /> */}

      <ContactInformation />
    </>
  );
};

export default contactUs;
