import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
//routes
import InterSections from "./intersections/intersectionsContent";
import Section from "./sections/sections";
import MajorRoads from "./majorRoads/majorRoads";
import MinorRoads from "./minorRoads/minorRoads";
import DataEntryHome from "./home/dataEntryHome";

//style
import "./dataEntryStyle.css";

//sidebar
import NewSideBar2 from "./newSideBar copy";

class DataEntry extends Component {
  state = {
    intersections_samples: this.props.intersections,
    section_samples: this.props.section_samples,
    major: this.props.major,
    streets_samples: this.props.streets,
  };

  render() {
    return (
      <>
        <div className="page-wrapper chiller-theme toggled">
          <NewSideBar2 fakeAuth={this.props.fakeAuth} />
          <div className="wrapper">
            <Switch>
              <Route
                path="/RMS/dataentry/majorroads/sections"
                render={(props) => <Section {...this.props} />}
              />
              <Route
                path="/RMS/dataentry/majorroads/intersections"
                render={(props) => <InterSections {...this.props} />}
              />
              <Route
                path="/RMS/dataentry/majorroads"
                render={(props) => <MajorRoads {...this.props} />}
              />
              <Route
                path="/RMS/dataentry/minorroads"
                render={(props) => <MinorRoads {...this.props} />}
              />
              <Route
                path="/RMS/dataentry/home"
                render={(props) => <DataEntryHome {...this.props} />}
              />
              <Route
                path="/"
                render={(props) => <DataEntryHome {...this.props} />}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default DataEntry;
