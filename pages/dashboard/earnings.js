import { Footer, Header } from "../../components/dashboard";
import EarningsBody from "../../components/dashboard/earnings/Earnings";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Earnings = () => {
  return (
    <>
      <Header />

      <EarningsBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Earnings;

Earnings.getLayout = function getLayout(page) {
  return <>{page}</>;
};
