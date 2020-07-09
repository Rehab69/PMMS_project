import React, { useState, useRef } from "react";
import axios from "axios";
import { fn } from "jquery";
import { HashRouter } from "react-router-dom";

export default function BR_Table(props) {



  const checkBoxRef = useRef();



  return (
    <table className="container">
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
          <th>
            <h1>UDI</h1>
          </th>
          <th>
            <h1>Priority</h1>
          </th>
        </tr>
      </thead>

      <tbody>
        {props.data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>

            <td>{row.name}</td>

            <td>{row.name}</td>

            <td>{row.name}</td>

            <td>{row.name}</td>

            <td>{row.name}</td>

            <td>{row.id}</td>

            <td>
              <div class="form-check">
                <span

                

                  class="btn btn-primary"
                 
                ><i   onClick={()=>props.handleClickCheckbox(row)} 
                 className= { row.inPriority===true ?"fas fa-check-circle": "far fa-check-circle" }></i></span>
                <label class="form-check-label" for="defaultCheck1"></label>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}



{/* <i className="far fa-check-circle"></i> */}


{/* <i className="fas fa-check-circle"></i> */}