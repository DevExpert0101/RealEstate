import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import home from "/public/images/home.png";
import { useState } from "react";

const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {show && (
        <div
          style={{
            width: "600px",
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: "5px",
            padding: "5px",
            backgroundColor: "#FFFFCC",
            color: "#C0C0C0",
            borderRadius: "4px",
            fontSize: "12px",
            zIndex: 1000,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

const InvestForm = (singleItem) => {
  console.log(singleItem)
  
  return (
    <form action="#" method="post">
      <div className="input input--secondary">
        <label htmlFor="anNum">Annual return rate:</label>
        <input
          type="number"
          name="an__num"
          id="anNum"
          placeholder={`${singleItem.singleitem.data.annualReturn}%`}
          required="required"
        />
      </div>
      <div className="input input--secondary">
        <label htmlFor="anNumIn">Invest</label>
        <input
          type="number"
          name="an__num_in"
          id="anNumIn"
          placeholder="€ 50,000"
          required="required"
        />
      </div>
      <div className="input input--secondary">
        <label htmlFor="anNumInTwo">Estimeated monthly earnings</label>
        <input
          type="number"
          name="an__num_in_two"
          id="anNumInTwo"
          placeholder={`${singleItem.singleitem.data.monthlyEarning}%`}
          required="required"
        />
      </div>
      <div className="capital">
        <p>Capital Growth Split:</p>
        <h5>
          70%{" "}
          <Tooltip
            text="Capital Growth Split percentage typically refers to the distribution of profits between investors and the property manager or owners, specifically related to the appreciation in the property's value over time. The split percentage determines how the increased value, or capital growth, of the property is shared.

                Here's a general example of how the Capital Growth Split percentage could be calculated:

                Let's assume a scenario where the property appreciates in value over a certain period, say from an initial value of $1,000,000 to a new value of $1,200,000, resulting in a capital growth of $200,000.

                If the agreement stipulates a 70/30 Capital Growth Split, the calculation would be as follows:

                Total Capital Growth: $200,000
                70% for Investors: 0.70 * $200,000 = $140,000
                30% for Property Manager/Owners: 0.30 * $200,000 = $60,000
                Therefore, based on this example, the Capital Growth Split percentage would be 70% for investors and 30% for the property manager or owners."
          >
            <i>
              <FaInfoCircle />
            </i>
          </Tooltip>
        </h5>
      </div>
      <div className="item__security">
        <div className="icon__box">
          <Image src={home} alt="Security" />
        </div>
        <div className="item__security__content">
          <p className="secondary">Security</p>
          <h6>Asset-Backed Stablecoin</h6>
        </div>
      </div>
      <div className="suby">
        <h5>1000</h5>
        <Link
          type="submit"
          className="button button--effect"
          href="/investment/{id}"
        >
          Invest Now
        </Link>
        {/* <button type="submit" className="button button--effect">
          Invest Now
        </button> */}
      </div>
    </form>
  );
};

export default InvestForm;
