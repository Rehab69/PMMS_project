import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import Button from "react-bootstrap/Button";
import SectionsForm from "./sectionsForm";

class SectionsModal extends Component {
  state = {
    modal: false,
    Id: this.props.sampleId,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <div
          className="col-sm-6 features-box wow fadeInLeft "
          style={{ padding: 0, margin: 0 }}
          onClick={this.toggle}
        >
          <Button variant="link">Add</Button>
        </div>

        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <MDBModalHeader
            toggle={this.toggle}
            style={{
              fontSize: "17px",
              " border-width": 0,
              padding: 10,
              marginBottom: 0,
              "background-color": "#cccccc",
              color: "#3f3f44",
            }}
          >
            Report of sample {this.props.sampleId}
          </MDBModalHeader>
          <MDBModalBody
            style={{
              padding: 10,
              margin: 0,
              marginBottom: 0,
              "background-color": "#cccccc",
              color: "#3f3f44",
            }}
          >
            <SectionsForm {...this.props} />
          </MDBModalBody>
          <MDBModalFooter
            style={{
              "text-color": "rgb(218, 218, 219)",
              "background-color": "#cccccc",
              color: "#3f3f44",
              padding: 10,
              margin: 0,
            }}
          >
            <MDBBtn color="light" onClick={this.toggle}>
              Close
            </MDBBtn>
            {/* <MDBBtn color="primary">Save</MDBBtn> */}
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SectionsModal;
