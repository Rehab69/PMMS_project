import React, { Component } from "react";

class Table2 extends Component {
  state = {};

  renderTableData = (d, index) => {
    return (
      <tr key={index}>
        <td>{d.Id}</td>
        {/*
    Edge_cracking_low: null,
    Edge_cracking_meduim: null,
    Edge_cracking_high: null,
    Rutting_low: null,
    Rutting_meduim: null,
    Rutting_high: null,
    Long_Trans_low: null,
    Long_Trans_meduim: null,
    Long_Trans_high: null,
   */}
        <td>{d.Alligator_crack_low ? d.Alligator_crack_low : "----"}</td>
        <td>
          {d.Alligator_crack_meduim ? d.Alligator_crack_severity : "----"}
        </td>
        <td>{d.Alligator_crack_high ? d.Alligator_crack_area : "----"}</td>

        <td>{d.Bleeding_low ? d.Bleeding_low : "----"}</td>
        <td>{d.Bleeding_meduim ? d.Bleeding_meduim : "----"}</td>
        <td>{d.Bleeding_high ? d.Bleeding_area : "----"}</td>

        <td>{d.Blocking_cracks_low ? d.Blocking_cracks_low : "----"}</td>
        <td>{d.Blocking_cracks_meduim ? d.Blocking_cracks_meduim : "-----"}</td>
        <td>{d.Blocking_cracks_high ? d.Blocking_cracks_high : "----"}</td>
      </tr>
    );
  };
  render() {
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th
                scope="col"
                colspan="10"
                scope="colgroup"
                style={{
                  borderBottomColor: "rgb(255, 255, 255)",
                }}
              ></th>
            </tr>
            <tr>
              <th
                scope="col"
                colspan="1"
                scope="colgroup"
                style={{ backgroundColor: "rgb(225,225,225,.2)" }}
              ></th>
              <th
                scope="col"
                colspan="3"
                scope="colgroup"
                style={{ backgroundColor: "rgb(225,225,225,.1)" }}
              >
                Area of Alligator cracks
              </th>
              <th
                scope="col"
                colspan="3"
                scope="colgroup"
                style={{ backgroundColor: "rgb(225,225,225,.2)" }}
              >
                Area of Bleeding
              </th>
              <th
                scope="col"
                colspan="3"
                scope="colgroup"
                style={{ backgroundColor: "rgb(225,225,225,.1)" }}
              >
                Area of Blocking cracks
              </th>
            </tr>
            <tr>
              <th scope="col">Sample Id</th>
              <th scope="col">low Severity</th>
              <th scope="col">meduim Severity</th>
              <th scope="col">High Severity</th>

              <th scope="col">low Severity</th>
              <th scope="col">meduim Severity</th>
              <th scope="col">High Severity</th>

              <th scope="col">low Severity</th>
              <th scope="col">meduim Severity</th>
              <th scope="col">High Severity</th>
            </tr>
          </thead>
          <tbody>{this.props.confirmedData.map(this.renderTableData)}</tbody>
        </table>
      </>
    );
  }
}
export default Table2;
