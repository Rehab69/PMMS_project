import React, { Component } from "react";
import SectionsMap from "./sectionsMap";
import Table from "./Table";

class Sections extends Component {
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
            <i className="fas fa-bars"></i>&nbsp; Home / Major Roads / Sections
          </div>
          <div className="info">
            <div className="card">
              <div className="card-header map-card-head">Map of Sections</div>
              <div className="card-body  map-card-body">
                <SectionsMap />
              </div>
            </div>
            <div className="card ">
              <div className="card-header  map-card-head">List of Sections</div>
              <div className="card-body">
                <Table {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Sections;
