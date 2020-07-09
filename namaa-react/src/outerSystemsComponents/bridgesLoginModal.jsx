import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
//pages
import Login from "./loginComponents/login";

class BridgesLoginModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <MDBContainer>
        <div
          className="col-sm-6 features-box wow fadeInLeft btn "
          onClick={this.toggle}
        >
          <div className="row">
            <div className="col-sm-3 features-box-icon">
              <img
                className="ico-sys"
                src="./outerSystems_assets/b1.svg"
                style={{ height: "60px" }}
              />
            </div>
            <div className="col-sm-9">
              <h3 style={{ color: "#888888", fontSize: "30px" }}>
                Bridges Management System
              </h3>
            </div>
          </div>
        </div>

        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            Login To Bridges System{" "}
          </MDBModalHeader>
          <MDBModalBody classNameName="modal-body">
            <Login />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default BridgesLoginModal;
