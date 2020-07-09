import React, { Component } from "react";
import axios from "axios";

class Table1 extends Component {
  state = {};

  renderTableData = (d, index) => {
    return (
      <tr key={index}>
        <td style={{ verticalAlign: "middle" }}>{d.Id}</td>
        <td style={{ verticalAlign: "middle" }}>{d.interId}</td>
        <td style={{ verticalAlign: "middle" }}>{d.route1Id}</td>
        <td style={{ verticalAlign: "middle" }}>{d.route2Id}</td>

        <td style={{ verticalAlign: "middle" }}>{d.Survey_No}</td>
        <td style={{ verticalAlign: "middle" }}>{d.Collected_Date}</td>
        <td style={{ verticalAlign: "middle" }}>{d.Survey_Responsible}</td>
        <td style={{ verticalAlign: "middle" }}>
          {d.Comment ? d.Comment : "No Comments"}
        </td>
        <td style={{ verticalAlign: "middle" }}>
          {d.Images ? d.Images : "No Images"}
        </td>
        <td style={{ verticalAlign: "middle" }}>{d.Entry_Date}</td>
        <td style={{ verticalAlign: "middle" }}>{d.Data_Entry_Responsible}</td>
      </tr>
    );
  };

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th
              scope="col"
              colspan="11"
              scope="colgroup"
              style={{
                borderBottomColor: "rgb(255, 255, 255)",
              }}
            ></th>
          </tr>
          <tr>
            <th
              scope="col"
              colspan="4"
              scope="colgroup"
              style={{ backgroundColor: "rgb(225,225,225,.2)" }}
            >
              Samples Inventory Data
            </th>
            <th
              scope="col"
              colspan="5"
              scope="colgroup"
              style={{ backgroundColor: "rgb(225,225,225,.1)" }}
            >
              Surveying data
            </th>
            <th
              scope="col"
              colspan="2"
              scope="colgroup"
              style={{ backgroundColor: "rgb(225,225,225,.2)" }}
            >
              Data Entry
            </th>
          </tr>
          <tr>
            <th style={{ verticalAlign: "middle" }} scope="col">
              Sample Id
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              InterSection Id
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              road(1) Id
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              road(2) Id
            </th>

            <th style={{ verticalAlign: "middle" }} scope="col">
              Survey_No
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              Collected_Date
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              Survey_Responsible
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              Comment
            </th>

            <th style={{ verticalAlign: "middle" }} scope="col">
              Images
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              Entry_Date
            </th>
            <th style={{ verticalAlign: "middle" }} scope="col">
              Data_Entry
            </th>
          </tr>
        </thead>
        <tbody>{this.props.confirmedData.map(this.renderTableData)}</tbody>
      </table>
    );
  }
}

export default Table1;
