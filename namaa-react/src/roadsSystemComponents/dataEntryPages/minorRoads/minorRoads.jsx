import React, { Component } from "react";

import "./ddstyles.css";
import Map from "./Map";
import Table from "./table";

class MinorRoads extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="page-content" style={{ margin: "0px" }}>
          <div className="main_content" style={{ margin: "0px" }}>
            <div
              className="header sticky-top"
              style={{
                backgroundColor: "rgb(44, 44, 52)",
                borderBottomColor: " rgb(10, 11, 24)",
                paddingLeft: "3vw",
                zIndex: "auto",
              }}
            >
              <i className="fas fa-bars"></i> Home / Minor Roads
            </div>
            <div className="info">
              <div className="cont1"></div>
              <div class="card">
                <div class="card-header map-card-head">Streets of Regions</div>
                <div class="card-body  map-card-body">
                  <Map />
                </div>
              </div>
              <div class="card">
                <div class="card-header map-card-head">List of Streets</div>
                <div class="card-body  map-card-body">
                  <Table {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default MinorRoads;
