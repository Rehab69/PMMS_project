import React, { Component } from "react";
import HomeMap from "./homeMap";

class DataEntryHome extends Component {
  state = {};
  render() {
    return (
      <main className="page-content" style={{ margin: "0px" }}>
        <div className="main_content" style={{ margin: "0px" }}>
          <div
            class="header sticky-top"
            style={{
              backgroundColor: "rgb(44, 44, 52)",
              borderBottomColor: " rgb(10, 11, 24)",
              paddingLeft: "3vw",
              zIndex: "auto",
            }}
          >
            <i class="fas fa-bars"></i> Home
          </div>
          <div class="info">
            <div className="cont1">
              <div class="card">
                <div
                  class="card-header map-card-head"
                  // style={{ fontSize: "2rem", fontWeight: "800", margin: "0" }}
                >
                  Madinaty Map
                </div>
                <div class="card-body  map-card-body">
                  <HomeMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default DataEntryHome;
