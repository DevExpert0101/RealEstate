import StapeList from "../common/StapeList";
import Link from "next/link";

const AboutCEE = ({ bg, cls }) => {
  return (
    <section
      className={`start ${
        // bg-white start--three
        bg ? "start__bg bg__img" : ""
      } section__space__top ${cls}`}
    >
      {/* <section
      className={`start ${
        bg ? "start__bg" : "bg-white start--three"
      } section__space__top bg__img ${cls}`}
    > */}
      <div className="container">
        <div className="start__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">
              We&apos;re changing the way you invest.
            </h5>
            <h2>About CEEtokenized</h2>
            
            <Link href="/about" className="button button--effect mb-2">
                  About US
                </Link>
                
            <p className="neutral-bottom ">
            Our mission at CEEtokenized is to redefine the future of real estate investment in Central Europe. We aim to break down barriers and empower a diverse global community of investors to access, participate, and prosper in the lucrative world of real estate. By leveraging the transformative potential of blockchain technology, we seek to create a seamless, secure, and transparent platform that opens doors to a new era of financial opportunities.
            </p>
          </div>

          {/* Stape list here */}
          <StapeList />          
        </div>
      </div>
      
    </section>
  );
};

export default AboutCEE;
