import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./newSideBarStyle.css";

//        ******************* paths for reviewer *********************
//               <Link to="/RMS/reviewer/">
//               <Link to="/RMS/reviewer/">
//               <Link to="/RMS/reviewer/majorroads">
//               <Link to="/RMS/reviewer/majorroads/sections">
//               <Link to="/RMS/reviewer/majorroads/intersections">
//               <Link to="/RMS/reviewer/minorroads">

const NewSideBar = () => {
  
  return (
    <>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <Link to="/RMS/dataentry" style={{ paddingBottom: "20px", paddingTop: "20px" }}>
              Road Management System
            </Link>
            <div id="close-sidebar">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="sidebar-header">
            <i class="fas fa-user"></i>
            <span className="user-role"> Data Entry</span>
          </div>

          <div
            className="sidebar-menu"
            style={{ paddingLeft: 0, marginLeft: "4px" }}
          >
            <ul>
              <li>
                <Link to="/RMS/dataentry/" style={{ paddingLeft: 0 }}>
                  <span
                    className="heaerMenu"
                    style={{ paddingLeft: 0, marginLeft: "4px" }}
                  >
                    <i class="far fa-map"></i>
                    <span>Home</span>
                  </span>
                </Link>
              </li>
              <li className="sidebar-dropdown">
                <span
                  className="heaerMenu"
                  style={{ paddingLeft: 0, marginLeft: "4px" }}
                >
                  <Link
                    to="/RMS/dataentry/majorroads"
                    style={{ paddingLeft: 0, marginLeft: 0 }}
                  >
                    <i
                      class="fas fa-road"
                      style={{ paddingLeft: 0, color: "rgb(189, 184, 215)" }}
                    ></i>
                    <span style={{ paddingLeft: 0 }}>Major Roads</span>
                  </Link>
                </span>
                {/* <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link path="/RMS/dataentry/majorroads/sections">
                        Sections
                      </Link>
                    </li>
                    <li>
                      <Link
                        path="/RMS/dataentry/majorroads/intersections"
                        style={{ paddingLeft: 0 }}
                      >
                        Intersections
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
              {/*  --------------- sections --------------- */}
              <li className="sidebar-dropdown">
                <span
                  className="heaerMenu"
                  style={{ paddingLeft: 0, marginLeft: "4px" }}
                >
                  <Link
                    to="/RMS/dataentry/majorroads/sections"
                    style={{ paddingLeft: 0, marginLeft: 0 }}
                  >
                    <i
                      class="fas fa-road"
                      style={{ paddingLeft: 0, color: "rgb(189, 184, 215)" }}
                    ></i>
                    <span style={{ paddingLeft: 0 }}>Sections</span>
                  </Link>
                </span>
              </li>
              <li className="sidebar-dropdown">
                <span
                  className="heaerMenu"
                  style={{ paddingLeft: 0, marginLeft: "4px" }}
                >
                  <Link
                    to="/RMS/dataentry/majorroads/intersections"
                    style={{ paddingLeft: 0, marginLeft: 0 }}
                  >
                    <i
                      class="fas fa-road"
                      style={{ paddingLeft: 0, color: "rgb(189, 184, 215)" }}
                    ></i>
                    <span style={{ paddingLeft: 0 }}>intersections</span>
                  </Link>
                </span>
              </li>

              <li>
                <Link
                  path="/RMS/dataentry/majorroads/sections"
                  style={{ paddingLeft: 0 }}
                >
                  <span
                    className="heaerMenu"
                    style={{ paddingLeft: 0, marginLeft: "10px" }}
                  >
                    <i class="fas fa-globe-africa"></i> <span>Sections</span>
                  </span>
                </Link>
              </li>
              <li>
                {/* --------------- intersections ---------------*/}
                <li>
                  <Link
                    to="/RMS/dataentry/majorroads/intersections"
                    style={{ paddingLeft: 0 }}
                  >
                    <span
                      className="heaerMenu"
                      style={{ paddingLeft: 0, marginLeft: "10px" }}
                    >
                      <i class="fas fa-globe-africa"></i>{" "}
                      <span>Intersections</span>
                    </span>
                  </Link>
                </li>
                {/*minor ------------------------------------------*/}
                <Link
                  to="/RMS/dataentry/minorroads"
                  style={{ paddingLeft: 0 }}
                >
                  <span
                    className="heaerMenu"
                    style={{ paddingLeft: 0, marginLeft: "4px" }}
                  >
                    <i class="far fa-map"></i>
                    <span>Minor roads</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-footer">
          <Link to="/" exact>
            <i className="fa fa-power-off" /> <span>Sign out</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NewSideBar;

//   <nav id="sidebar" class="sidebar-wrapper">
//     <div class="sidebar-content">
//       {/* <!-- sidebar-brand  --> */}
//       <div class="sidebar-item sidebar-brand">
//         <a href="#">Road System</a>
//       </div>
//       {/* <!-- sidebar-header  --> */}
//       <div class="sidebar-item sidebar-header d-flex flex-nowrap">
//         <div class="user-pic">
//           <img
//             class="img-responsive img-rounded"
//             src="img/user.jpg"
//             alt="User picture"
//           />
//         </div>
//         <div class="user-info">
//           <span class="user-name">
//             <strong class="user-role">Data Entry</strong>
//           </span>
//           <span class="user-status">
//             <i class="fa fa-circle"></i>
//             <span>Online</span>
//           </span>
//         </div>
//       </div>
//     </div>
//     {/* <!-- sidebar-menu  --> */}
//     <div class="sidebar-item sidebar-menu">
//       <ul>
//         <li class="header-menu">
//           <span>General</span>
//         </li>
//         <li>

//           <a href="#">
//             <i class="fa fa-shopping-cart"></i>
//             <span class="menu-text">Home</span>
//           </a>
//         </li>

//         <li class="sidebar-dropdown">
//           <a href="#">
//             <i class="fa fa-tachometer-alt"></i>
//             <span class="menu-text">Major Roads</span>
//           </a>
//           <div class="sidebar-submenu">
//             <ul>
//               <li>
//                 <a href="#">Sections </a>
//               </li>
//               <li>
//                 <a href="#">Intersection</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li>
//           <a href="#">
//             <i class="fa fa-shopping-cart"></i>
//             <span class="menu-text">Minor Roads</span>
//           </a>
//         </li>
//       </ul>

//       {/* <!-- footer-menu  --> */}
//       <div className="sidebar-footer">
//         <Link>
//           <i className="fa fa-power-off" /> <span>Sign out</span>
//         </Link>
//       </div>
//     </div>
//   </nav>;
