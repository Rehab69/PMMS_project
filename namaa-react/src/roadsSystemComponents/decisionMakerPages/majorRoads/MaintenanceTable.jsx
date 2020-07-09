import React, { Component, Fragment } from "react";

import "../MaintenanceTable.css";

// import ControlledCarousel from "./Slider"
import axios from "axios";

import MR_Table from "../majorRoads/MR_Table";
import "./reports-style.css";

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
import { error } from "jquery";
import { errors } from "joi-browser";

class MaintenanceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ExpectedUDI: "",
      modal: false,

      currentRoad: {
        roadId: 0,
        noSection: 0,
        noIntersection: 0,
        udi: 0,
        pavmentcondition: 0,
        alligator: 0,
        bleeding: 0,
        longtrans: 0,
        potholes: 0,
        blocking: 0,
        edge: 0,
        rutting: 0,
      },
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/Posts")
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ data: res.data });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  toggle = (road) => {
    console.log(road);

    this.setState({
      modal: !this.state.modal,
      currentRoad: road,
    });
  };

  render() {
    // const {ExpectedUDI} = this.state;
    const { MRoads } = this.props;
    console.log({ MRoads });
    const filteredData = MRoads.filter((route) => route.inPriority === true);
    return (
      <Fragment>
        <div>
          <MDBContainer onSubmit={this.submitHandler}>
            {/* MODAL */}
            <MDBModal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="modal-dialog modal-lg"
            >
              <MDBModalHeader
                toggle={this.toggle}
                style={{ backgroundColor: " rgb(32, 32, 42)" }}
              >
                {/* Login To Road System */}
              </MDBModalHeader>

              <MDBModalBody>
                <div>
                  <h4 className="text-center">
                    <strong>Road Details</strong>
                  </h4>
                  <br></br>

                  <div className="form-check mb-4">
                    {
                      <div className="fix" key={this.state.currentRoad.roadId}>
                        <div>
                          <li className="writing">
                            No. of Sections:{this.state.currentRoad.noSection}
                          </li>

                          <li className="writing">
                            No. of Intersections:
                            {this.state.currentRoad.noIntersection}
                          </li>
                        </div>

                        <div>
                          <li className="writing">
                            Calculated GI: {this.state.currentRoad.udi}
                          </li>

                          <li className="writing">
                            Pavement Condition:
                            {this.state.currentRoad.pavmentcondition}
                          </li>
                        </div>
                      </div>
                    }
                  </div>
                </div>

                <br></br>

                <div>
                  <h4 className="text-center">
                    <strong>Percentage of defects </strong>
                  </h4>
                  <br></br>

                  <div className="form-check mb-4">
                    {
                      <div className="fix" key={this.state.currentRoad.roadId}>
                        <div>
                          <li className="writing">
                            Alligator crack :{this.state.currentRoad.alligator}
                          </li>

                          <li className="writing">
                            Bleeding:{this.state.currentRoad.bleeding}
                          </li>
                          <li className="writing">
                            Long.&Trans:{this.state.currentRoad.longtrans}
                          </li>
                          <li className="writing">
                            Potholes:{this.state.currentRoad.potholes}
                          </li>
                        </div>

                        <div>
                          <li className="writing">
                            Blocking cracks:{this.state.currentRoad.blocking}
                          </li>

                          <li className="writing">
                            Edge cracking :{this.state.currentRoad.edge}
                          </li>

                          <li className="writing">
                            Rutting:{this.state.currentRoad.rutting}
                          </li>
                        </div>
                      </div>
                    }
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

                  <div>
                    <img src="\imges\dd.jpg" />
                    <p className="legend">Legend 3</p>
                  </div>

                  <div>
                    <img src="\imges\ee.jpg" />
                    <p className="legend">Legend 3</p>
                  </div>
                </Carousel>

                <br></br>

                <div  className="writing">
                  <h4 className="text-center">
                    <strong>Maintenance procedures</strong>
                  </h4>
                  <br></br>


<div className="padding" >
                  <input
                  
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                  ></input>
                  <label htmlFor="male"> Preservation</label>

                  <br></br>

                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  ></input>
                  <label htmlFor="female">Resurface</label>

                  <br></br>

                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                  ></input>
                  <label htmlFor="other">Major Rehabilitation</label>

                  <br></br>

                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                  ></input>
                  <label htmlFor="other">Reconstruction</label>
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Cost </span>
                  </div>

                  <input
                    className="udi form-control"
                    type="text"
                    aria-label="Expected UDI"
                    name="ExpectedUDI"
                    // value={ExpectedUDI}
                    // onChange={this.changeHandler}
                  ></input>


</div>





<div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">duration</span>
                  </div>

                  <input
                    className="udi form-control"
                    type="text"
                    aria-label="Expected UDI"
                    name="ExpectedUDI"
                    // value={ExpectedUDI}
                    // onChange={this.changeHandler}
                  ></input>


</div>

                </div>
              </MDBModalBody>

              <MDBModalFooter
                style={{
                  backgroundColor: " rgb(35, 36, 45) ",
                  textColor: "rgb(218, 218, 219)",
                }}
              >
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn color="primary" onClick={this.toggle} type="submit">
                  Save
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </div>

        {/* __________________________________________________________________________________________________________________ */}

        <div className="MaintenanceTable">
          <div className="card-body table-responsive p-0">
            <table
              className="container table table-striped table-valign-middle"
              style={{ maxWidth: "100%" }}
            >
              <thead>
                <tr
                  style={{
                    verticalAlign: "middle",
                    fontSize: "1.4rem",
                    height: "5rem",
                  }}
                >
                  <th>Road ID</th>
                  <th>Road Name</th>
                  <th>City Name</th>
                  <th>Total Length</th>
                  <th>No. of Sections</th>
                  <th>No. of Intersections</th>
                  <th>Calculated GI</th>

                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((road) => (
                  <tr
                    className="hoverOnRow"
                    key={road.roadId}
                    style={{ color: "white" }}
                  >
                    <td>{road.roadId}</td>

                    <td>{road.roadName}</td>

                    <td>{road.city}</td>

                    <td>{road.TotalLength}</td>

                    <td>{road.noSection}</td>

                    <td>{road.noIntersection}</td>

                    <td style={{ fontSize: "medium", fontWeight: "bolder" }}>
                      <small
                        style={{ position: "static" }}
                        className={
                          road.udi > 0 && road.udi < 30
                            ? "text-danger mr-1"
                            : road.udi >= 30 && road.udi < 50
                            ? "text-warning mr-1"
                            : road.udi >= 50 && road.udi < 70
                            ? "text-secondary mr-1"
                            : road.udi >= 70 && road.udi < 85
                            ? "text-primary mr-1"
                            : road.udi >= 85
                            ? "text-success mr-1"
                            : null
                        }
                      >
                        <i
                          className={
                            road.udi >= 50
                              ? "fas fa-arrow-up"
                              : "fas fa-arrow-down"
                          }
                          style={{ margin: "5px" }}
                        />
                      </small>
                      {road.udi}
                    </td>
                    <td>
                      <span
                        className="myButton  hover"
                        onClick={() => this.toggle(road)}
                      >
                        <i className="fas fa-info"></i>
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
