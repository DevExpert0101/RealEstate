import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CollapseSidebar, LeftSideMenu } from "../index";

import tableImg from "/public/images/table-img.png";
import {
  PersonalInformation,
  PortfolioSummary,
  InvestmentHistory,
} from "../index";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const displayUploadedFiles = (previews) => {
    return (
      <div className="container ">
        <div className="row">
          {previews.map((preview, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-xs-12 mt-2">              
              <img
                className="w-100 h-100 rounded-1"
                src={preview}
                alt={`Image ${index + 1}`}
                // width="100"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h5 className="mb-3">File Upload and Display</h5>
      <input
        type="file"
        name="file-input"
        id="file-input"
        accept="image/*"
        multiple
        onChange={handleFileUpload}
        hidden
      />

      <label class="account-info__btn button button--effect" for="file-input">
        Upload file
        <path
          fill="currentColor"
          // d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
        ></path>
      </label>
      {selectedFiles.length > 0 && displayUploadedFiles(imagePreviews)}
    </div>
  );
};

const Rental = () => {
  return (
    <form action="#" name="save__from" method="post" className="save__form">
      <div className="row">
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveDetailsofLeaseAgreement">
              Details of Lease Agreement
            </label>
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
            <label htmlFor="saveRentalIncomeHistory">
              Rental Income History
            </label>
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
            <label htmlFor="saveExpectedRentalIncome">
              Expected Rental Income
            </label>
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
  );
};

const SelectDetails = () => {
  const [tabItem, setTabItem] = useState("rental");

  return (
    <div>
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
      </div>
      <div className="row">
        <div className="col-sm-4">
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
        <div className="col-sm-4">
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
        <div className="col-sm-4">
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
          <div
            className="input input--secondary"
            style={{ textAlign: "center" }}
          >
            <label htmlFor="savePropertyUsage">Property Usage</label>

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
              {tabItem == "sale" && (
                <div className="row">
                  <div className="col-sm-3">
                    <div className="input input--secondary">
                      <label htmlFor="saveExpectedSaleOff">
                        Expected Sale Off
                      </label>
                      <input
                        type="text"
                        name="save__expected_sale_off"
                        id="saveExpectedSaleOff"
                        placeholder="Expected Sale Off"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
              )}
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
            <label htmlFor="saveDividendDistribution">
              Dividend Distribution
            </label>
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
            <label htmlFor="saveFinancialPerformance">
              Financial Performance
            </label>
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
      <div></div>
      <div className="row">
        <div className="col-sm-4">
          <div className="input input--secondary">
            <label htmlFor="saveFeaturesAmentities">
              Features and Amentities
            </label>
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
            <label htmlFor="savePhotosVirtualTours">
              Photos and Virtual Tours
            </label>
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
            <label htmlFor="saveOwnershipTokenization">
              Ownership and Tokenization
            </label>
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
      <div></div>

      {/* Submit Property part */}
      <div className="row">
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

      <div>
        <Link
          href="/dashboard/assesment"
          className="button button--effect"
          style={{ marginTop: "30px" }}
        >
          Save Changes
        </Link>
      </div>
    </div>
  );
};

const SelectType = () => {
  const [tabItem, setTabItem] = useState("residential");
  return (
    <div className="tokenize__style">
      <h5 style={{ textAlign: "center", marginBottom: "20px" }}>Select Type</h5>
      <div className="account-info__btn-wrapper">
        {[
          ["Residential", "residential"],
          ["Mixed-used", "mixed"],
          ["Commercial", "commercial"],
          ["Retail", "retail"],
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
  );
};

const TokenizeBody = () => {
  const [tabItem, setTabItem] = useState("existing");
  const [activSidebar, setActivSidebar] = useState(false);

  return (
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
                      <h5>Tokenization</h5>
                      <div>
                        <Link href="/dashboard">Home</Link>
                        <BsArrowRight />
                        <Link href="#">Tokenization</Link>
                      </div>
                    </div>
                    <div className="investment-table investment-table-two">
                      <div className="account-info">
                        <div className="account-info__btn-wrapper">
                          {[
                            ["Existing", "existing"],
                            ["Envisioned", "envisioned"],
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
                          {tabItem == "existing" && <SelectType />}
                          {tabItem == "envisioned" && <SelectType />}
                        </div>
                      </div>
                    </div>

                    <div
                      className="breadcrumb-dashboard"
                      style={{ marginTop: "20px" }}
                    >
                      <h5>Incoming Pool</h5>
                    </div>
                    <div className="investment-table investment-table-two">
                      <div className="account-info">
                        <div className="account-info__btn-wrapper"></div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="input input--secondary">
                              <label htmlFor="saveYearBuilt">
                                Incoming Pool
                              </label>
                              <input
                                type="number"
                                name="save__incomping_pool"
                                id="saveIncomingPool"
                                placeholder="Incoming Pool"
                                required="required"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="investment-table investment-table-two"
                      style={{ marginTop: "30px" }}
                    >
                      <div className="account-info">
                        <div className="account-info__btn-wrapper"></div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="input input--secondary">
                              <label htmlFor="saveYearBuilt">
                                Wallet Address
                              </label>
                              <input
                                type="number"
                                name="save__incomping_pool"
                                id="saveIncomingPool"
                                placeholder="CEE Token Address"
                                required="required"
                              />
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
  );
};

export default TokenizeBody;
