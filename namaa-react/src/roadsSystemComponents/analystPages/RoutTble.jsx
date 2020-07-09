import React, {  useRef } from "react";

import './reports-style.css'



export default function RoutTable(props) {
  const {MRoads} =props;
 

  return (<>

    <div  >
    <table className="container table table-striped table-valign-middle" style={{ maxWidth: "100%" }}>

    {/* <table className="table table-hover container"> */}
        <thead>
          <tr style={{verticalAlign:'middle',fontSize:'1.4rem'}}>
            <th className="middleTextInth">Route Id</th>
            <th className="middleTextInth">Route Name</th>
            <th className="middleTextInth">No of Sections</th>
            <th className="middleTextInth">No of intersection</th>
            <th className="middleTextInth">No of samples</th>
            <th className="middleTextInth">City</th>
            <th className="middleTextInth">Select to calculate GI</th>
          </tr>
        </thead>
        <tbody>
          {MRoads.map(road => (
            <tr className="hoverOnRow" key={road.roadId} style={{color:"white",fontSize:'1.4rem',fontWeight:'bold'}}>
              <td className="middleTextInth">{road.roadId}</td>
              <td className="middleTextInth">{road.roadName}</td>
              <td className="middleTextInth">{road.noSection}</td>
              <td className="middleTextInth">{road.noIntersection}</td>
              <td className="middleTextInth">{road.noSamples}</td>
              <td className="middleTextInth">{road.city}</td>
              <td className="middleTextInth">
                <div className="form-check">
                  <span className="btn" style={{ backgroundColor: "white" }}>
                    <i onClick={() => props.handleClickCheckbox(road)}
                      className={road.isUdi === true ? "fas fa-check-circle" :"far fa-circle"}></i></span>
                  <label className="form-check-label" htmlFor="defaultCheck1"></label>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>

  </>);

}



