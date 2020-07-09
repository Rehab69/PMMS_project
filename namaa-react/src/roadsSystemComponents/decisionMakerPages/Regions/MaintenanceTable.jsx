import React, { Component, Fragment } from "react";

import "../MaintenanceTable.css"

// import ControlledCarousel from "./Slider"
import axios from "axios";

import RG_Table from "../Regions/RG_Table";

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

class MaintenanceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      currentRegion: {
        regionId: 0,
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

  toggle = (Region) => {
    this.setState({
      modal: !this.state.modal,
      currentRegion: Region,
    });
  };



  // const targetData = props.data.filter(item=>item.priority===true)

  render() {
    const { Regions } = this.props;
    const filteredData = Regions.filter((route) => route.inPriority === true);
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

              <MDBModalBody >
                <div>
                  <h4 className="text-center">
                    <strong>Region Details</strong>
                  </h4>
                  <br></br>

                  <div className="form-check mb-4">
                    {
                      <div
                        className="fix"
                        key={this.state.currentRegion.regionId}
                      >
                        <div>
                          <li className="writing">
                            Number of streets:
                            {this.state.currentRegion.noStreets}
                          </li  >

                          <li className="writing">Area:{this.state.currentRegion.area}</li>
                        </div>

                        <div>
                          <li className="writing">Calculated GI:{this.state.currentRegion.udi}</li>

                          <li className="writing">
                            Pavement Condition:{this.state.currentRegion.pavmentcondition}
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
                      <div
                        className="fix"
                        key={this.state.currentRegion.regionId}
                      >
                        <div>
                          <li className="writing">
                            Alligator crack :{this.state.currentRegion.alligator}
                          </li>

                          <li className="writing">Bleeding:{this.state.currentRegion.bleeding}</li>
                          <li className="writing">
                            Long.&Trans:{this.state.currentRegion.longtrans}
                          </li>
                          <li className="writing">Potholes:{this.state.currentRegion.potholes}</li>
                        </div>

                        <div>
                          <li className="writing">
                            Blocking cracks:{this.state.currentRegion.blocking}
                          </li>

                          <li className="writing">Edge cracking :{this.state.currentRegion.edge}</li>

                          <li className="writing">Rutting:{this.state.currentRegion.rutting}</li>
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

                <div className="writing">
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

                <MDBBtn color="primary" onClick={this.toggle}>Save</MDBBtn>

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
                  <th>Region ID</th>
                  <th>Region Name</th>
                  <th>City Name</th>
                  <th>No. of Streets</th>
                  <th>Major Type of Cracks</th>
                  <th>Population</th>
                  <th>Construction Year</th>
                  <th>Calculated GI</th>

                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((Region) => (
                  <tr
                    className="hoverOnRow"
                    key={Region.regionId}
                    style={{ color: "white" }}
                  >
                    <td>{Region.regionId}</td>
                    <td>{Region.RegionName}</td>
                    <td>{Region.city}</td>
                    <td>{Region.noStreets}</td>
                    <td>{Region.MajorTypeOfCracks}</td>
                    <td>{Region.population}</td>
                    <td>{Region.constructionYr}</td>
                    <td style={{ fontSize: "medium", fontWeight: "bolder" }}>
                      <small
                        style={{ position: "static" }}
                        className={
                          Region.udi >= 0 && Region.udi < 30
                            ? "text-danger mr-1"
                            : Region.udi >= 30 && Region.udi < 50
                            ? "text-warning mr-1"
                            : Region.udi >= 50 && Region.udi < 70
                            ? "text-secondary mr-1"
                            : Region.udi >= 70 && Region.udi < 85
                            ? "text-primary mr-1"
                            : Region.udi >= 85
                            ? "text-success mr-1"
                            : null
                        }
                      >
                        <i
                          className={
                            Region.udi >= 50
                              ? "fas fa-arrow-up"
                              : "fas fa-arrow-down"
                          }
                          style={{ margin: "5px" }}
                        />
                      </small>
                      {Region.udi}
                    </td>

                    <td>
                      <span className="myButton  hover" 
                          onClick={() => this.toggle(Region)}
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




