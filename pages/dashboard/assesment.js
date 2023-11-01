import { Footer, Header } from "../../components/dashboard";
import InecomeBody from "../../components/dashboard/income/IncomeBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Assesment = () => {
  return (
    <>
      <Header />

      <InecomeBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Assesment;

Assesment.getLayout = function getLayout(page) {
  return <>{page}</>;
};
