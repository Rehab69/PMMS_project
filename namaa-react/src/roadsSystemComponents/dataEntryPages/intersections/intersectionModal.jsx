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
import IntersectionsForm from "./intersectionForm";

class InterSectionsModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    console.log("in_intersectionModal =>" + " " + this.props.id);
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
          <Button variant="link" style={{ padding: 0, margin: 0 }}>
            Add
          </Button>
        </div>

        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <MDBModalHeader
            toggle={this.toggle}
            style={{
              " border-width": 0,
              padding: 10,
              marginBottom: 0,
              "background-color": "#cccccc",
              color: "#3f3f44",
            }}
          >
            report of sample {this.props.id}
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
            <IntersectionsForm {...this.props} />
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
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default InterSectionsModal;
