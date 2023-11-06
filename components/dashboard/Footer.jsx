import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import logo from "/public/images/logo.png";
import { FaGlobe, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer dashboard-footer pos__rel over__hi">
      <div className="container">
        <div className="footer__area section__space">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="footer__intro">
                <Link href="/">
                  <Image style={{ width: "50%", height: "50%"}} src={logo} alt="logo" />
                </Link>
                <div className="d-flex align-items-center ">
                  <i className="fa-solid fa-location-dot p-3">
                    <FaGlobe />
                  </i>
                  <p>
                    Divadelní 1088/22, Staré Město,<br></br>110 00 Praha, Czech
                    Republic
                  </p>
                </div>
                <div className="d-flex align-items-center ">
                  <i className="fa-solid fa-location-dot p-3 ">
                    <FaPhone />
                  </i>
                  <p>
                    +420 (602) 186 369
                  </p>
                </div>
                <div className="d-flex align-items-center ">
                  <i className="fa-solid fa-mail p-3">
                    <FaMailBulk />
                  </i>
                  <p>
                    support@ceetokenized.com
                    </p>                    
                </div>

              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/affiliate-program">Affiliate</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Invest</h5>
                <ul>
                  <li>
                    <Link href="/properties">Browse Properties</Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">How it works</Link>
                  </li>
                  <li>
                    <Link href="/loan-application">Loan Application </Link>
                  </li>
                  <li>
                    <Link href="/property-alert">Property Alerts</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/support">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt--two">
                <h5>Insights</h5>
                <ul>
                  <li>
                    <Link href="/support">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/list-your-property">List Your Property</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/loyality-program">Loyality program </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Term & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy">Cookie Policy</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/key-risks">Key Risks</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__credit">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <div className="footer__copyright">
                <p>
                  Copyright &copy; 2023 - CEETOKENIZED.COM - All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="social">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
