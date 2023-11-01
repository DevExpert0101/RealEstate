import { Footer, Header } from "../../components/dashboard";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import AssesmentBody from "../../components/dashboard/assesment/AssesmentBody";

const Assesment = () => {
  return (
    <>
      <Header />

      <AssesmentBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Assesment;

Assesment.getLayout = function getLayout(page) {
  return <>{page}</>;
};
