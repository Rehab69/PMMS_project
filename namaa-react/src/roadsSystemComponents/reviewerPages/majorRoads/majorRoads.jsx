import React, { Component } from "react";

// import "./ddstyles.css";
import Map from "./map";
import Table from "./Table";

class MajorRoads extends Component {
  state = {};
  render() {
    return (
      <div class="main_content">
        <div
          class="header"
          style={{
            backgroundColor: "rgb(44, 44, 52)",
            borderBottomColor: " rgb(10, 11, 24)",
          }}
        >
          <i class="fas fa-bars"></i> Home / MajorRoads
        </div>
        <div class="info">
          <div className="cont1">
            <div class="card">
              <div class="card-header map-card-head">Major Roads</div>
              <div class="card-body  map-card-body">
                <Map />
              </div>
            </div>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default MajorRoads;
