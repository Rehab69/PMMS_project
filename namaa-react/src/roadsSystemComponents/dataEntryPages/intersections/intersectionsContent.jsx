import React, { Component } from "react";
import Table from "./table";
import Map from "./Map";
import "./newStyle.css";
class InterSections extends Component {
  state = {};
  render() {
    return (
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
            <i class="fas fa-bars"></i> Home / Major Roads / Intersections
          </div>
          <div class="info">
            <div className="cont1">
              <div class="card">
                <div class="card-header map-card-head">Intersections</div>
                <div class="card-body  map-card-body">
                  <Map />
                </div>
              </div>
              <div class="card">
                <div class="card-header map-card-head">
                  List of Intersections
                </div>
                <div class="card-body  map-card-body">
                  <Table {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default InterSections;
