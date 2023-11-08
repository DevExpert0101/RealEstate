import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Chart, CollapseSidebar, LeftSideMenu } from "../index";
import explore from "/public/images/icons/explore.png";
import wallet from "/public/images/icons/wallet.png";
import table_img from "/public/images/table-img.png";
import propertyData from "../../../data/mypropertyData";
import { FaCopy, FaEdit } from "react-icons/fa";
import True from "/public/images/true.png";
import False from "/public/images/false.png";
import Pause from "/public/images/pause.png";
import Stop from "/public/images/stop.png";
import Play from "/public/images/play.png";

const PropertyBody = () => {
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
                    <h5>My Property</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <i>
                        <BsArrowRight />
                      </i>
                      <Link href="#">My Property</Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="investment-table">
                        <div className="intro">
                          <h5>My Properties</h5>
                        </div>
                        <div className="table-wrapper">
                          <table>
                            <thead>
                              <tr>
                                <th>Property Name</th>
                                <th>Tokenized</th>
                                <th>Listed</th>
                                <th>Funded</th>
                                <th>Edit</th>
                              </tr>
                            </thead>
                            <tbody>
                              {propertyData.map((item, i) => (
                                <tr key={i}>
                                  <td style={{ textWrap: "nowrap" }}>
                                    {item.name}
                                  </td>
                                  <td>
                                    <Image
                                      src={
                                        item.tokenized === true ? True : False
                                      }
                                      alt="tokenized"
                                    ></Image>
                                  </td>
                                  <td>
                                    <Image
                                      src={item.listed === true ? True : False}
                                      alt="listed"
                                    ></Image>
                                  </td>
                                  <td>
                                    <Image
                                      src={item.funded === true ? True : False}
                                      alt="listed"
                                    ></Image>
                                  </td>
                                  <td
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "center",
                                      gap: "10px",
                                    }}
                                  >
                                    {item.tokenized === true ? (
                                      <>
                                        <Image
                                          className="imgsize"
                                          src={Stop}
                                          alt="stop"
                                        />{" "}
                                        <Image
                                          className="imgsize"
                                          src={Pause}
                                          alt="pause"
                                        />
                                        <a
                                          href="/property"
                                          className="editButton"
                                        >
                                          <FaEdit className="imgsize" />
                                        </a>
                                        <FaCopy className="imgsize" />
                                      </>
                                    ) : (
                                      <>
                                        <Image
                                          className="imgsize"
                                          src={Play}
                                          alt="play"
                                          style={{ marginLeft: "35px" }}
                                        />
                                        <a
                                          herf="/property"
                                          className="editButton"
                                        >
                                          <FaEdit className="imgsize" />
                                        </a>
                                        <FaCopy className="imgsize" />
                                      </>
                                    )}
                                  </td>
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

export default PropertyBody;
