import React, { Component } from "react";

class Table3 extends Component {
  state = {};

  renderTableData = (d, index) => {
    return (
      <tr key={index}>
        <td>{d.Id}</td>

        <td>{d.Edge_cracking_low ? d.Edge_cracking_low : "----"}</td>
        <td>{d.Edge_cracking_meduim ? d.Edge_cracking_meduim : "----"}</td>
        <td>{d.Edge_cracking_high ? d.Edge_cracking_high : "----"}</td>

        <td>{d.Rutting_low ? d.Rutting_low : "----"}</td>
        <td>{d.Rutting_meduim ? d.Rutting_meduim : "----"}</td>
        <td>{d.Rutting_high ? d.Rutting_high : "----"}</td>

        <td>{d.Long_Trans_low ? d.Long_Trans_low : "----"}</td>
        <td>{d.Long_Trans_meduim ? d.Long_Trans_meduim : "-----"}</td>
        <td>{d.Long_Trans_high ? d.Long_Trans_high : "----"}</td>
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
                Area of Edge cracking
              </th>
              <th
                scope="col"
                colspan="3"
                scope="colgroup"
                style={{ backgroundColor: "rgb(225,225,225,.2)" }}
              >
                Area of Rutting
              </th>
              <th
                scope="col"
                colspan="3"
                scope="colgroup"
                style={{ backgroundColor: "rgb(225,225,225,.1)" }}
              >
                Area of Long &amp; Trans
              </th>
            </tr>
            <tr>
              <th scope="col">street Id</th>
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
export default Table3;
