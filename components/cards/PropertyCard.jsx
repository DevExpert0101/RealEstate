import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import CountdownDisplay from "../common/CountdownDisplay";
import home from "/public/images/home.png";

const PropertyCard = ({ data, colActiv }) => {
  // const {
  //   id,
  //   city,
  //   location,
  //   totalInvest,
  //   investAmount,
  //   investPer,
  //   goal,
  //   img,
  //   annualReturn,
  //   max_term,
  //   type,
  //   distribution,
  //   security,
  //   investLink,
  //   detailsLink,
  // } = data;;
  const SetThroughEdit = () => {
    localStorage.setItem("throughEdit", "false");
  }
  return (
    <div
      className={`property__grid__area__wrapper__inner ${
        colActiv ? " " : "col-xl-4 col-md-6"
      }`}
    >
      <div
        className={`property__list__wrapper ${
          colActiv ? " " : "property__grid"
        }`}
      >
        <div className="row d-flex align-items-center">
          <div
            className={`property__grid__area__wrapper__inner__two ${
              colActiv ? "col-xl-5" : " "
            }`}
          >
            <div className="property__item__image column__space--secondary">
              <div className="img__effect">
                <Link href={'/property/' + data.id} >
                  <Image src={data.img} alt="los" style={{height: '291px'}}/>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`property__grid__area__wrapper__inner__three ${
              colActiv ? "col-xl-7" : ""
            }`}
          >
            <div className="property__item__content">
              <div className="item__head">
                <div className="item__head__left d-flex flex-column justify-content-center "  style={{ height: "160px"}}>
                  <h4>{data.city}</h4>
                  <p>
                    <i>
                      <FaMapMarkerAlt />
                    </i>{" "}
                    {data.location}
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
                      {data.totalInvest} Investors
                    </span>{" "}
                    |{" "}
                    <span className="project__has__investors__amount">
                      $ {data.investAmount}
                    </span>{" "}
                    <span className="project__has__investors__percent">
                      ({data.investPer}%)
                    </span>
                  </p>
                  <p className="project__goal">${data.goal} Goal</p>
                </div>
              </div>
              <div className="item__info">
                <div className="item__info__single">
                  <p>Size</p>
                  <h6>
                    {/* {annualReturn.regular}% + {annualReturn.bonus}% */}
                    1, 500 sq ft
                  </h6>
                </div>
                <div className="item__info__single">
                  <p>Maximum Term</p>
                  <h6>{data.max_term} Months</h6>
                </div>
                <div className="item__info__single">
                  <p>Property Type</p>
                  <h6>{data.type}</h6>
                </div>
                <div className="item__info__single">
                  <p>Distribution</p>
                  <h6>{data.type}</h6>
                </div>
              </div>
              <div className="item__footer">
                <div className="item__security">
                  <div className="icon__box">
                    {/* <Image src={''} alt="Security" /> */}
                  </div>
                  <div className="item__security__content">
                    <p className="secondary">Security</p>
                    <h6>{data.security} Mortgage</h6>
                  </div>
                </div>
                <div className="item__cta__group">
                  <Link href={data.investLink} className="button button--effect">
                    Invest Now
                  </Link>
                  <Link
                    href={data.detailsLink}
                    className="button button--secondary button--effect"
                  >
                    Details
                  </Link>
                </div>
              </div>
              <div className="invest__cta__wrapper">
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
                <div className="invest__cta">
                  <Link href={data.detailsLink} className="button button--effect" onClick={SetThroughEdit}>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
