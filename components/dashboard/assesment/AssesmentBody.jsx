import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Chart, CollapseSidebar, LeftSideMenu } from "../index";
import explore from "/public/images/icons/explore.png";
import wallet from "/public/images/icons/wallet.png";
import table_img from "/public/images/table-img.png";

const AssesmentBody = () => {
  const [activSidebar, setActivSidebar] = useState(false);

  return (
    <div className="dashboard section__space__bottom">
      <div className="container">
        <div className="dashboard__area">
          <div className="row">
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
                    <h5>Assesment</h5>
                    <div>
                      <Link href="/deshbord">Home</Link>
                      <i>
                        <BsArrowRight />
                      </i>
                      <Link href="#">Assesment</Link>
                    </div>
                  </div>
                  <div
                    className="investment-table investment-table-two"
                    style={{ marginTop: "30px" }}
                  >
                    <div className="account-info">
                      <div className="row">
                        <div className="col-sm-6">
                          <div
                            className="input input--secondary"
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <input
                              type="number"
                              name="save__incomping_pool"
                              id="saveIncomingPool"
                              required="required"
                              style={{ width: "7vw" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: "5px",
                              }}
                            >
                              <label htmlFor="saveYearBuilt">
                                Estimated Number of CEE Tokens
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div
                            className="input input--secondary"
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <input
                              type="number"
                              name="save__incomping_pool"
                              id="saveIncomingPool"
                              required="required"
                              style={{ width: "7vw" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: "5px",
                              }}
                            >
                              <label htmlFor="saveYearBuilt">Token Value</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div
                            className="input input--secondary"
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <input
                              type="number"
                              name="save__incomping_pool"
                              id="saveIncomingPool"
                              required="required"
                              style={{ width: "7vw" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: "5px",
                              }}
                            >
                              <label htmlFor="saveYearBuilt">
                                Fraction of ownership per token
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div
                            className="input input--secondary"
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <input
                              type="number"
                              name="save__incomping_pool"
                              id="saveIncomingPool"
                              required="required"
                              style={{ width: "7vw" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: "5px",
                              }}
                            >
                              <label htmlFor="saveYearBuilt">Token Type</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div
                            className="input input--secondary"
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <input
                              type="number"
                              name="save__incomping_pool"
                              id="saveIncomingPool"
                              required="required"
                              style={{ width: "7vw" }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: "5px",
                              }}
                            >
                              <label htmlFor="saveYearBuilt">
                                Tokenization Date
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          Select Tokenization Legal Advisor
                        </p>
                        <select
                        //   className="button button--effect"
                          style={{ width: "auto", border: "1px solid", borderRadius: "5px" }}
                        >
                          <option value="last">
                            John Smith - JM & Associates
                          </option>
                          <option value="january">
                            John Smith - JM & Associates
                          </option>
                          <option value="february">
                            John Smith - JM & Associates
                          </option>
                        </select>
                        <p style={{marginRight: "10vw" }}>
                          Estimated Token Cost: $9999
                        </p>
                        <ul
                          style={{
                            marginTop: "2vh",
                            marginLeft: "2vw",
                            listStyleType: "disc",
                          }}
                        >
                          <li>Whitepaper</li>
                          <li>Prospectus</li>
                        </ul>
                        <Link
                          href="/dashboard/assesment"
                          className="button button--effect"
                          style={{
                            marginLeft: "2vw",
                            marginTop: "30px",
                          }}
                        >
                          Submit
                        </Link>
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
  );
};

export default AssesmentBody;
