import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  Billing,
  CollapseSidebar,
  General,
  LeftSideMenu,
  Security,
} from "../index";
import explore from "/public/images/icons/explore.png";
import wallet from "/public/images/icons/wallet.png";
import table_img from "/public/images/table-img.png";
import WithdrawBody from "../withdraw/WithdrawBody";

const Send = () => {
  return (
    <form action="#" name="save__from" method="post" className="save__form">
      <div className="row">
        <div className="col-sm-4" style={{ alignItems: "center" }} />
        <div className="col-sm-4" style={{ alignItems: "center" }}>
          <div className="input input--secondary">
            <div
              style={{ display: "flex", flexDirection: "row", padding: "5px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: "5px",
                  width: "100px",
                }}
              >
                <p>To</p>
              </div>
              <input
                type="text"
                name="save__first__name"
                id="saveFirstName"
                placeholder="Account ID"
                required="required"
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", padding: "5px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: "5px",
                  width: "100px",
                }}
              >
                <p>Amount</p>
              </div>
              <input
                type="text"
                name="save__first__name"
                id="saveFirstName"
                placeholder="Amount"
                required="required"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <button
                type="submit"
                className="button button--effect"
                style={{ width: "100%" }}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const Receive = () => {
  return (
    <form action="#" name="save__from" method="post" className="save__form">
      <div className="row">
        <div className="col-sm-4" style={{ alignItems: "center" }} />
        <div className="col-sm-4" style={{ alignItems: "center" }}>
          <div className="input input--secondary">
            <div
              style={{ display: "flex", flexDirection: "row", padding: "5px" }}
            >
              <p style={{ width: "100%", textAlign: "center" }}>
                Please connect wallet
              </p>
            </div>

            <div style={{ marginTop: "20px" }}>
              <button
                type="submit"
                className="button button--effect"
                style={{ width: "100%" }}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const Airdrop = () => {
  return (
    <form action="#" name="save__from" method="post" className="save__form">
      <div className="row">
        <div className="col-sm-4" style={{ alignItems: "center" }} />
        <div className="col-sm-4" style={{ alignItems: "center" }}>
          <div className="input input--secondary">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <p style={{ width: "100%", textAlign: "center" }}>
                Airdrop started at Aug 3.
              </p>
              <p style={{ width: "100%", textAlign: "center" }}>
                9995 airdrop remains
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "5px",
              }}
            >
              <p style={{ width: "100%", textAlign: "center" }}>
                Airdrop 4 CEE($20)
              </p>
              <p style={{ width: "100%", textAlign: "center" }}>1CEE = $5</p>
            </div>

            <div style={{ marginTop: "20px" }}>
              <button
                type="submit"
                className="button button--effect"
                style={{ width: "100%" }}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const Withdraw = () => {
    return (
        <div className="withdraw-funds">
                    <div className="withdraw-funds__inner">
                      <h5>Withdraw Funds</h5>
                      <p>
                        Use the form below to withdraw from wallet instantly
                      </p>
                      <form action="#" method="post">
                        <div className="input input--secondary">
                          <label htmlFor="withdrawAmount">Amount</label>
                          <input
                            type="number"
                            name="withdraw_amount"
                            id="withdrawAmount"
                            placeholder="100"
                            required="required"
                          />
                        </div>
                        <div className="regi__type">
                          <label htmlFor="methodSelect">Payment Method</label>
                          <div className="type__select select px-1 px-sm-3">
                            <select
                              className="w-100 h-100 bg-transparent fw-semibold"
                              id="methodSelect"
                            >
                              <option value="method">Payment Method</option>
                              <option value="paypal">Paypal</option>
                              <option value="maestro">Maestro</option>
                              <option value="visa">Visa</option>
                              <option value="express">American Express</option>
                            </select>
                          </div>
                        </div>
                        <button type="submit" className="button button--effect">
                          Withdraw
                        </button>
                      </form>
                    </div>
                  </div>
    )
}

const Swap = () => {
    return (
        <form action="#" name="save__from" method="post" className="save__form">
          <div className="row">
            <div className="col-sm-4" style={{ alignItems: "center" }} />
            <div className="col-sm-4" style={{ alignItems: "center" }}>
              <div className="input input--secondary">
                <div
                  style={{ display: "flex", flexDirection: "row", padding: "5px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginRight: "5px",
                      width: "100px",
                    }}
                  >
                    <p>From</p>
                  </div>
                  <input
                    type="text"
                    name="save__first__name"
                    id="saveFirstName"
                    placeholder="From"
                    required="required"
                  />
                </div>
    
                <div
                  style={{ display: "flex", flexDirection: "row", padding: "5px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginRight: "5px",
                      width: "100px",
                    }}
                  >
                    <p>To</p>
                  </div>
                  <input
                    type="text"
                    name="save__first__name"
                    id="saveFirstName"
                    placeholder="To"
                    required="required"
                  />
                </div>
    
                <div style={{ marginTop: "20px" }}>
                  <button
                    type="submit"
                    className="button button--effect"
                    style={{ width: "100%" }}
                  >
                    Swap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
}

const WalletBody = () => {
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
                    <h5>Wallet</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Wallet</Link>
                    </div>
                  </div>

                  <div className="breadcrumb-dashboard">
                    <div
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <p style={{ textAlign: "center", fontSize: "20px" }}>
                        My Balance
                      </p>
                      <p style={{ textAlign: "center", fontSize: "30px" }}>
                        {" "}
                        3 CEE{" "}
                      </p>
                    </div>
                  </div>

                  <div className="account-info">
                    <div className="account-info__btn-wrapper">
                      {[
                        ["Send", "send"],
                        ["Receive", "receive"],
                        // ["AirDrop", "airdrop"],
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
                      {tabItem == "send" && <Send />}
                      {tabItem == "receive" && <Receive />}
                      {tabItem == "airdrop" && <Airdrop />}
                    </div>
                  </div>

                  <div className="account-info" style={{ marginTop: "30px"}}>
                    <div className="account-info__btn-wrapper">
                      {[
                        ["Swap", "swap"],
                        ["Withdraw", "withdraw"],
                        // ["AirDrop", "airdrop"],
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
                      {tabItem == "swap" && <Swap />}
                      {tabItem == "withdraw" && <Withdraw />}                      
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12" style={{ marginTop: "30px" }}>
                      <div className="investment-table">
                        <div className="intro">
                          <h5>Transactions</h5>
                        </div>
                        <div className="table-wrapper">
                          <table>
                            <thead>
                              <tr>
                                <th>Txn Hash</th>
                                <th>Method</th>
                                <th>Block</th>
                                <th>Age</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Txn Fee</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(5)].map((item, i) => (
                                <tr key={i}>
                                  <td>0xc58ab4e2...</td>
                                  <td>Transfer</td>
                                  <td>18472822</td>
                                  <td>16 sec ago</td>
                                  <td>0x0e2485d..</td>
                                  <td>0x2ab4ed2..</td>
                                  <td>0.1138 ETH</td>
                                  <td>0.000044</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
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
  );
};

export default WalletBody;
