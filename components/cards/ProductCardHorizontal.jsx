"use client"

import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import CountdownDisplay from "../common/CountdownDisplay";
import home from "/public/images/home.png";
import { useRouter } from 'next/router';

//import components
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const ProductCardHorizontal = ({ singleItem }) => {
  
  const router = useRouter();
  
  const {
    id,
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
    description,
  } = singleItem;
  

  const SetThroughEdit = (data) => () => {
    localStorage.setItem("throughEdit", "false");
    localStorage.setItem('item', JSON.stringify(data));
    router.push(singleItem.detailsLink);
  };
  const GoDetailPage = (data) => () => {
    localStorage.setItem('item', JSON.stringify(data));
    router.push(`/property/{id}`);
  }
  return (
    <div className="row d-flex align-items-center">
      <div className="col-lg-5">
        <div className="property__item__image column__space--secondary">
          <div className="img__effect" style={{cursor: 'pointer'}}>
            <Link href={`/property/${id}`}>
              <Image src={img} alt="los" onClick={SetThroughEdit} />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="property__item__content">
          <div className="item__head">
            <div className="item__head__left">
              <h5 style={{ color: "#13216e" }} className="mt-3">{city}</h5>
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
                  €{investAmount}
                </span>{" "}
                <span className="project__has__investors__percent">
                  ({investPer}%)
                </span>
              </p>
              <p className="project__goal">€{goal} Goal</p>
            </div>
          </div>
          <div className="item__info">
            <div className="item__info__single">
              <h6>Project Description</h6>
            </div>
            <SimpleBar style={{width: '100%', height: 130, paddingLeft: 10, paddingRight: 10}}>
              <span>
                {description 
                ? description 
                : 'The “CEETokenized“ team is introducing a new buy to let investment opportunity: A19, Vilnius I. The investment  offer consists of administrative premises, which are currently being converted into studio apartments/lofts. In this way, the aim is to increase the rental income of this real estate project.'
                }
              </span>
            </SimpleBar>
          </div>
          <div className="item__footer">
            <div className="item__security mb-3" >
              <div className="icon__box">
                <Image src={home} alt="home" />
              </div>
              <div className="item__security__content ">
                <p className="secondary ">Security</p>
                <h6>Asset-Backed Stablecoin</h6>
              </div>
            </div>
            <div className="item__cta__group" style={{cursor: 'pointer'}}>
              <button
                // href={singleItem.detailsLink}
                //singleItem={singleItem}
                // style={{paddingTop: '20px!important', paddingBottom: '20px!important' , height: "60px"}}
                className="button  button--effect"
                onClick={SetThroughEdit(singleItem)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCardHorizontal;