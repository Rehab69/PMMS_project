import React, { useState, useRef } from "react";
import axios from "axios";
import { fn } from "jquery";
import { HashRouter } from "react-router-dom";
import './reports-style.css'


export default function MR_Table(props) {

  const { MRoads } = props;

  const checkBoxRef = useRef();



  return (
    <table className="container table table-striped table-valign-middle" style={{ maxWidth: "100%" }}>
      <thead>
        <tr style={{verticalAlign:'middle',fontSize:'1.4rem',height:'5rem'}}>
          <th>Road ID</th>
          <th>Road Name</th>
          <th>Total Length</th>
          <th>No. of Sections</th>
          <th>No. of Intersections</th>
          <th>Number of samples</th>
          <th>MajorTypeOfCracks</th>
          <th>Calculated GI</th>
          <th>Pavment Condition</th>
          <th>Priority for Maintenance</th>
        </tr>
      </thead>

      <tbody>
        {
        
        
        MRoads.map((road) => (
          <tr className="hoverOnRow" key={road.roadId} style={{color:"white"}}>
            <td>{road.roadId}</td>

            <td>{road.roadName}</td>

            <td>{road.TotalLength}</td>

            <td>{road.noSection}</td>

            <td>{road.noIntersection}</td>

            <td>{road.noSamples}</td>

            <td>{road.MajorTypeOfCracks}</td>

            <td style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
              <small style={{ position: 'static' }} className=
                {road.udi > 0 && road.udi < 30 ? "text-danger mr-1" :
                  road.udi >= 30 && road.udi < 50 ? "text-warning mr-1" :
                    road.udi >= 50 && road.udi < 70 ? "text-secondary mr-1" :
                      road.udi >= 70 && road.udi < 85 ? "text-primary mr-1" :
                        road.udi >= 85 ? "text-success mr-1" : null}
              >
                <i className={
                  road.udi >= 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                }
                               
                style={{ margin: "5px" }} />

              </small>
              {road.udi}
            </td>

            <td>{road.pavmentcondition}</td>
            <td>


              <div className="form-check">
                <span className="btn" style={{backgroundColor:"white"}}>
                  <i onClick={() => props.handleClickCheckbox(road)}
                  className={road.inPriority === true ? "fas fa-check-circle" :"far fa-circle"}></i></span>
                <label className="form-check-label" htmlFor="defaultCheck1"></label>
              </div>

              
            </td>
          </tr>


        ))}





      </tbody>
    </table>
  );
}



{/* <i className="far fa-check-circle"></i> */ }


{/* <i className="fas fa-check-circle"></i> */ }