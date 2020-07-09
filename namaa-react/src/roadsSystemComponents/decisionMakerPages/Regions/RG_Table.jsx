import React, { useState, useRef } from "react";
import axios from "axios";
import { fn } from "jquery";
import { HashRouter } from "react-router-dom";
import './reports-style.css'
export default function RG_Table(props) {

  const { Regions } = props;

  const checkBoxRef = useRef();



  return (
    <table className="container table table-striped table-valign-middle" style={{ maxWidth: "100%" }}>

      <thead>
        <tr style={{verticalAlign:'middle',fontSize:'1.4rem',height:'5rem'}}>
          <th>
            Region ID
          </th>
          <th>
            Region Name
          </th>
          <th>
            Number of streets
          </th>
          <th>
            Area
          </th>
          <th>
            population
          </th>
          <th>
          Pavment Condition
          </th>
          <th>
          Calculated GI
          </th>
          <th>
            Priority
          </th>
        </tr>
      </thead>

      <tbody>
        {
        
        
        Regions.map((region) => (
          <tr className="hoverOnRow" key={region.regionId} style={{color:"white",fontSize:'1.4rem',fontWeight:'bold'}}>
            <td>{region.regionId}</td>
            <td>{region.RegionName}</td>

            <td>{region.noStreets}</td>

            <td>{region.area} M2</td>

            <td>{region.population}</td>


            <td>
              <small style={{ position: 'static' }} className=
                {region.udi > 0 && region.udi < 30 ? "text-danger mr-1" :
                  region.udi >= 30 && region.udi < 50 ? "text-warning mr-1" :
                    region.udi >= 50 && region.udi < 70 ? "text-secondary mr-1" :
                      region.udi >= 70 && region.udi < 85 ? "text-primary mr-1" :
                        region.udi >= 85 ? "text-success mr-1" : null}
              >
                <i className={
                  region.udi >= 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                
                
                } 
                
                style={{ margin: "5px" }} />

              </small>
              {region.udi}
            </td>

            <td>{region.pavmentcondition}</td>


            <td>
              <div className="form-check">
                <span
                  className="btn" style={{ backgroundColor: "white" }}
                ><i onClick={() => props.handleClickRegion(region)}
                  className={region.inPriority === true ? "fas fa-check-circle" : "far fa-circle"}></i></span>
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