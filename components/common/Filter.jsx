import { FaSearch } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="property__filter">
      <div className="container">
        <div className="property__filter__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12 col-xl-6">
              <div className="property__search__wrapper">
                <form action="#" method="post">
                  <div className="input">
                    <input
                      type="search"
                      name="property__search"
                      id="propertySearch"
                      placeholder="Search for properties"
                    />
                    <i>
                      <FaSearch />
                    </i>
                  </div>
                  <button type="submit" className="button button--effect">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="property__select__wrapper select px-5">
                <span className="location__select"></span>
                <select className="border-1 w-100 text-capitalize">
                  <option data-display="Location">Select Location</option>
                  <option value="angeles">Hungary</option>
                  <option value="polabd">Poland</option>
                  <option value="czechia">Czechia Republic</option>
                  <option value="bulgaria">Bulgaria</option>
                  <option value="estonia">Estonia</option>
                  <option value="latvia">Latvia</option>
                  <option value="albania">Albania</option>
                  <option value="romania">Romania</option>
                  <option value="serbia">Serbia</option>
                  <option value="slovakia">Slovakia</option>
                  <option value="bosnia">Bosnia and Herzegovina</option>
                  <option value="north">North Macedonia</option>
                  <option value="slovenia">Slovenia</option>
                  <option value="kosovo">Kosovo</option>
                  <option value="lithuania">Lithuania</option>
                  <option value="moldova">Moldova</option>
                  <option value="croatia">Croatia</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="property__select__wrapper select px-5">
                <span className="property__select"></span>
                <select className="border-1 w-100 text-capitalize">
                  <option data-display="Property">Property Type</option>
                  <option value="commercial">Commercial</option>
                  <option value="residential">Mixed-used</option>
                  <option value="residential">Residential</option>
                  <option value="residential">Retail</option>
                </select>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
