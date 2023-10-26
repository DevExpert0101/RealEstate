import { Footer, Header } from "../../components/dashboard";
import ProfileBody from "../../components/dashboard/profile/profileBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Account = () => {
  return (
    <>
      <Header />

      <ProfileBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Account;

Account.getLayout = function getLayout(page) {
  return <>{page}</>;
};
