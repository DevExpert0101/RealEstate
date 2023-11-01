import { Footer, Header } from "../../components/dashboard";
import PropertyBody from "../../components/dashboard/property/PropertyBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Property = () => {
  return (
    <>
      <Header />

      <PropertyBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Property;

Property.getLayout = function getLayout(page) {
  return <>{page}</>;
};
