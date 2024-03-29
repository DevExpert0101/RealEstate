import { Footer, Header } from "../../components/dashboard";
import ProfileBody from "../../components/dashboard/profile/profileBody";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Profile = () => {
  return (
    <>
      <Header />

      <ProfileBody />

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <>{page}</>;
};
