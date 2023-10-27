import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  Billing,
  CollapseSidebar,
  General,
  InvestmentHistory,
  LeftSideMenu,
  PersonalInformation,
  Security,
} from "../index";
import PorfolioSummary from "./PortfolioSummary";

const ProfileBody = () => {
  const [tabItem, setTabItem] = useState("general");
  const [activSidebar, setActivSidebar] = useState(false);
  return (
    <div className="dashboard section__space__bottom">
      <div className="container">
        <div className="dashboard__area">
          <div className="row">
            {/* @TODO: left sidebar */}
            <LeftSideMenu
              activSidebar={activSidebar}
              setActivSidebar={setActivSidebar}
            />

            <div className="col-xxl-9">
              <div className="main__content">
                {/* @TODO: Collapse Sidebar */}
                <CollapseSidebar setActivSidebar={setActivSidebar} />

                <div className="main__content-dashboard">
                  <div className="breadcrumb-dashboard">
                    <h5>Profile</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Profile</Link>
                    </div>
                  </div>
                  <div className="account-info">
                    <div className="account-info__btn-wrapper">
                      {[
                        ["Personal Information", "personalinformation"],
                        ["Portfolio Summary", "portfoliosummary"],
                        ["Investment History", "investmenthistory"],
                      ].map(([value, slag]) => (
                        <button
                          key={slag}
                          className={`account-info__btn button button--effect ${
                            tabItem === slag && "account-info__btn-active"
                          }`}
                          onClick={() => setTabItem(slag)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="account-content_wrapper">
                      {tabItem == "personalinformation" && <PersonalInformation />}
                      {tabItem == "portfoliosummary" && <PorfolioSummary />}
                      {tabItem == "investmenthistory" && <InvestmentHistory />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
