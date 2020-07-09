import React, { Component, Fragment } from "react";

// import "../MaintenanceTable.css"

// import ControlledCarousel from "./Slider"
import axios from 'axios'; 

import MR_Table from "../Bridges/BR_Table"



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";





class MaintenanceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, name: "Burger", price: 30, count: 0, inPriority: false },
        { id: 2, name: "Fries", price: 20, count: 0, inPriority: false },
        { id: 3, name: "Cola", price: 10, count: 0, inPriority: true },
        { id: 4, name: "fsdfsdfsdf", price: 10, count: 0, inPriority: true }

      ],
      modal: false,
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/Posts")
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  // const targetData = props.data.filter(item=>item.priority===true)

  render() {
    const filteredData= this.state.data.filter(route=>route.inPriority===true)
    return (
      <Fragment>
        <div>
          <MDBContainer>
            {/* MODAL */}
            <MDBModal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="modal-dialog modal-lg"
            >
              <MDBModalHeader
                toggle={this.toggle}
                style={{ "background-color": " rgb(32, 32, 42)" }}
              >
                {/* Login To Road System */}
              </MDBModalHeader>

              <MDBModalBody style={{ "background-color": " rgb(35, 36, 45)" }}>
                <div>
                  <h4 className="text-center">
                    <strong>Road Details</strong>
                  </h4>
                  <br></br>

                  <div className="form-check mb-4">
                    <div className="fix">
                      <div>
                        <li>No. of Sections:</li>

                        <li>No. of Intersections:</li>
                      </div>

                      <div>
                        <li>Calculated UDI:</li>

                        <li>Pavement Condition:</li>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>

                <div>
                  <h4 className="text-center">
                    <strong>Percentage of defects </strong>
                  </h4>
                  <br></br>

                  <div className="form-check mb-4">
                    <div className="fix">
                      <div>
                        <li>Alligator crack :</li>

                        <li>Bleeding:</li>
                        <li>Long.&Trans:</li>
                        <li>Potholes:</li>
                      </div>

                      <div>
                        <li>Blocking cracks:</li>

                        <li>Edge cracking :</li>

                        <li>Rutting:</li>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>

                <Carousel>
                  <div>
                    <img src="\imges\aa.jpg" />
                    <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img src="\imges\bb.jpg" />
                    <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img src="\imges\cc.jpg" />
                    <p className="legend">Legend 3</p>
                  </div>
                </Carousel>

                <br></br>

                <div className="padding">
                  <h4 className="text-center">
                    <strong>Maintenance procedures</strong>
                  </h4>
                  <br></br>

                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      name="group1"
                      type="radio"
                      id="radio-179"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="radio-179">
                      Preservation
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      name="group1"
                      type="radio"
                      id="radio-279"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="radio-279">
                      Resurface{" "}
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      name="group1"
                      type="radio"
                      id="radio-379"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="radio-379">
                      Major Rehabilitation
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      name="group1"
                      type="radio"
                      id="radio-479"
                      defaultValue="option4"
                    />
                    <label className="form-check-label" htmlFor="radio-479">
                      Reconstruction
                    </label>
                  </div>
                </div>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Expected UDI</span>
                  </div>
                  <input
                    className="udi"
                    type="text"
                    aria-label="Expected UDI"
                    class="form-control"
                  ></input>
                </div>
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

        {/* __________________________________________________________________________________________________________________ */}

        <div className="MaintenanceTable">
          <div className="card-body table-responsive p-0">
            <table className="table table-striped table-valign-middle">
              <thead>
                <tr>
                <th>
                    <h1>Bridge Name</h1>
                  </th>
                  <th>
                    <h1>Number of Lanes</h1>
                  </th>
                  <th>
                    <h1>Length</h1>
                  </th>
                  <th>
                    <h1>Traffic</h1>
                  </th>
                  <th>
                    <h1>Number of sections</h1>
                  </th>
                  <th>
                    <h1>Number of samples</h1>
                  </th>

                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.name}</td>

                    <td>{row.name}</td>

                    <td>{row.name}</td>

                    <td>{row.name}</td>

                    <td>{row.name}</td>

                    <td>{row.name}</td>

                    <td>{row.id}</td>

                    <td style={{ fontSize: "medium", fontWeight: "bolder" }}>
                      <small className="text-success mr-1">
                        <i
                          className="fas fa-arrow-up"
                          style={{ margin: "5px" }}
                        />
                      </small>
                      {row.id}
                    </td>

                    <td>
                      <span className="myButton  hover" onClick={this.toggle}>
                        <i class="fas fa-info"></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MaintenanceTable;
