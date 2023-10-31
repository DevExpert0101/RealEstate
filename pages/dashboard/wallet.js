import { Footer, Header } from "../../components/dashboard";
import WalletBody from "../../components/dashboard/wallet/WalletBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Wallet = () => {
  return (
    <>
      <Header />

      <WalletBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Wallet;

Wallet.getLayout = function getLayout(page) {
  return <>{page}</>;
};
