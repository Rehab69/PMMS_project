import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
//style
import "./modalStyle.css";
//pages
import Login from "./loginComponents/login";
//-------------------------------------------------------------------------------------------------
class RoadsLoginModal extends Component {
  state = {
    modal: false,
    roadSystemUsers: [
      {
        id: 1,
        email: "hala@gmail.com",
        password: "Hala_123",
        role: "dataEntry",
        roleId: 3,
      },
      {
        id: 2,
        email: "mohamed@gmail.com",
        password: "mohamed_123",
        role: "reviewer",
        roleId: 4,
      },
      {
        id: 3,
        email: "asmaa@gmail.com",
        password: "asmaa_123",
        role: "dataEntry",
        roleId: 3,
      },
    ],
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <MDBContainer>
        {/*-------------------------------- BUTTON  --------------------------------*/}
        <div
          className="col-sm-6 features-box wow fadeInLeft btn"
          onClick={this.toggle}
        >
          <div className="row">
            <div className="col-sm-3 features-box-icon">
              <i className="fa fa-road ico-sys" style={{ height: "60px" }}></i>
            </div>
            <div className="col-sm-9 ">
              <h3 style={{ color: "#888888", fontSize: "30px" }}>
                Roads Managment System
              </h3>
            </div>
          </div>
        </div>

        {/*-------------------------------- MODAL --------------------------------*/}
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-lg"
        >
          <MDBModalHeader toggle={this.toggle} classNameName="modal-header">
            <p>Login To Road System</p>
          </MDBModalHeader>
          <MDBModalBody classNameName="modal-body ">
            <Login />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default RoadsLoginModal;
