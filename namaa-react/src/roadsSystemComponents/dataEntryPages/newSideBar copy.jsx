import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./newSideBarStyle copy.css";
import hala from "./hala.jpg";

const NewSideBar2 = (props) => {
  const majorRef = useRef();
  const majorSubmenuRef = useRef();
  const regionRef = useRef();
  const regionSubmenuRef = useRef();
  const InventmajorRef = useRef();
  const InventmajorSubmenuRef = useRef();
  const InventregionRef = useRef();
  const InventregionSubmenuRef = useRef();
  const userName = "Hala Abdelmaksoud";
  return (
    <div>
      <span id="show-sidebar" className="btn btn-sm btn-dark">
        <i className="fas fa-angle-double-right" style={{ fontSize: "2rem" }} />
      </span>
      <nav id="sidebar" className="sidebar-wrapper" style={{ width: "17vw" }}>
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <Link to="/RMS/dataentry/">Home</Link>
            <div id="close-sidebar">
              <i className="fas fa-angle-double-left" />
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img
                className="img-responsive img-rounded"
                src={hala}
                alt="User picture"
              />
            </div>
            <div className="user-info">
              <span className="user-role">Data Entry</span>
              <span className="user-role">{userName}</span>
              <span className="user-status">
                <i className="fa fa-circle" />
                <span>Online</span>
              </span>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>Collection Data</span>
              </li>

              <li className="sidebar-dropdown" ref={majorRef}>
                <span
                  className="heaerMenu"
                  onClick={() => {
                    if (majorRef.current.classList[1] === "active") {
                      majorRef.current.classList.remove("active");
                      majorSubmenuRef.current.style.display = "";
                      InventmajorSubmenuRef.current.style.display = "";
                      InventregionSubmenuRef.current.style.display = "";
                    } else {
                      majorRef.current.classList.add("active");
                      majorSubmenuRef.current.style.display = "block";
                      regionSubmenuRef.current.style.display = "";
                      InventmajorSubmenuRef.current.style.display = "";
                      InventregionSubmenuRef.current.style.display = "";
                    }
                  }}
                >

                  <i className="fa fa-road" />

                  <span>Major Roads</span>
                </span>

                <div className="sidebar-submenu" ref={majorSubmenuRef}>
                  <ul>
                    <li>
                      <Link
                        to="/RMS/dataentry/majorroads/sections"
                        style={{ paddingRight: "0px" }}
                      >
                        Sections Samples
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/RMS/dataentry/majorroads/intersections"
                        style={{ paddingRight: "0px" }}
                      >
                        Intersections Samples
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown" ref={regionRef}>
                <span
                  className="heaerMenu"
                  onClick={() => {
                    if (regionRef.current.classList[1] === "active") {
                      regionRef.current.classList.remove("active");
                      regionSubmenuRef.current.style.display = "";
                      InventmajorSubmenuRef.current.style.display = "";
                      InventregionSubmenuRef.current.style.display = "";
                    } else {
                      regionRef.current.classList.add("active");
                      regionSubmenuRef.current.style.display = "block";
                      majorSubmenuRef.current.style.display = "";
                      InventmajorSubmenuRef.current.style.display = "";
                      InventregionSubmenuRef.current.style.display = "";
                    }
                  }}
                >
                  <i className="fas fa-city" />

                  <span>Regions</span>
                </span>
                <div className="sidebar-submenu" ref={regionSubmenuRef}>
                  <ul>
                    <li>
                      <Link
                        to="/RMS/dataentry/minorroads"
                        style={{ paddingRight: "0px" }}
                      >
                        {" "}
                        Surveyed Streets{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <br></br>

            <ul>
              <li className="header-menu">
                <span>Inventory Data</span>
              </li>

              <li className="sidebar-dropdown" ref={InventmajorRef}>
                <span
                  className="heaerMenu"
                  onClick={() => {
                    if (InventmajorRef.current.classList[1] === "active") {
                      InventmajorRef.current.classList.remove("active");
                      InventmajorSubmenuRef.current.style.display = "";
                      majorSubmenuRef.current.style.display = "";
                      regionSubmenuRef.current.style.display = "";
                    } else {
                      InventmajorRef.current.classList.add("active");
                      InventmajorSubmenuRef.current.style.display = "block";
                      InventregionSubmenuRef.current.style.display = "";
                      majorSubmenuRef.current.style.display = "";
                      regionSubmenuRef.current.style.display = "";
                    }
                  }}
                >
                  <i className="fa fa-road" />

                  <span>Major Roads</span>
                </span>

                <div className="sidebar-submenu" ref={InventmajorSubmenuRef}>
                  <ul>
                    <li>
                      <Link to="#" style={{ paddingRight: "0px" }}>
                        Major Roads
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ paddingRight: "0px" }}>
                        Lanes
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ paddingRight: "0px" }}>
                        Sections
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ paddingRight: "0px" }}>
                        Intersections
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown" ref={InventregionRef}>
                <span
                  className="heaerMenu"
                  onClick={() => {
                    if (InventregionRef.current.classList[1] === "active") {
                      InventregionRef.current.classList.remove("active");
                      InventregionSubmenuRef.current.style.display = "";
                    } else {
                      InventregionRef.current.classList.add("active");
                      InventregionSubmenuRef.current.style.display = "block";
                      InventmajorSubmenuRef.current.style.display = "";
                      majorSubmenuRef.current.style.display = "";
                      regionSubmenuRef.current.style.display = "";
                    }
                  }}
                >
                  <i className="fas fa-city" />

                  <span>Regions</span>
                </span>
                <div className="sidebar-submenu" ref={InventregionSubmenuRef}>
                  <ul>
                    <li>
                      <Link to="#" style={{ paddingRight: "0px" }}>
                        {" "}
                        Regions{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" style={{ paddingRight: "0px" }}>
                        {" "}
                        Streets{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-footer">
          <a href="/">
            <i className="fa fa-power-off" /> <span>Sign out</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NewSideBar2;
