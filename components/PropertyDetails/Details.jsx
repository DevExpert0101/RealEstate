import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { FaClock, FaImages, FaMapMarkerAlt } from "react-icons/fa";
import faqData from "../../data/faqData";
import KeyUpdatesCard from "../cards/KeyUpdatesCard";
import ReportsCard from "../cards/ReportsCard";
import TermSingleCard from "../cards/TermSingleCard";
import CountdownDisplay from "../common/CountdownDisplay";
import SingleFaq from "../common/SingleFaq";
import Social from "../social/Social";
import Funding from "./Funding";
import InvestForm from "./InvestForm";
import check from "/public/images/check.png";
import charge from "/public/images/icons/charge.png";
import investor from "/public/images/icons/investor.png";
import loan from "/public/images/icons/loan.png";
import project from "/public/images/icons/project.png";
import reinvest from "/public/images/icons/reinvest.png";
import owner from "/public/images/owner.jpg";
import revenue from "/public/images/icons/revenue.png";

import { useEffect, useState } from "react";

const NewInvestCard = () => {
  return (
    <div className="col-lg-5">
      <div className="p__details__sidebar">
        <div className="intro">
          <div className="countdown__wrapper">
            <p className="secondary">
              <FaClock /> Left to invest
            </p>
            <Countdown
              date={Date.now() + 10000000000}
              renderer={CountdownDisplay}
            />
          </div>
          <h5>
            Available for funding: <span>CEE 5,000,000</span>
          </h5>

          <Funding />
        </div>
        <div className="group brin">
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6 className="">Token Name</h6>
            <p>CEE Token</p>
          </div>
          <div className="d-flex flex-fill justify-content-between m-1 align-items-center">
            <h6>Token Type</h6>
            <p>ERC3643-Security</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Issuer</h6>
            <p>Organization</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Asset-Backed</h6>
            <p>Fraction of ownership</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Offering Size</h6>
            <div className="w-50">
              <input
                type="text"
                placeholder="2,500,000"
                className="d-flex bg-light text-black rounded-pill text-end"
              ></input>
            </div>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Token Price</h6>
            <div className="w-50">
              <input
                type="text"
                placeholder="0,9"
                className="d-flex bg-light text-black rounded-pill text-end"
              ></input>
            </div>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Discount</h6>
            <p>10%</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Start Date</h6>
            <p>01/01/2024</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>End Date</h6>
            <p>01/31/2024</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Divident Payment</h6>
            <p>Monthly</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Income Pool</h6>
            <p>CRZ-01-ZAG</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Lock-up Period</h6>
            <p>Not Available</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Whitelist</h6>
            <p>Yes</p>
          </div>
          <div className="d-flex justify-content-between m-1 align-items-center">
            <h6>Legal</h6>
            <p>Prospectus, KYC, Disclamier</p>
          </div>

          <div className="align-items-center d-flex justify-content-center mt-4">
            <button className="button button-effect">Start</button>
          </div>
        </div>
        <div className="group brini">
          <h5 className="neutral-top">Investment Overview</h5>
          <hr />
          <p>
            Park Cihelni, strategically located in Ostrava, Czech Republic,
            stands as a promising investment opportunity within the burgeoning
            real estate market of the region. This modern residential complex
            spans across 21,000 square meters and comprises 262 residential
            flats, divided into five phases. Ostrava, known for its economic
            growth and development initiatives, presents an attractive
            investment landscape with a thriving real estate market. Park
            Cihelni aligns with the growing demand for contemporary living
            spaces and offers an ideal setting for potential investors seeking
            stable returns within a vibrant and evolving community.
          </p>
          <p>
            <h6>
              Investment Appeal:<br></br>
            </h6>
          
            Investing in Park Cihelni represents an opportunity to partake in
            the growth of Ostrava&#39;s real estate sector. The property&#39;s
            modern design, combined with its strategic location and diverse
            housing options, aims to cater to the evolving demands of residents
            seeking quality homes. With an emphasis on community living and
            modern amenities, Park Cihelni aims to deliver steady returns
            supported by the upward trajectory of the Ostrava property market.
            This investment avenue is tailored for individuals seeking a
            foothold in a promising real estate venture poised for
            growth and stability.
          </p>
          <Link href="/blog">Read More</Link>
        </div>
        <div className="group birinit">
          <h6>Share via Social </h6>
          <div className="social text-start">
            <Social />
          </div>
        </div>
        <div className="group alt__brin">
          <KeyUpdatesCard />
        </div>
        <div className="group alt__brin__last">
          <ReportsCard />
        </div>
      </div>
    </div>
  );
};

const OldInvestCard = () => {
  return (
    <div className="col-lg-5">
      <div className="p__details__sidebar">
        <div className="intro">
          <div className="countdown__wrapper">
            <p className="secondary">
              <FaClock /> Left to invest
            </p>
            <Countdown
              date={Date.now() + 10000000000}
              renderer={CountdownDisplay}
            />
          </div>
          <h5>
            Available for funding: <span>CEE 500,000</span>
          </h5>
          {/* funding  */}
          <Funding />
        </div>
        <div className="group brin">
          <h5 className="neutral-top">Occupancy</h5>
          <div className="acus__btns">
            {[0, 20, 40, 60, 80, 100].map((item, i) => (
              <Link
                key={item}
                href="/"
                className="acus__btn acus__btn__active"
                style={{ backgroundColor: item === 100 ? "#99ff99" : "" }}
              >
                {item}%
              </Link>
            ))}
          </div>
          <div className="acus__content">
            {/* Invest Form  */}
            <InvestForm />
          </div>
          <p className="text-center neutral-bottom">
            <Link href="/contact-us">Request a free callback</Link>
          </p>
        </div>
        <div className="group brini">
          <h5 className="neutral-top">Investment Overview</h5>
          <hr />
          <p>
            Park Cihelni, strategically located in Ostrava, Czech Republic,
            stands as a promising investment opportunity within the burgeoning
            real estate market of the region. This modern residential complex
            spans across 21,000 square meters and comprises 262 residential
            flats, divided into five phases. Ostrava, known for its economic
            growth and development initiatives, presents an attractive
            investment landscape with a thriving real estate market. Park
            Cihelni aligns with the growing demand for contemporary living
            spaces and offers an ideal setting for potential investors seeking
            stable returns within a vibrant and evolving community.
          </p>
          <div>
            <h6>
              Investment Appeal:<br></br>
            </h6>
            <p>
            Investing in Park Cihelni represents an opportunity to partake in
            the growth of Ostrava&#39;s real estate sector. The property&#39;s
            modern design, combined with its strategic location and diverse
            housing options, aims to cater to the evolving demands of residents
            seeking quality homes. With an emphasis on community living and
            modern amenities, Park Cihelni aims to deliver steady returns
            supported by the upward trajectory of the Ostrava property market.
            This investment avenue is tailored for individuals seeking a
            foothold in a promising real estate venture poised for
            growth and stability.
            </p>
          </div>
          <Link href="/blog">Read More</Link>
        </div>
        <div className="group birinit">
          <h6>Share via Social </h6>
          <div className="social text-start">
            {/* social icon */}
            <Social />
          </div>
        </div>
        <div className="group alt__brin">
          {/* key update card */}
          <KeyUpdatesCard />
        </div>
        <div className="group alt__brin__last">
          {/* reaport card */}
          <ReportsCard />
        </div>
      </div>
    </div>
  );
};

const Details = ({ data }) => {
  const [role, setRole] = useState("1");
  const [throughEdit, setThroughEdit] = useState(false);
  //const [item, setItem] = useState({});
  //const [reasons, setReasons] = useState([]);
  useEffect(() => {
    //get item
    // let value;
    // value = JSON.parse(localStorage.getItem("item"));
    // setItem(JSON.parse(localStorage.getItem("item")));

    // //setReasons(value.reasons);

    // value = localStorage.getItem("role") || "";

    // setRole(value);
    // value = localStorage.getItem("throughEdit");
    // if (value == null) value = false;
    // setThroughEdit(value);

  }, []);

  return (
    <>
      <div className="property__details__banner property__details__bg bg__img clear__top"></div>
      <section className="p__details faq section__space__bottom">
        <div className="container">
          <div className="p__details__area">
            <div className="row">
              <div className="col-lg-7">
                <div className="p__details__content">
                  <Link
                    href="/property/{id}"
                    className="button button--effect button--secondary"
                  >
                    <FaImages />
                    Browse Gallery
                  </Link>
                  <div
                    className="intro flex-sm-row flex-column"
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div>
                      <h4>{data.city}</h4>
                      <p className="d-flex align-items-center gap-1">
                        <FaMapMarkerAlt />
                        {data.city}
                      </p>
                    </div>

                    <Link
                      href="#"
                      className="button button-effect"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "350px",
                      }}
                    >
                      <h6 style={{ color: "white" }}>Allocated CEE Tokens</h6>
                      <p style={{ color: "white" }}>1,500,000</p>
                    </Link>
                  </div>

                  <div className="group__one">
                    <h4>Project Description</h4>
                    <span>{data.description ? data.description : 
                    (`The "CEETokenized" team is introducing a new buy to let
                      investment opportunity: A19, Vilnius I. The invest ment
                      offer consists of administrative premises, which are
                      currently being converted into studio apartments/lofts. In
                      this way, the aim is to increase the rental income of this
                      real estate project.`)}</span>
                  </div>
                  <div className="group__two">
                    <h5>Reasons to invest in the project:</h5>
                    <ul>
                      {data.reasons ? data.reasons.map((item, i) => (
                        <li key={i} className="align-items-start">
                          <Image
                            src={check}
                            style={{ marginTop: "8px" }}
                            alt="Check"
                          />
                          {item}
                        </li>
                      )) : 
                      [
                        "Lofts in an attractive area - in the center of Vilnius;",
                        "ixed, attractive annual rental income;",
                        "The fixed interest is indexed to inflation;",
                        "The fixed interest is indexed to inflation;",
                        "Variable capital gains;",
                        "The premises were appraised by an independent valuer at 347 000 EUR",
                        "The project owner is an experienced real estate administrator.",
                      ].map((item, i) => (
                        <li key={i} className="align-items-start">
                          <Image
                            src={check}
                            style={{ marginTop: "8px" }}
                            alt="Check"
                          />
                          {item}
                        </li>))}
                    </ul>
                  </div>
                  <div className="terms">
                    <h5>Financial terms of the investment:</h5>
                    <div className="terms__wrapper">
                      <TermSingleCard img={loan} p="Token Price" heading="€1" />
                      <TermSingleCard
                        img={revenue}
                        p="Discount"
                        heading="10%"
                      />
                      <TermSingleCard
                        img={project}
                        p="Minimum Investment"
                        heading="€1,000"
                      />
                    </div>
                  </div>
                  <div className="group__two">
                    <h5>When investing:</h5>
                    <ul>
                      <li>
                        <Image src={check} alt="Check" /> Up to 1000 € - the
                        annual return is 0.72%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 5000 € – 14999 € - the
                        annual return is 7.2%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 15000 € – 29999 € -
                        the annual return is 13.5%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 30000 € – 49999 € -
                        the annual return is 21.6%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 50000 € and more - the
                        annual return is 27%.
                      </li>
                    </ul>
                  </div>
                  <div className="terms">
                    <h5>The capital growth distribution:</h5>
                    <div className="terms__wrapper">
                      <TermSingleCard
                        img={investor}
                        p="Investors"
                        heading="90%"
                      />
                      <TermSingleCard
                        img={project}
                        p="Properly Management Fee"
                        heading="10%"
                      />
                      <TermSingleCard
                        img={reinvest}
                        p="Yearly Revenue Pool"
                        heading="€220,199"
                      />
                    </div>
                  </div>
                  <div className="owner">
                    <Image src={owner} alt="owner" />
                    <div>
                      <h5>Project Owner</h5>
                      <p>
                        MB „Rego Properties“ - is a company serving as a special
                        vehicle for CEETokenized investments. The CEO of the
                        company - Andrius Rimdeika is a former investment
                        banker, who has worked in investment firms such as
                        ”Morgan Stanley” and “Prime investment”.
                      </p>
                    </div>
                  </div>
                  <div className="faq__group">
                    <h5 className="atr">Frequently asked questions</h5>
                    <div className="accordion" id="accordionExampleFund">
                      {faqData.map((item, i) => (
                        <SingleFaq key={item.id} i={i} item={item} />
                      ))}
                    </div>
                  </div>
                  <div className="group__one">
                    <h4>Key investment risks:</h4>
                    <p>
                      This opportunity may be subject to fluctuations influenced
                      by changes in the local real estate market, economic
                      conditions, and demand-supply dynamics. These fluctuations
                      could impact property valuations and potential resale
                      values. Unforeseen economic downturns, changes in interest
                      rates, or financial crises could adversely affect the
                      property&#39;s performance, rental yields, and overall
                      profitability. Vacancy rates or unexpected tenant turnover
                      could result in income disruptions, impacting rental
                      revenues and, consequently, dividend distributions to
                      investors. Unexpected maintenance or repair expenses,
                      higher operational costs, or capital expenditures may
                      affect the property&#39;s net income, potentially reducing
                      the dividends distributed to investors. Investors should
                      carefully assess these risks, conduct thorough due
                      diligence, consider their risk tolerance, and seek
                      professional advice before making investment decisions in
                      Park Cihelni or any real estate-backed assets.
                    </p>
                    <div className="map__wrapper">
                      <iframe
                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29121.557129272667!2d18.22578674304041!3d49.823546497482475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1700168021163!5m2!1sen!2sru"
                        width="746"
                        height="312"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              {/* <NewInvestCard /> */}
              {role == "investor" && throughEdit == "true" ? (
                <NewInvestCard />
              ) : (
                <OldInvestCard />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
