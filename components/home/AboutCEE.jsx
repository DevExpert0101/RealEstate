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
            
            <Link href="/about" className="button button--effect">
                  About US
                </Link>
                
            <p className="neutral-bottom">
              Our mission is to empower individuals to find not just houses, but homes. 
              We aim to revolutionize the real estate industry by providing unparalleled digital experiences, 
              connecting buyers, sellers, and agents in a seamless and transparent manner.
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
