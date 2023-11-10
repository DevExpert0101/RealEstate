import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import CountdownDisplay from "../common/CountdownDisplay";
import home from "/public/images/home.png";

const ProductCardHorizontal = ({ singleItem }) => {
  const {
    city,
    location,
    totalInvest,
    investAmount,
    investPer,
    goal,
    img,
    annualReturn,
    max_term,
    type,
    distribution,
    security,
    detailsLink,
  } = singleItem;

  const SetThroughEdit = () => {
    localStorage.setItem("throughEdit", "false");
  }

  return (
    <div className="row d-flex align-items-center">
      <div className="col-lg-5">
        <div className="property__item__image column__space--secondary">
          <div className="img__effect">
            <Link href="/property/{id}">
              <Image src={img} alt="los" onClick={SetThroughEdit} />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="property__item__content">
          <div className="item__head">
            <div className="item__head__left">
              <h4>{city}</h4>
              <p>
                <i>
                  <FaMapMarkerAlt />
                </i>{" "}
                {location}
              </p>
            </div>
            <div className="item__head__right">
              <div className="countdown__wrapper">
                <p className="secondary">
                  <i>
                    <FaClock />
                  </i>{" "}
                  Left to invest
                </p>

                <Countdown
                  date={Date.now() + 10000000000}
                  renderer={CountdownDisplay}
                />
              </div>
            </div>
          </div>
          <div className="progress__type progress__type--two">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="project__info">
              <p className="project__has">
                <span className="project__has__investors">
                  {totalInvest} Investors
                </span>{" "}
                |{" "}
                <span className="project__has__investors__amount">
                  ${investAmount}
                </span>{" "}
                <span className="project__has__investors__percent">
                  ({investPer}%)
                </span>
              </p>
              <p className="project__goal">${goal} Goal</p>
            </div>
          </div>
          <div className="item__info">
            <div className="item__info__single">
              <h6>Project Description</h6>
            </div>
              <h6>
                {/* {annualReturn.regular}% + {annualReturn.bonus}% */}
                The “CEETokenized“ team is introducing a new buy to let
                investment opportunity: A19, Vilnius I. The invest ment
                offer consists of administrative premises, which are
                currently being converted into studio apartments/lofts. In
                this way, the aim is to increase the rental income of this
                real estate project
              </h6>
            
            {/* <div className="item__info__single">
              <p>Maximum Term</p>
              <h6>{max_term} Months</h6>
            </div>
            <div className="item__info__single">
              <p>Property Type</p>
              <h6>{type}</h6>
            </div>
            <div className="item__info__single">
              <p>Distribution</p>
              <h6>{distribution}</h6>
            </div> */}
          </div>
          <div className="item__footer">
            <div className="item__security">
              <div className="icon__box">
                <Image src={home} alt="home" />
              </div>
              <div className="item__security__content">
                <p className="secondary">Security</p>
                <h6>Asset-Backed Stablecoin</h6>
              </div>
            </div>
            <div className="item__cta__group">
              {/* <Link
                href={singleItem.investLink}
                className="button button--effect"
              >
                Invest Now
              </Link> */}
              <Link
                href={singleItem.detailsLink}
                singleItem = {singleItem}
                className="button  button--effect"
                onClick={SetThroughEdit}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
