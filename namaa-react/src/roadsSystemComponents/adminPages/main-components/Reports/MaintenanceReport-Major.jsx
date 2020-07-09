import React,{useState} from 'react';
import { CSVLink } from "react-csv";

import '../../CSS files/reports-style.css'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// import {
//   MDBContainer,
//   MDBBtn,
//   MDBModal,
//   MDBModalBody,
//   MDBModalHeader,
//   MDBModalFooter,
// } from "mdbreact";




import '../../CSS files/reports-style.css'
import Search from '../../helpers/pagination-search-filter/search';
// import { set } from 'lodash';

const MaintenanceReportMajor = (props) => {
    const { searchValue, handleOnChange,AllRoads } = props


    const headers = [
        { label: "Road ID", key: "roadId" },
        { label: "Road Name", key: "roadName" },
        { label: "City", key: "city" },
        { label: "Total Length", key: "TotalLength" },
        { label: "No. Of Sections", key: "noSection" },
        { label: "No. Of Intersections", key: "noIntersection" },
        { label: "Major Type Of Cracks in Road", key: "MajorTypeOfCracks" },
        { label: "GI", key: "udi" },
        { label: "Pavement Condition", key: "pavmentcondition" },
        { label: "Road Construction Year", key: "constructionYr" },
        { label: "Life Achieved of Road", key: "lifeAchieved" },
        { label: "Asset Age", key: "assetAge" }
    ];


    /////Searching///////////////
    const searchValueWithoutSpace = searchValue.trim()
    var searchedAllMRsInMaintenance = AllRoads;

    if (searchValueWithoutSpace !== "") {
        const allSearchedMRs = [...searchedAllMRsInMaintenance]
    
        searchedAllMRsInMaintenance = allSearchedMRs.filter(MR => {
            const copyMR = {...MR}
            if (copyMR.roadName.toLowerCase().includes(searchValueWithoutSpace)) {
                return MR;
            }
            return null
        })
    }
    ///////////////////////////////////
//    const handleClickOnDetails =()=>{
//        setModal({modal:true})
//    }
//    const toggle = () => {
       
//         set({modal:!modal})
//       };

    return (
        <>
        <div >
            <div className="card"   style={{background: "#3a3f48",color: "white"}}>
                <div className="card-header border-0" >
                    <h3 className="card-title">Major Roads Maintenance Report</h3>
                    <div className="card-tools">
                    <div className="row">
                    <Search handleOnChange={handleOnChange} />
                        <CSVLink data={AllRoads} headers={headers}
                            filename={"my-file.csv"}
                            className="btn btn-info"
                            target="_blank"
                             style={{padding:"1rem", marginRight:"1.25rem"}}
                        >
                            Export CSV file
                    </CSVLink>
					  <button className="btn btn-primary"
					  onClick={()=>props.createAndDownloadPDF(AllRoads,"Maintenance Report Of Major Roads")
					  }>Export PDF File</button>
                    
                    
                    
                    </div>
                </div>
             
                </div>

                <div className="card-body table-responsive p-0" style={{ maxHeight: "70vh" }}>

                    <table className="table table-striped table-valign-middle">
                        <thead>
                            <tr>
                                <th>Road ID</th>
                                <th>Road Name</th>
                                <th>City Name</th>
                                <th>Total Length</th>
                                <th>No. of Sections</th>
                                <th>No. of Intersections</th>
                                <th>Major Type of Cracks in roads</th>
                                <th>Calculated GI</th>
                                <th>Pavement Condition</th>
                                <th>Road Construction Year</th>
                                <th>Life Achieved of Road</th>
                                <th>Asset Age</th>
                                {/* <th>More Details</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {searchedAllMRsInMaintenance.map(road => (
                                <tr className="hoverOnRow" key={road.roadId}>
                                    <td>{road.roadId}</td>
                                    <td>{road.roadName}</td>
                                    <td>{road.city}</td>
                                    <td>{road.TotalLength} KM</td>
                                    <td>{road.noSection}</td>
                                    <td>{road.noIntersection}</td>
                                    <td>{road.MajorTypeOfCracks}</td>
                                    <td style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
                                        <small style={{position:'static'}} className=


                                            {road.udi > 0 && road.udi < 30 ? "text-danger mr-1" :
                                                road.udi > 30 && road.udi < 50 ? "text-warning mr-1" :
                                                    road.udi > 50 && road.udi < 70 ? "text-secondary mr-1" :
                                                        road.udi > 70 && road.udi < 85 ? "text-primary mr-1" :
                                                            road.udi >85? "text-success mr-1":null}



                                        >
                                            <i className={

                                                road.udi > 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                                            } style={{ margin: "5px" }} />

                                        </small>
                                        {road.udi}
                                    </td>
                                    <td>{road.pavmentcondition}</td>
                                    <td>{road.constructionYr}</td>
                                    <td>{road.lifeAchieved} Yr</td>
                                    <td>{road.assetAge} Yr</td>
                                    {/* <td style={{ width: '1vw' }} >
                                        <Link to="#" className="text-muted">
                                            <i className="fas fa-search" />
                                        </Link>
                                    </td> */}

                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    
    
        {/* <MDBContainer> */}
            {/* MODAL */}
            {/* <MDBModal
              isOpen={modal}
              toggle={toggle}
              className="modal-dialog modal-lg"
            >
              <MDBModalHeader
                toggle={toggle}
                style={{ "background-color": " rgb(32, 32, 42)" }}
              >
                {/* Login To Road System */}
              {/* </MDBModalHeader>

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

                <br></br>  */}

                {/* <Carousel> */}
                  {/* <div>
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
                </Carousel> */}

                {/* <br></br>

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
                <MDBBtn color="secondary" onClick={toggle}>
                  Close
                </MDBBtn>
                <MDBBtn color="primary">Save</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer> */}

    </>
    );
}

export default MaintenanceReportMajor;