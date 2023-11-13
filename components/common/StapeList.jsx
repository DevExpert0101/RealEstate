import Image from "next/image";
import browse from "/public/images/step/browse.png";
import earn from "/public/images/step/earn.png";
import invest from "/public/images/step/invest.png";

const StapeList = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <h4>Reliability</h4>
          <p className="neutral-bottom">
            At CEEtokenized, reliability is fundamental. We operate with
            unwavering transparency and adhere to the highest ethical standards.
            Every transaction on our platform is built on reliability, ensuring
            a secure and straightforward experience for our global community of
            investors.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <h4>Innovation</h4>
          <p className="neutral-bottom">
            As the real estate landscape evolves, so does CEEtokenized.
            Committed to pioneering user-friendly solutions, tools, and
            technologies, we enhance the real estate experience through
            tokenization. Join us on the forefront as we lead the future of
            investment across Central Europe.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          <h4>Customer-Focused Approach</h4>
          <p className="neutral-bottom">
            At CEEtokenized, our customers are at the center of our mission. We
            deeply understand their diverse needs, providing tailored solutions
            that improve their journey in the world of tokenized real estate.
            Your satisfaction drives our commitment to excellence in the global
            real estate marketplace.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          <h4>Collaboration</h4>
          <p className="neutral-bottom">
            We value collaborative efforts by fostering a culture of teamwork,
            we unite diverse perspectives to achieve the best outcomes for our
            global community of investors. Together, we fortify a resilient and
            interconnected tokenized real estate ecosystem in Central Europe.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          <h4>Continuous Learning</h4>
          <p className="neutral-bottom">
            In the dynamic landscape of tokenized real estate, continuous
            learning is integral at CEEtokenized. Recognizing the importance of
            growth and adaptability, we cultivate an environment of ongoing
            learning. Engage with us as we empower our team and users to
            navigate the ever-evolving terrain of Central European real estate
            investments.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          <h4>Sustainable Impact</h4>
          <p className="neutral-bottom">
            Our commitment extends beyond business. We are dedicated to
            promoting sustainable practices in tokenized real estate, ensuring
            that our operations foster positive change in the environment and
            communities we serve. Join us in shaping a sustainable future for
            global real estate investments in Central Europe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StapeList;
