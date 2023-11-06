import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { EarningChart, CollapseSidebar, LeftSideMenu } from "../index";
import explore from "/public/images/icons/explore.png";
import wallet from "/public/images/icons/wallet.png";
import table_img from "/public/images/table-img.png";
import paymentData from "../../../data/paymentData";

const EarningsBody = () => {
  const [activSidebar, setActivSidebar] = useState(false);
  const [swItem, setSwItem] = useState(false);

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
                    <h5>Income Pools</h5>
                    <div>
                      <Link href="/deshbord">Home</Link>
                      <i>
                        <BsArrowRight />
                      </i>
                      <Link href="#">Income Pools</Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="investment-table">
                        <div className="intro">
                          <h5>My Earnings</h5>
                        </div>
                        <div className="intro pb-1">
                          <h5>Total Earnings</h5>
                          <h5>My Income Pool</h5>
                        </div>
                        <div className="intro pt-1" >
                          <h4 className="text-success"> 758 EURO</h4>
                          <h4>CRZ-01-ZAG</h4>
                        </div>
                        <div style={{ width: "75%" }}>
                          <EarningChart />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-12">
                      <div className="investment-table">
                        <div className="intro">
                          <h5>Payment History</h5>
                          <button
                            // className={`account-info__btn button button--effect ${
                            //   swItem === true && "account-info__btn-active"
                            // }`}
                            className="button button-effect"
                            onClick={() => setSwItem(!swItem)}
                          >
                            Upcoming Earnings
                          </button>
                        </div>
                        <div className="table-wrapper table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Property Name</th>
                                <th>Amount(€)</th>
                                <th>Income Pool</th>
                                <th>Date</th>
                                <th>Reference Number</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentData.map((item, i) => (
                                <tr key={i}>
                                  <td className="text-truncate col-1">
                                    {item.name}
                                  </td>
                                  <td className="text-truncate col-1">
                                    {item.amount}
                                  </td>
                                  <td className="text-truncate col-1">
                                    {item.incomepool}
                                  </td>
                                  <td className="text-truncate col-1">
                                    {item.date}
                                  </td>
                                  <td className="text-truncate col-1">
                                    {item.reference}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    {swItem === true && <div className="col-lg-12">
                      <div className="investment-table">
                        <div className="intro">
                          <h5>Upcoming Earnings</h5>
                        </div>
                        <div className="table-wrapper table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Property Name</th>
                                <th>Amount(€)</th>
                                <th>Income Pool</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentData.map((item, i) => (
                                <tr key={i}>
                                  <td className="text-truncate col-1">
                                    {item.name}
                                  </td>
                                  <td className="text-truncate col-1">
                                    {item.amount}
                                  </td>
                                  <td className="text-truncate col-1">
                                    {item.incomepool}
                                  </td>
                                  <td className="text-truncate col-1">
                                    {item.date}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> }
                    
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

export default EarningsBody;
