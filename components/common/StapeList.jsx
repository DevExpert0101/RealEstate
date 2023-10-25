import Image from "next/image";
import browse from "/public/images/step/browse.png";
import earn from "/public/images/step/earn.png";
import invest from "/public/images/step/invest.png";

const StapeList = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <h4>Integrity</h4>
          <p className="neutral-bottom">
          We operate with honesty and uphold the highest standards of moral and ethical principles. Every transaction on our platform is built on trust.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">          
          <h4>Innovation</h4>
          <p className="neutral-bottom">
          The world is constantly evolving, and so are we. We&apos;re committed to pioneering new solutions, tools, and technologies that redefine the real estate experience.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          
          <h4>Customer-Centricity</h4>
          <p className="neutral-bottom">
          Our users are at the heart of everything we do. We strive to understand their needs and provide tailored solutions that enhance their journey in the world of real estate.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          
          <h4>Collaboration</h4>
          <p className="neutral-bottom">
            We believe in the power of teamwork. By fostering a culture of collaboration, we bring together diverse perspectives to create the best outcomes for our community.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          
          <h4>Continuous Learning</h4>
          <p className="neutral-bottom">
          In the ever-changing landscape of real estate, we recognize the importance of growth and adaptability. We are committed to fostering an environment of continuous learning, equipping our team and users with the knowledge and resources they need to stay ahead in the industry.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          
          <h4>Sustainability</h4>
          <p className="neutral-bottom">
          Our responsibility extends beyond business. We&apos;re dedicated to promoting sustainable practices, ensuring that our operations have a positive impact on the environment and communities we serve.
          </p>
        </div>
      </div>

    </div>
  );
};

export default StapeList;
