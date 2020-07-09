import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: {},
  };
  //schema for joi validation
  schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{8,30}$/)
      .required()
      .label("Password"),
  };

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
    if (this.validate()) {
      // Backend
      console.log("submited!!");
    } else {
      //Errors
      console.log("Not valid!!");
      return;
    }
  };

  handleChange = (e) => {
    //Validate
    this.validateProperty({ [e.target.name]: e.target.value }, e.target.name);

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <section
          id="hero"
          class="d-flex align-items-center justify-content-center"
        >
          <div class="container" data-aos="fade-up">
            <div
              class="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div class="col-xl-6 col-lg-8">
                <form
                  class="login100-form validate-form icon-box"
                  onSubmit={this.handleSubmit}
                >
                  {/* ====================================================== */}
                  <div
                    class="wrap-input100 validate-input m-b-10"
                    data-validate="Username is required"
                  >
                    <i class="fa fa-user"></i>
                    <Input
                      // label="Email Address"
                      name="email"
                      value={this.state.email}
                      error={this.state.error.email}
                      onChange={this.handleChange}
                      class="input100"
                      type="text"
                      label="حساب المستخدم"
                    />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100"> </span>
                  </div>

                  <div
                    class="wrap-input100 validate-input m-b-10"
                    data-validate="Password is required"
                  >
                    <i class="fa fa-lock"></i>
                    <Input
                      // label="Password"
                      name="password"
                      value={this.state.password}
                      error={this.state.error.password}
                      onChange={this.handleChange}
                      class="input100"
                      type="password"
                      // name="pass"
                      label="كلمة المرور"
                    />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100"> </span>
                  </div>

                  <div class="container-login100-form-btn p-t-10">
                    <button class="login100-form-btn btn btn-dark">
                      <a href="home_authorized.html">تسجيل دخول</a>
                    </button>
                  </div>

                  <div class="text-center w-full p-b-150">
                    <a href="#" class="txt1">
                      لا اتذكر اسم المستخدم/ كلمة المرور؟
                    </a>
                  </div>

                  <div class="text-center w-full">
                    <a class="txt1" href="#">
                      عمل حساب جديد
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ;<h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Email Address"
            name="email"
            value={this.state.email}
            error={this.state.error.email}
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            name="password"
            value={this.state.password}
            error={this.state.error.password}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form> */}
      </React.Fragment>
    );
  }
}

export default Login;
