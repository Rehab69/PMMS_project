import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Register extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    department: "",
    job_title: "",
    error: {},
  };
  //schema for joi validation
  schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
    name: Joi.string().string().required().label("name"),
    department: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("department"),
    job_title: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("job_title"),
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
                      name="name"
                      value={this.state.name}
                      error={this.state.error.email}
                      onChange={this.handleChange}
                      class="input100"
                      type="text"
                      label="اسم المستخدم"
                    />

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
                    <Input
                      name="department"
                      value={this.state.department}
                      error={this.state.error.email}
                      onChange={this.handleChange}
                      class="input100"
                      type="text"
                      label=" القسم"
                    />
                    <Input
                      name="job title"
                      value={this.state.job_title}
                      error={this.state.error.email}
                      onChange={this.handleChange}
                      class="input100"
                      type="text"
                      label=" الوظيفة"
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
                    <Input
                      // label="Password"
                      name="password"
                      value={this.state.password}
                      error={this.state.error.password}
                      onChange={this.handleChange}
                      class="input100"
                      type="password"
                      // name="pass"
                      label=" تأكيد كلمة المرور"
                    />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100"> </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Register;
