import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import axios from "axios";

//styling

//app pages

// import RoadSystemHome from "./roadsSystemComponents/roadSystemHome";
import AdminLikeApp from "./roadsSystemComponents/adminPages/adminpages-like-app";
// import PopupSFC from './roadsSystemComponents/adminPages/test.jsx'
import Login from "./roadsSystemComponents/adminPages/login-test";
// import Signout from './roadsSystemComponents/adminPages/signout-test';
// import Home from './roadsSystemComponents/adminPages/home-test';

import Home from "./outerSystemsComponents/outerHome";
import DataEntry from "./roadsSystemComponents/dataEntryPages/dataEntry";
import DecisionMakerApp1 from "./roadsSystemComponents/decisionMakerPages/decisionMaker_App1";
import AnalystApp from "./roadsSystemComponents/analystPages/Analyst_app";
import Reviewer from "./roadsSystemComponents/reviewerPages/reviewer";
import UserManager from "./roadsSystemComponents/user-manager/user-manager-app";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
  },
  signout(cb) {
    this.isAuthenticated = false;
  },
};

const PrivateRoute = ({ render: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} fakeAuth={fakeAuth} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {
  state = {
    Allusers: [],
    roadAfterCalcUDI: [],
    regionsAfterCalcUDI: [],
    streets: [],
    intersections: [],
    section_samples: [],
    major: [],
    roadAfterDeterminePriority: [],
    regionsAfterDeterminePriority: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3004/Allusers")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ Allusers: data });
      });

    axios
      .get("http://localhost:3004/roadAfterCalcUDI")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ roadAfterCalcUDI: data });
      });

    axios
      .get("http://localhost:3004/regionsAfterCalcUDI")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ regionsAfterCalcUDI: data });
      });
    axios
      .get("http://localhost:3004/streets_samples")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ streets: data });
      });
    axios
      .get("http://localhost:3004/intersections_samples")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ intersections: data });
      });
    axios
      .get("http://localhost:3004/section_samples")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        this.setState({ section_samples: data });
      });

    axios
      .get("http://localhost:3004/major")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        this.setState({ major: data });
      });
    axios
      .get("http://localhost:3004/roadAfterDeterminePriority")
      .then((res) => res.data)
      .then((data) => {
        // const dataMap=data.map(item=>console.log(item))
        // console.log(data)
        this.setState({ roadAfterDeterminePriority: data });
      });
    axios
      .get("http://localhost:3004/regionsAfterDeterminePriority")
      .then((res) => res.data)
      .then((data) => {
        // const dataMap=data.map(item=>console.log(item))
        // console.log(data)
        this.setState({ regionsAfterDeterminePriority: data });
      });
  }

  handleClickCheckbox(route) {

    console.log(route);

  }

  handleClickOnLogin = (email, password) => {
    const users = [...this.state.Allusers];
    const loginUser = users.filter((user) => {
      if (user.name === email && user.password === password) {
        return user;
      }
      return null;
    });
    // console.log(loginUser);
  };

  render() {
    // console.log(this.state);

    return (
      <div className="App NamaaContainer">
        <Switch>
          <Route
            path="/RMS/dataentry"
            render={(props) => (
              <DataEntry
                {...props}
                fakeAuth={fakeAuth}
                intersections={this.state.intersections}
                section_samples={this.state.section_samples}
                major={this.state.major}
                streets={this.state.streets}
              />
            )}
          />

          <Route
            path="/RMS/reviewer"
            render={(props) => (
              <Reviewer
                {...props}
                fakeAuth={fakeAuth}
                // intersections={this.state.intersections}
                // section_samples={this.state.section_samples}
                // major={this.state.major}
                // streets={this.state.streets}
              />
            )}
          />

          <Route
            path="/RMS/Analyst"
            render={(props) => (
              <AnalystApp
                {...props}
                fakeAuth={fakeAuth}
                MRoads={this.state.roadAfterCalcUDI}
                Regions={this.state.regionsAfterCalcUDI}
                handleClickCheckbox={this.handleClickCheckbox}
              />
            )}
          />

          <Route
            path="/RMS/Manager"
            render={(props) => (
              <DecisionMakerApp1
                {...props}
                fakeAuth={fakeAuth}
                roadAfterCalcUDI={this.state.roadAfterCalcUDI}
                regionsAfterCalcUDI={this.state.regionsAfterCalcUDI}
              />
            )}
          />

          <Route
            path="/RMS/DMaker"
            render={(props) => (
              <AdminLikeApp
                {...props}
                Allusers={this.state.Allusers}
                fakeAuth={fakeAuth}
                roadAfterDeterminePriority={
                  this.state.roadAfterDeterminePriority
                }
                regionsAfterDeterminePriority={
                  this.state.regionsAfterDeterminePriority
                }
                roadAfterCalcUDI={this.state.roadAfterCalcUDI}
                regionsAfterCalcUDI={this.state.regionsAfterCalcUDI}
                streets={this.state.streets}
              />
            )}
          />
          <Route
            path="/RMS/UserManager"
            render={(props) => (
              <UserManager
                {...props}
                fakeAuth={fakeAuth}
                Allusers={this.state.Allusers}
              />
            )}
          />

          <Route
            path="/login"
            render={(props) => <Login {...props} fakeAuth={fakeAuth} />}
          />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
