import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { Link, Redirect, Route } from "react-router-dom";

import DataEntry from "./../../roadsSystemComponents/dataEntryPages/dataEntry";

import Reviewer from "./../../roadsSystemComponents/reviewerPages/reviewer";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {},
    users: [
      { email: "hala.abdelmaksoud711@gmail.com", role: "dataentry" },
      { email: "asmaa_201421@yahoo.com", role: "reviewer" },
    ],
    path: "/RMS/dataentry",
  };

  //schema for joi validation
  schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().required(),
  };
  // .regex(/^[a-zA-Z0-9]{8,30}$/)

  validate = () => {
    const error = {};
    //clone state
    const data = { ...this.state };
    //delete error from state
    delete data.error;
    //USING JOI Validation  //abortEarly:flase==>> to show all errors
    const res = Joi.validate(data, this.schema, { abortEarly: false });

    if (res.error) {
      //Set State
      for (const detail of res.error.details) {
        error[detail.path[0]] = detail.message;
      }
      this.setState({ error });
      return false;
    } else {
      this.setState({ error });
      return true;
    }
  };

  validateProperty = (property, propertyName) => {
    //Data
    const data = property;
    //Schema
    const schema = { [propertyName]: this.schema[propertyName] };

    const res = Joi.validate(data, schema);

    if (res.error === null) {
      delete this.state.error[propertyName];
    } else {
      //Clone
      const newError = { ...this.state.error };
      //Edit
      newError[propertyName] = res.error.details[0].message;
      //Set State
      this.setState({ error: newError });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // if (this.validate()) {
    //   // Backend
    //   console.log("submited!!");
    // } else {
    //   //Errors
    //   console.log("Not valid!!");
    //   return;
    // }
  };
  handleChange = (e) => {
    //Validate
    // this.validateProperty({ [e.target.name]: e.target.value }, e.target.name);

    this.setState({ [e.target.name]: e.target.value });
    console.log("email==>" + "" + this.state.email);

    if (this.state.email === "Hala") {
      this.setState({ path: "/RMS/dataentry" });
    }
    else if (this.state.email === "Asmaa") {
      this.setState({ path: "/RMS/reviewer" });
    }else if(this.state.email==="Mahmoud"){
      this.setState({path:"/RMS/DMaker"})
    }else if(this.state.email==="Ahmed"){
      this.setState({path:"/RMS/Manager"})
    }else if(this.state.email==="Rehab"){
      this.setState({path:"/RMS/Analyst"})
    }else if(this.state.email==="Rehab2"){
        this.setState({path:"/RMS/userManager"})
    }else {
      this.setState({path:'/'})
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          data-aos="fade-up"
          style={{ textAlign: "center" }}
        >
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <form
                className="validate-form icon-box"
                onSubmit={this.handleSubmit}
              >
                {/* ====================================================== */}
                <div
                  className="validate-input"
                  data-validate="Username is required"
                >
                  <i className="fa fa-user"></i>
                  <Input
                    style={{ height: "20%" }}
                    label="Email Address"
                    name="email"
                    value={this.state.email}
                    error={this.state.error.email}
                    onChange={this.handleChange}
                    type="text"
                  />
                </div>

                <div
                  className="validate-input m-b-10"
                  data-validate="Password is required"
                >
                  <i className="fa fa-lock"></i>
                  <Input
                    label="Password"
                    name="password"
                    value={this.state.password}
                    error={this.state.error.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </div>
                <div className="container-login100-form-btn p-t-10">
                  <Link to={this.state.path}>
                    <button className=" btn btn-dark">Login</button>
                  </Link>
                </div>
                <div className="text-center">forget email / password?</div>
                <div className="text-center w-full">create new account ?</div>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
