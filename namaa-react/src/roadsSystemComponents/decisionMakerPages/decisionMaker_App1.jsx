import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import MR_Maintenance from "../decisionMakerPages/majorRoads/MR_Maintenance";
import MR_General from "../decisionMakerPages/majorRoads/MR_General";

import RG_Maintenance from "../decisionMakerPages/Regions/RG_Maintenance";
import RG_General from "../decisionMakerPages/Regions/RG_General";

import Sidebar from "../decisionMakerPages/SideBar/sidebar";

import axios from "axios";
import Home from './home-test';

//LifeCycle Hooks
class DecisionMaker_App1 extends Component {
  state = {
   urlMajor:
      "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/0",


      urlRegion:
      "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/1",

      urlStreets:
      "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/0",


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
    copyRoads[index].inPriority = !copyRoads[index].inPriority;
    //  copyRoads[index].isUdi=!copyRoads[index].isUdi;
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
    copyRegions[index].inPriority = !copyRegions[index].inPriority;
    //  copyRegions[index].isUdi=!copyRegions[index].isUdi;
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
              path="/RMS/Manager/MRGeneral"
              render={(props) => (
                <MR_General
                  {...props}
                  MRoads={this.state.MRoads}
                  handleClickCheckbox={this.handleClickCheckbox}
                  urlMajor={this.state.urlMajor}
                />
              )}
            />
            {/* second page */}

            <Route
              path="/RMS/Manager/MRMaintenance"
              render={(props) => (
                <MR_Maintenance
                  {...props}
                  MRoads={this.state.MRoads}
                  urlMajor={this.state.urlMajor}
                />
              )}
            />
            {/* ____________________________________________________________________________________________________________________________________________ */}

            {/* first page  */}
            <Route
              path="/RMS/Manager/RgGeneral"
              render={(props) => (
                <RG_General
                  {...props}
                  Regions={this.state.Regions}
                  handleClickRegion={this.handleClickRegion}
                  urlRegion={this.state.urlRegion}
                  urlStreets={this.state.urlStreets}
                />
              )}
            />

            {/* second page */}
            <Route
              path="/RMS/Manager/RGMaintenance"
              render={(props) => (
                <RG_Maintenance
                  {...props}
                  urlRegion={this.state.urlRegion}
                  urlStreets={this.state.urlStreets}
                  Regions={this.state.Regions}
                />
              )}
            />
            <Route path="/RMS/Manager" component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default DecisionMaker_App1;
