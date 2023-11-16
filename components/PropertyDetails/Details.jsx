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
            Available for funding: <span>CEE 3,000,000</span>
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
            Purpose of the loan To increase the company&#39;s working capital,
            magna a laoreet convallis, massa sapien tempor arcu, nec euismod
            elit justo in lacus. Maecenas mattis massa lectus, vel tincidunt
            augue porta non.
          </p>
          <p>
            Duis quis orci vehicula, fermentum tortor vitae, imperdiet sem.
            Quisque iaculis eu odio in lobortis. Sed vel ex non erat
            pellentesque lobortis vel vitae diam. Donec gravida eleifend
            pellentesque. Curabitur dictum blandit accumsan.
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
            Available for funding: <span>€134 514</span>
          </h5>
          {/* funding  */}
          <Funding />
        </div>
        <div className="group brin">
          <h5 className="neutral-top">Occupancy</h5>
          <div className="acus__btns">
            {[0, 20, 40, 60, 80, 100].map((item, i) => (
              <Link key={item} href="/" className="acus__btn acus__btn__active">
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
            Purpose of the loan To increase the company&#39;s working capital,
            magna a laoreet convallis, massa sapien tempor arcu, nec euismod
            elit justo in lacus. Maecenas mattis massa lectus, vel tincidunt
            augue porta non.
          </p>
          <p>
            Duis quis orci vehicula, fermentum tortor vitae, imperdiet sem.
            Quisque iaculis eu odio in lobortis. Sed vel ex non erat
            pellentesque lobortis vel vitae diam. Donec gravida eleifend
            pellentesque. Curabitur dictum blandit accumsan.
          </p>
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

const Details = (singleItem) => {
  const [role, setRole] = useState("1");
  const [throughEdit, setThroughEdit] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
      //get item
      setItem(JSON.parse(localStorage.getItem('item')));

      let value;
      value = localStorage.getItem("role") || "";

      setRole(value);
      value = localStorage.getItem("throughEdit");
      if(value == null) value = false;
      setThroughEdit(value);
      console.log(value);

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
                      <h3>{item.city}</h3>
                      <p className="d-flex align-items-center gap-1">
                        <FaMapMarkerAlt />
                        {item.city}
                      </p>
                    </div>

                    <Link
                      href="#"
                      className="button button-effect"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h5 style={{ color: "white" }}>Allocated CEE Tokens</h5>
                      <p style={{ color: "white" }}>1,500,000</p>
                    </Link>
                  </div>

                  <div className="group__one">
                    <h4>Project Description</h4>
                    <span>
                      {item.description}
                    </span>
                  </div>
                  <div className="group__two">
                    <h5>Reasons to invest in the project A19, Vilnius:</h5>
                    <ul>
                      {[
                        "Prime Location situated in the heart of Ostrava, Czech Republic, Park Cihelni enjoys a strategic position within a vibrant urban setting, offering convenience and access to essential amenities.",
                        "Lucrative Investment Opportunity with 262 upscale flats spread across 21,000 square meters, Park Cihelni presents an enticing investment prospect in Central Europe's thriving real estate market.",                        
                        "Thoughtful Design meticulously planned and architecturally impressive, each phase of Park Cihelni features modern and aesthetically pleasing living spaces, crafted for an exceptional residential experience.",                        
                        "Spread across five distinct phases, investors have the opportunity to engage in different stages of this development, enabling diversified investment strategies tailored to their preferences.",                        
                        "Ostrava, known for its economic dynamism, cultural richness, and ongoing development initiatives, positions Park Cihelni as a promising asset with potential for sustained growth and appreciation.",                        
                        "The high-quality living spaces, combined with the city's expanding job opportunities and amenities, assure a strong demand for rentals, offering investors potential recurring income streams.",                        
                        "Beyond financial gains, Park Cihelni offers residents and investors alike a superior quality of life, combining urban convenience with a sophisticated living experience in a thriving metropolitan environmen."
                      ].map((item, i) => (
                        <li key={i} className="align-items-start">
                          <Image src={check} style={{ marginTop: "8px"}}  alt="Check" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="terms">
                    <h5>Financial terms of the investment:</h5>
                    <div className="terms__wrapper">
                      <TermSingleCard
                        img={loan}
                        p="Token Price"
                        heading="€1"
                      />
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
                      <TermSingleCard img={project} p="Properly Management Fee" heading="10%" />
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
                      <h5>The project owner (borrower)</h5>
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
                    This opportunity may be subject to fluctuations influenced by changes in the local real estate market, 
                    economic conditions, and demand-supply dynamics. These fluctuations could impact property valuations and potential resale values.  
                    Unforeseen economic downturns, changes in interest rates, or financial crises could adversely affect the property&#39;s performance, 
                    rental yields, and overall profitability. Vacancy rates or unexpected tenant turnover could result in income disruptions, 
                    impacting rental revenues and, consequently, dividend distributions to investors. Unexpected maintenance or repair expenses, 
                    higher operational costs, or capital expenditures may affect the property&#39;s net income, potentially reducing the dividends 
                    distributed to investors. Investors should carefully assess these risks, conduct thorough due diligence, consider their risk tolerance, 
                    and seek professional advice before making investment decisions in Park Cihelni or any real estate-backed assets.
                    </p>
                    <div className="map__wrapper">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
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
