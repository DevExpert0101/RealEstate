import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CollapseSidebar, LeftSideMenu } from "../index";
import { FaSearch } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";

const ProgressBar = () => {
  const [progress, setProgress] = useState(14.79);

  useEffect(() => {
    const updateProgress = () => {
      if (progress < 100) {
        setProgress(progress);
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
  }, []);

  return (
    <div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>{progress}%</p>
        </div>
        <div>
          <p>591,7110,3/4,000,000</p>
        </div>
      </div>
    </div>
  );
};

const StakeBody = () => {
  const [activSidebar, setActivSidebar] = useState(false);

  return (
    <>
      <div>
        <div className="dashboard section__space__bottom">
          <div className="container">
            <div className="dashboard__area">
              <div className="row">
                {/* left side menu */}
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
                        <h5>Stake</h5>
                        <div>
                          <Link href="/dashboard">Home</Link>
                          <BsArrowRight />
                          <Link href="#">Stake</Link>
                        </div>
                      </div>

                      <div className="investment-table investment-table-two">
                        <div className="account-info">
                          <div className="account-info__btn-wrapper"></div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  CEE Stake
                                </label>
                                <ProgressBar />
                                <div
                                className="d-flex justify-content-evenly" 
                                >

                                <button
                                    type="submit"
                                    className="button button--effect mt-4"
                                    >
                                    Unstake
                                </button>
                                <button
                                    type="submit"
                                    className="button button--effect mt-4"
                                    >
                                    Redeem
                                </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="account-info"
                          style={{ marginTop: "20px" }}
                        >
                          <div className="account-info__btn-wrapper"></div>
                          <div className="row">
                            
                            <div className="col-sm-4">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Your Stake
                                </label>
                                <p>0 CEEE</p>
                              </div>
                            </div>

                            <div className="col-sm-4">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Your Deposit
                                </label>
                                <p>0 CEEE</p>
                              </div>
                            </div>

                            <div className="col-sm-4">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Your Penalty
                                </label>
                                <p>0%</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="account-info"
                          style={{ marginTop: "20px" }}
                        >
                          <div className="account-info__btn-wrapper"></div>
                          <div className="row">
                            
                            <div className="col-sm-3">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Staking Tokens
                                </label>
                                <p>CEEE</p>
                              </div>
                            </div>

                            <div className="col-sm-3">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Reward Token
                                </label>
                                <p>CEEE</p>
                              </div>
                            </div>

                            <div className="col-sm-3">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Income Pool
                                </label>
                                <p>CRO-01-ZAG</p>
                              </div>
                            </div>

                            <div className="col-sm-3">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Deposit Fee
                                </label>
                                <p>0%</p>
                              </div>
                            </div>

                            <div className="col-sm-3">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Start Date
                                </label>
                                <p>26 Jan, 2022 11:00 AM</p>
                              </div>
                            </div>

                            <div className="col-sm-3">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">End Date</label>
                                <p>26 jan, 2023 11:00 AM</p>
                              </div>
                            </div>

                            <div className="col-sm-3">
                              <div className="input input--secondary">
                                <label htmlFor="saveYearBuilt">
                                  Locking Start Date
                                </label>
                                <p>4,000,000</p>
                              </div>
                            </div>
                            <div style={{ height: "30px" }}></div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="input input--secondary">
                                  <label htmlFor="saveYearBuilt">Deposit</label>
                                  <div className="property__filter">
                                    <div className="container">
                                      <div className="property__filter__area">
                                        <div className="row d-flex align-items-center">
                                          {/* <div className="col-lg-12 col-xl-6"> */}
                                            <div className="property__search__wrapper">
                                              <div className="d-flex gap-3 align-items-center" method="post">
                                                <div className="input flex-1">
                                                  <input
                                                    type="search"
                                                    name="property__search"
                                                    id="propertySearch"
                                                    placeholder="0"
                                                  />
                                                  <i>
                                                    <FaBitcoin />
                                                  </i>
                                                </div>
                                                <button
                                                  type="submit"
                                                  className="button button--effect"
                                                  // style={{ marginTop: "20px" }}
                                                >
                                                  Deposit
                                                </button>
                                              </div>
                                            {/* </div> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakeBody;
