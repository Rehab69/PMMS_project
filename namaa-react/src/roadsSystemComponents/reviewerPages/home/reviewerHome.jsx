import React, { Component } from "react";

// import Sections from "./sections";
import "./ddstyles.css";
// import MajorRoadsMap from "../../dataEntryPages/majorRoadsMap";
import SectionsMap from "./sectionsMap";
import SectionsTable from "./sectionsTable";
// import Tables from "./TablesTemp";
// import Table2 from "./table2";

class ReviewerHome extends Component {
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
          <i class="fas fa-bars"></i> Home
        </div>
        <div class="info">
          <div className="cont1">
            <div class="card">
              <div class="card-header map-card-head">Madinaty Map</div>
              <div class="card-body  map-card-body">
                <SectionsMap />
              </div>
            </div>
          </div>
          <div>
            {/* still thinking about what to do here exactly ! */}
            {/* <SectionsTable /> */}
          </div>
          <div>{/* <Table2 /> */}</div>
        </div>
      </div>
	
    );
  }
}

export default ReviewerHome;
