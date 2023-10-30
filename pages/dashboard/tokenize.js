import { useEffect } from "react";
import { Footer, Header } from "../../components/dashboard";
import TokenizeBody from "../../components/dashboard/tokenize/TokenizeBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Tokenize = () => {
  return (
    <>
      <Header />

      <TokenizeBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Tokenize;

Tokenize.getLayout = function getLayout(page) {
  return <>{page}</>;
};
