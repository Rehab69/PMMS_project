import React from "react";
import { Redirect, Link } from "react-router-dom";
//style
import "./outerSystems_assets/css/animate.css";
import "./outerSystems_assets/css/style.css";
import "./outerHome.css";
//components
import BridgesLoginModal from "./bridgesLoginModal";
import RoadsLoginModal from "./roadsLoginModal";

//--------------------------------------------------------------------
const OuterHome = () => {
  return (
    <div>
      {/*--------------- Top content ------------------ */}
      <div className="top-content ">
        <div className="row">
          <div className="col-sm-12 text wow fadeInLeft">
            <h1
              style={{
                fontSize: "43px",
                fontWeight: "bold",
                textShadow: " 0 0 3px rgb(25,25,25), 0 0 5px #0000FF",
              }}
            >
              Pavment Maintenance Management System
            </h1>
          </div>
        </div>
      </div>
      {/*--------------- bottom content ------------------ */}
      <div className="row">
        <div className="col-2">{/* <RoadsLoginModal /> */}</div>
        <div className="col-5">
          <RoadsLoginModal />
        </div>
        <div className="col-5">
          <BridgesLoginModal />
        </div>
      </div>
    </div>
  );
};

export default OuterHome;
