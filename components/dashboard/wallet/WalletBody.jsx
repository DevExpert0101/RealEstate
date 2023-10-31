import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  Billing,
  CollapseSidebar,
  General,
  LeftSideMenu,
  Security,
} from "../index";

const Send = () => {
    return (
        <form action="#" name="save__from" method="post" className="save__form">
        <div className="row">
        <div className="col-sm-4" style={{ alignItems: "center"}} />  
          <div className="col-sm-4" style={{ alignItems: "center"}}>
            <div className="input input--secondary">
                <div  style={{ display: "flex", flexDirection: "row"}}>

                    <label htmlFor="saveFirstName" style={{ verticalAlign: "center", marginTop: "auto"}}>To</label>
                    <input
                        type="text"
                        name="save__first__name"
                        id="saveFirstName"
                        placeholder="First Name"
                        required="required"
                    />
                </div>
            </div>
          </div>
          </div>
        <div>
          <button type="submit" className="button button--effect">
            Save Changes
          </button>
        </div>
      </form>
    )
}

const Receive = () => {

}

const Airdrop = () => {

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
                    <h5>Account</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Account</Link>
                    </div>
                  </div>
                  <div className="account-info">
                    <div className="account-info__btn-wrapper">
                      {[
                        ["Send", "send"],
                        ["Receive", "receive"],
                        ["AirDrop", "airdrop"],
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
                      {tabItem == "receive" && <Billing />}
                      {tabItem == "airdrop" && <Security />}
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
