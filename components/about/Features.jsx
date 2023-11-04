import FeatureList from "./FeatureList";
import Link from "next/link";

const Features = ({ bg, cls }) => {
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
            Overview of Key Features and Benefits
            </h5>
                
            <p className="neutral-bottom" style={{ textAlign: "left"}}>
              CEETokenized offers a comprehensive database of property listings, enhanced with 360-degree virtual tours and AI-driven search recommendations. 
              Users can effortlessly estimate mortgage payments with an integrated calculator and directly communicate with vetted agents for a transparent experience. 
              The platform provides tools for real-time market analysis, ensuring informed decision-making. Additionally, digital document management and e-signing capabilities 
              streamline the transaction process, making it efficient and secure. 
              With CEETokenized, users not only enjoy the convenience of browsing properties from home but also benefit from cost-effective deals and a clear breakdown of all transaction costs.
            </p>

            
          </div>

          

          <FeatureList />
        </div>
      </div>
      
    </section>
  );
};

export default Features;
