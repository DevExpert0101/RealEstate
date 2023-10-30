import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CollapseSidebar, LeftSideMenu } from "../index";
import tableImg from "/public/images/table-img.png";
import { PersonalInformation, PortfolioSummary, InvestmentHistory } from "../index";
import FileUpload from "./FileUpload";


const Rental = () =>  {
    return(
    <form action="#" name="save__from" method="post" className="save__form">
      <div className="row">
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveDetailsofLeaseAgreement">Details of Lease Agreement</label>
            <input
              type="text"
              name="save__details_lease_agreement"
              id="saveDetailsOfLeaseAgreement"
              placeholder="Details of Lease Agreement"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveVacancyRate">Vacancy Rate</label>
            <input
              type="text"
              name="save__vacancy_rate"
              id="saveVacancyRate"
              placeholder="Vacancy Rate"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveCurrentTenants">Current Tenants</label>
            <input
              type="text"
              name="save_current_denants"
              id="saveCurrentDenants"
              placeholder="Current Tenants"
              required="required"
              />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveLeaseTeams">Lease Term(s)</label>
            <input
              type="text"
              name="save_lease_terms"
              id="saveLeaseTeams"
              placeholder="Lease Term(s)"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveRentalIncomeHistory">Rental Income History</label>
            <input
              type="text"
              name="save__rental_income_history"
              id="saveRentalIncomeHistory"
              placeholder="Rental Income History"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveExpectedRentalIncome">Expected Rental Income</label>
            <input
              type="text"
              name="save_expected_rental_income"
              id="saveExpectedRentalIncome"
              placeholder="Expected Rental Income"
              required="required"
              />
          </div>
        </div>
      </div>  
    </form>
  )
}

const SelectDetails = () => {
  const [tabItem, setTabItem] = useState("general")

  return(

    <form action="#" name="save__from" method="post" className="save__form">
      <div className="row">
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveYearBuilt">Year Built</label>
            <input
              type="number"
              name="save__year_built"
              id="saveYearbuilt"
              placeholder="Year Built"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveSize">Size</label>
            <input
              type="text"
              name="save__size"
              id="saveSize"
              placeholder="Size"
              required="required"
              />
          </div>
        </div>      
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveLocation">Location</label>
            <input
              type="text"
              name="save_location"
              id="saveLocation"
              placeholder="Location"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveEnvironmental">Environmental</label>
            <input
              type="text"
              name="save_environment"
              id="saveEnvironment"
              placeholder="Environment"
              required="required"
              />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveDescription">Description</label>
            <input
              type="text"
              name="save__description"
              id="saveDescription"
              placeholder="Description"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveRiskFactor">Risk Factor</label>
            <input
              type="text"
              name="save__ristk"
              id="saveRiskFactor"
              placeholder="Risk Factor"
              required="required"
              />
          </div>
        </div>      
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="savePurchase">Purchase</label>
            <input
              type="text"
              name="save_purchase"
              id="savePurchase"
              placeholder="Purchase"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveCurrentMarketValue">Current Market Value</label>
            <input
              type="text"
              name="save_current_value"
              id="saveCurrentMarketValue"
              placeholder="CurrentMarketValue"
              required="required"
              />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <div className="input input--secondary" style={{ textAlign: "center"}}>
            <label htmlFor="savePropertyUsage">Property Usage</label>
            {/* <input
              type="text"
              name="save__property_usage"
              id="savePropertyUsage"
              placeholder="Proeprty Usage"
              required="required"
              /> */}
              <div className="account-info__btn-wrapper">
                {[
                  ["Rental", "rental"],
                  ["Sale", "sale"],                        
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
                {tabItem == "rental" && <Rental />}
                {tabItem == "sale" && 
                <div className="row">
                  <div className="col-sm-3">
                    <div className="input input--secondary">
                      <label htmlFor="saveExpectedSaleOff">Expected Sale Off</label>
                      <input
                        type="text"
                        name="save__expected_sale_off"
                        id="saveExpectedSaleOff"
                        placeholder="Expected Sale Off"
                        required="required"
                        />
                    </div>
                  </div>  
                  </div>}
                
              </div>
          </div>
        </div>
        </div>
        <hr />
        <div className="row">
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveRiskFactor">Expenses</label>
            <input
              type="text"
              name="save__expenses"
              id="saveExpenses"
              placeholder="Expenses"
              required="required"
              />
          </div>
        </div>      
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveDividendDistribution">Dividend Distribution</label>
            <input
              type="text"
              name="save_dividend_distribution"
              id="saveDividendDistribution"
              placeholder="Dividend Distribution"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveFinancialPerformance">Financial Performance</label>
            <input
              type="text"
              name="save_financial_performance"
              id="saveFinancialPerformance"
              placeholder="Financial Performance"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input input--secondary">
            <label htmlFor="saveRiskFactor">Appreciation Trends</label>
            <input
              type="text"
              name="save__appreciation_trends"
              id="saveAppreciationTrends"
              placeholder="Appreciation Trends"
              required="required"
              />
          </div>
        </div>    
      </div>
      <div>        
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveFeaturesAmentities">Features and Amentities</label>
            <input
              type="text"
              name="save__features_amentities"
              id="saveFeaturesAmentities"
              placeholder="Features and Amentities"
              required="required"
              />
          </div>
        </div>
          
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="savePhotosVirtualTours">Photos and Virtual Tours</label>
            <input
              type="text"
              name="save_photo_virtual_tours"
              id="savePhotoVirtualTours"
              placeholder="Photos and Virtual Tours"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveOwnershipTokenization">Ownership and Tokenization</label>
            <input
              type="text"
              name="save_ownership_tokenization"
              id="saveOwnershipTokenization"
              placeholder="Ownership and Tokenization"
              required="required"
              />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveLegalCompliance">Legal and Compliance</label>
            <input
              type="text"
              name="save_legal_compliance"
              id="saveLegalandCompliance"
              placeholder="Legal and Compliance"
              required="required"
              />
          </div>
        </div>
      </div>
      <div>        
      </div>
      <div>        
        <button type="submit" className="button button--effect">
          Save Changes
        </button>
      </div>
    </form>
)

}

const SelectType = () => {
  const [tabItem, setTabItem] = useState("general");

  return (
    
                    
        <div className="tokenize__style">
          <h5 style={{ textAlign: "center", marginBottom: "20px"}}>Select Type</h5>
          <div className="account-info__btn-wrapper">
            {[
              ["Residential", "residential"],
              ["Mixed-used", "mixed"],                        
              ["Commercial", "commercial"],
              ["Retail", "retail"]
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
            {tabItem == "residential" && <SelectDetails />}
            {tabItem == "mixed" && <SelectDetails />}
            {tabItem == "commercial" && <SelectDetails />}
            {tabItem == "retail" && <SelectDetails />}
        </div>
      </div>
                  
  )
}

const SubmitBody = () => {
    const [imgsSrc, setImgsSrc] = useState([]);
    const onChange = (e) => {
        for (const file of e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgsSrc((imgs) => [...imgs, reader.result]);
            };

            reader.onerror = () => {
                console.log(reader.error);
            };
        }
    };

    useEffect(() => {

    })
    

  const [tabItem, setTabItem] = useState("general");
  const [activSidebar, setActivSidebar] = useState(false);

  return (
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
                    <h5>Submit Property</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Submit</Link>
                    </div>
                  </div>
                  <div className="investment-table investment-table-two">
                    
                    <div className="account-info">
                    <div className="account-content_wrapper">
                      {/* {tabItem == "existing" && <SelectType />}
                      {tabItem == "envisioned" && <SelectType />} */}
                      <form action="#" name="save__from" method="post" className="save__form">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="input input--secondary">
                                <label htmlFor="saveLocation">Location</label>
                                <input
                                type="text"
                                name="save__location"
                                id="saveLocation"
                                placeholder="Location"
                                required="required"
                                />
                            </div>
                            </div>
                            </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="input input--secondary">
                                <label htmlFor="saveDescription">Description</label>
                                <textarea
                                type="text"
                                name="save__description"
                                id="saveDescription"
                                placeholder="Description"
                                required="required"
                                />
                            </div>
                            </div>
                            <div className="col-sm-12">
                            <div className="input input--secondary">
                                <label htmlFor="saveReasonsToInvest">Reasons to invest</label>
                                <textarea
                                type="text"
                                name="save_reason_invest"
                                id="saveReasonsToInvest"
                                placeholder="Reasons to Invest"
                                required="required"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="input input--secondary">
                                <label htmlFor="saveAboutProjectOwner">About project owner</label>
                                <textarea
                                type="text"
                                row
                                name="save_about_project_owner"
                                id="saveAboutProjectOwner"
                                placeholder="About Project Owner"
                                required="required"
                                />
                            </div>
                            </div>                            
                        </div>  
                        <div>        
                            <FileUpload />
                        </div>
                        <button type="submit" className="button button--effect" style={{ marginTop: "20px"}}>
                                Save
                            </button>
                        </form>
                      
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

export default SubmitBody;
