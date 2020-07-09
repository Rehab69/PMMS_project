import React, { Component } from "react";

// import "./ddstyles.css";
import Map from "./map";
import Table from "./Table";

class MajorRoads extends Component {
  state = {};
  render() {
    return (
      <main className="page-content" style={{margin:'0px'}}>
        
      <div className="main_content"  style={{margin:'0px'}}>
        <div
          class="header"
          style={{
            backgroundColor: "rgb(44, 44, 52)",
            borderBottomColor: " rgb(10, 11, 24)",
          }}
        >
          <i class="fas fa-bars"></i> Home / Major Roads
        </div>
        <div class="info">
          <div className="cont1">
            <div class="card">
              <div class="card-header map-card-head" style={{fontSize:'2rem',fontWeight:'800',margin:'0px'}}>Major Roads</div>
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
      </main>
    );
  }
}

export default MajorRoads;
