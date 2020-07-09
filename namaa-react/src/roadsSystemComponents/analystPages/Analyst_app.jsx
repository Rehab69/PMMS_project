import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import UdiRout from "./Udi_rout";
// import data from './data.json';
// import region from './region_data.json';
import RoutFinal from "./Rout_final";
import UdiRegion from "./Udi_region";
import Regionfinal from "./Regionfinal";

import Sidebar from "./SideBar/sidebar";
import Home from "./../adminPages/home-test";

class Analyst_app extends Component {
  state = {
    urlMajor:
      "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3",
    urlRegion:
      "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/5",
    MRoads: [],
    Regions: [],
  };

  async componentDidMount() {
    await axios
      .get("http://localhost:3004/roadAfterCalcUDI")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ MRoads: data });
      });

    await axios
      .get("http://localhost:3004/regionsAfterCalcUDI")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ Regions: data });
      });
  }

  handleClickCheckbox = (route) => {
    const copyRoads = [...this.state.MRoads];
    // //Using object ==> index
    const index = copyRoads.indexOf(route);
    // //Deep Clone
    copyRoads[index] = { ...copyRoads[index] };
    // //Edit
    // copyRoads[index].inPriority = !copyRoads[index].inPriority;
    copyRoads[index].isUdi = !copyRoads[index].isUdi;
    // //Set State
    this.setState({ MRoads: copyRoads });
    console.log(copyRoads[index]);
    axios
      .put(
        `http://localhost:3004/regionsAfterCalcUDI/${route.roadId}`,
        copyRoads[index]
      )
      .then((res) => console.log(res.data));
  };
  componentDidUpdate() {
    console.log(this.state);
  }

  handleClickRegion = (region) => {
    const copyRegions = [...this.state.Regions];
    // //Using object ==> index
    const index = copyRegions.indexOf(region);
    // //Deep Clone
    copyRegions[index] = { ...copyRegions[index] };
    // //Edit
    // copyRegions[index].inPriority = !copyRegions[index].inPriority;
    copyRegions[index].isUdi = !copyRegions[index].isUdi;
    // //Set State
    this.setState({ Regions: copyRegions });
    console.log(copyRegions[index]);
    axios
      .put(
        `http://localhost:3004/regionsAfterCalcUDI/${region.regionId}`,
        copyRegions[index]
      )
      .then((res) => console.log(res.data));
  };

  render() {
    return (
      <div>
        <div className="page-wrapper chiller-theme toggled">
          <Sidebar fakeAuth={this.props.fakeAuth} />

          <Switch>
            {/* first page  */}

            <Route
              path="/RMS/Analyst/majorroads"
              render={(props) => (
                <UdiRout
                  {...props}
                  MRoads={this.state.MRoads}
                  handleClickCheckbox={this.handleClickCheckbox}
                  urlMajor={this.state.urlMajor}
                />
              )}
            />

            {/* second page */}

            <Route
              path="/RMS/Analyst/MRcondition"
              render={(props) => (
                <RoutFinal
                  {...props}
                  MRoads={this.state.MRoads}
                  urlMajor={this.state.urlMajor}
                />
              )}
            />

            {/* thirdpage */}
            <Route
              path="/RMS/Analyst/regions"
              render={(props) => (
                <UdiRegion
                  {...props}
                  Regions={this.state.Regions}
                  urlRegion={this.state.urlRegion}
                  handleClickRegion={this.handleClickRegion}
                />
              )}
            />

            {/* Forthpage */}
            <Route
              path="/RMS/Analyst/REGcondition"
              render={(props) => (
                <Regionfinal
                  {...props}
                  Regions={this.state.Regions}
                  urlRegion={this.state.urlRegion}
                />
              )}
            />
            <Route path="/RMS/Analyst" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Analyst_app;
