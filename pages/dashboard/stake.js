import { Footer, Header } from "../../components/dashboard";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import StakeBody from "../../components/dashboard/stake/StakeBody";

const Stake = () => {
  return (
    <>
      <Header />

      <StakeBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Stake;

Stake.getLayout = function getLayout(page) {
  return <>{page}</>;
};
