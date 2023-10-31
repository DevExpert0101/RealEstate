import { Footer, Header } from "../../components/dashboard";
import InecomeBody from "../../components/dashboard/income/IncomeBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Income = () => {
  return (
    <>
      <Header />

      <InecomeBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Income;

Income.getLayout = function getLayout(page) {
  return <>{page}</>;
};
