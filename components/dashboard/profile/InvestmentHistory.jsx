import Image from "next/image";
import Link from "next/link";
import explore from "/public/images/icons/explore.png";
import wallet from "/public/images/icons/wallet.png";
import table_img from "/public/images/table-img.png";
import { Chart, CollapseSidebar, LeftSideMenu } from "../index";

const PorfolioSummary = () => {
  return (
    <div className="account-content">
      <div className="account-content-single">
        <div className="row">
          <div className="col-lg-8">
            <div className="investment-table">
              <div className="intro">
                <h5>Transactions</h5>
              </div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Amount Invested</th>
                      <th>Date Invested</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((item, i) => (
                      <tr key={i}>
                        <td>
                          <Image src={table_img} alt="Investment" />
                          A19, Vilnius
                        </td>
                        <td>$500.00</td>
                        <td>18.03.2022</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4" style={{ marginTop: "30px" }}>
            <div className="investment-sidebar">
              <div className="statistics">
                <h5>Statistics</h5>
                <hr />
                <div className="group">
                  <Image src={wallet} alt="Wallet" />
                  <div>
                    <h4>CEE 537,00</h4>
                    {/* <p>Monthly Income</p> */}
                  </div>
                </div>
              </div>
              <div className="explore">
                <Image src={explore} alt="Explore" />
                <div className="group">
                  <h6>Explore More</h6>
                  <p className="secondary">Investment opportunities</p>
                  <Link href="/registration" className="button button--effect">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-single__box investment-single-box">
          <div className="intro" style={{ marginTop: "20px" }}>
            <h5 className="investo">Investment Chart</h5>
            {/* <Link href="#">Generate Report</Link> */}
          </div>
          <div id="investmentChartTwo">
            Generate Report
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorfolioSummary;
