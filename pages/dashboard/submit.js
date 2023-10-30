import { Footer, Header } from "../../components/dashboard";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import SubmitBody from "../../components/dashboard/submit/SubmitBody";

const Withdraw = () => {
  return (
    <>
      <Header />

      <SubmitBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Withdraw;

Withdraw.getLayout = function getLayout(page) {
  return <>{page}</>;
};
