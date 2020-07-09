import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
class SectionModal extends Component {
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
      <div>
        <MDBContainer>
          {/* BUTTON */}
          <div
            className="col-sm-6 features-box wow fadeInLeft"
            onClick={this.toggle}
          >
            <button type="button" className="btn btn-primary">
              Add Data
            </button>
          </div>

          {/* MODAL */}
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader
              toggle={this.toggle}
              style={{ "background-color": " rgb(32, 32, 42)" }}
            >
              Login To Road System
            </MDBModalHeader>
            <MDBModalBody style={{ "background-color": " rgb(35, 36, 45)" }}>
              {/* <Login /> */}
              modal text
            </MDBModalBody>
            <MDBModalFooter
              style={{
                "background-color": " rgb(35, 36, 45) ",
                "text-color": "rgb(218, 218, 219)",
              }}
            >
              <MDBBtn color="secondary" onClick={this.toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Save</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default SectionModal;
