import Image from "next/image";
import browse from "/public/images/step/browse.png";
import earn from "/public/images/step/earn.png";
import invest from "/public/images/step/invest.png";
import {featureList} from "../../constants/index"

const FeatureList = () => {
  return (
    <div className="row">
      {/* {featureList.map((feature, index) => (
        <div key={`feature-${index}`} className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <h4>{feature.title}</h4>
          <p className="neutral-bottom">
            {feature.description}
          </p>
        </div>
      </div>

      ))} */}
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <h4 >Property Listings Database</h4>
          <p className="neutral-bottom">
            Comprehensive listing of properties including homes, apartments, commercial spaces, and land.
            Filter and sort options based on price, location, size, and more.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">          
          <h4 >Virtual Tours</h4>
          <p className="neutral-bottom">
          360-degree virtual property tours.
          Interactive floor plans for a better understanding of the property layout.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          
          <h4>Advanced Search Algorithms</h4>
          <p className="neutral-bottom">
            AI-driven search recommendations based on user preferences and behavior.
            Geo-location based property suggestions.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          
          <h4>Integrated Mortgage Calculator</h4>
          <p className="neutral-bottom">
          Estimate monthly mortgage payments based on property price, down payment, interest rate, and loan tenure.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          
          <h4>Direct Messaging with Agents</h4>
          <p className="neutral-bottom">
            Secure platform to chat and negotiate with real estate agents.
            Schedule property viewings and consultations
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          
          <h4>Convenience</h4>
          <p className="neutral-bottom">
            Browse and shortlist properties from the comfort of your home.
            Save time with intelligent search features and personalized recommendations.
          </p>
        </div>
      </div>

    <hr style={{margin: "20px"}} />
        <div className="col-md-6 col-xl-4">
            <div className="start__single__item">
            
            <h4>Informed Decision Making</h4>
            <p className="neutral-bottom">
                Access to comprehensive data ensures you make well-informed property decisions.
                Understand market trends to buy or sell at the right time.
            </p>
            </div>
        </div>
        <div className="col-md-6 col-xl-4">
            <div className="start__single__item">
            
            <h4>Transparency</h4>
            <p className="neutral-bottom">
                Direct communication with agents and sellers.
                No hidden fees or charges, with clear breakdowns of all transaction costs.
            </p>
            </div>
        </div>
        <div className="col-md-6 col-xl-4">
            <div className="start__single__item">
            
            <h4>Security</h4>
            <p className="neutral-bottom">
                Secure platform with encrypted communications and document storage.
                Trustworthy agents vetted by the platform.
            </p>
            </div>
        </div>
        <div className="col-md-6 col-xl-4">
            <div className="start__single__item">
            
            <h4>Efficiency</h4>
            <p className="neutral-bottom">
                Streamlined processes from property search to final transaction.
                E-signing and digital document management speed up the buying/selling process.
            </p>
            </div>
        </div>
        <div className="col-md-6 col-xl-4">
            <div className="start__single__item">
            
            <h4>Market Analysis Tools</h4>
            <p className="neutral-bottom">
                Real-time data on market trends, price averages, and neighborhood insights.
                Historical data on property values and sales in specific areas.
            </p>
            </div>
        </div>
        <div className="col-md-6 col-xl-4">
            <div className="start__single__item">
            
            <h4>Cost-Effective</h4>
            <p className="neutral-bottom">
                Compare property prices and get the best deals.
                Save on agent fees with platform &apos;s competitive pricing structure.
            </p>
            </div>
        </div>
    </div>
  );
};

export default FeatureList;
