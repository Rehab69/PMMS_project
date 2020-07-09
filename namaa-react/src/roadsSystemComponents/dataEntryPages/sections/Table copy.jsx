import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import SectionModal from "./sectionModal";
import Data from "./data1_Samples";
import SectionsViewDataModal from "./sectionViewDataModal";
import axios from "axios";

class Table extends Component {
  state = {
    data: [],
    majorRoadsNames: [
      "Alrabea",
      "Talaat Mostafa",
      "Madinty",
      "Alwady",
      "Talaat Mostafa-2",
      "Alzohor",
    ],
    search: "",
    pageSize: 8,
    activePage: 1,
  };

  // // handle getting data from server ---> add the data
  async componentDidMount() {
    await axios
      .get("http://localhost:3004/section_samples")
      .then((res) => res.data)
      .then((data) => {
        console.log("section_samples=>" + data);
        this.setState({ data });
      });
  }

  handleToggleConfirm = (id) => {
    console.log("clicked id =>  " + id);
    //clone
    const data = [...this.state.data];
    //Edit
    data[id].dataEntryConfirmed = !data[id].dataEntryConfirmed;
    //Set State
    this.setState({ data });
    console.log(
      "obj id to be confirmed => " +
        this.state.data[id].Id +
        " , confirmd => " +
        this.state.data[id].dataEntryConfirmed
    );
  };
  renderStreetFilter = (data, index) => {
    return (
      <Dropdown.Item onClick={() => this.handleFilteredTable(data)}>
        {data}
      </Dropdown.Item>
    );
  };
  handleFilteredTable = (s) => {
    const dataa = [...this.state.data];
    const filteredDataByRoadName = dataa.filter((word) => word.roude_name == s);
    this.setState({ data: filteredDataByRoadName });
    this.state.data.map(this.renderData);
  };
  renderData = (data, index) => {
    return (
      <tr key={index}>
        <td>{data.Id}</td>
        <td>{data.sectionId}</td>
        <td>{data.roadId}</td>
        <td>{data.roude_name}</td>
        <td>
          <SectionModal sampleId={data.Id} />
        </td>
        <td>
          <SectionsViewDataModal sampleId={data.Id} />
        </td>
        <td>
          <input
            type="checkbox"
            onClick={() => this.handleToggleConfirm(data.Id)}
          />
        </td>
      </tr>
    );
  };
  handleSearch = (s_id) => {
    const data3 = [...this.state.data];
    const filteredDataBySampleId = data3.filter((d) => d.Id == s_id);
    this.setState({ data: filteredDataBySampleId });
    this.state.data.map(this.renderData);
  };
  handleReset = () => {
    const data = [...this.state.data];
    this.setState({ data });
    this.state.data.map(this.renderData);
  };
  // handlePagination = () => {
  //   const data4 = [...this.state.data];
  //   const res1 = data4.legth / this.state.pageSize;
  //   const res2 = data4.legth % this.state.pageSize;
  //   res2 === 0 ? (btnNums = res1) : (btnNums = res2);
  //   btnNums.map(() => {
  //     <li className="page-item">
  //       <p className="page-link">1</p>
  //     </li>;
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <div style={{ height: "30px" }}>
          {/* -------------------------------------filter--------------------------------------- */}
          <div className="float-left">
            <DropdownButton
              id="dropdown-basic-button"
              title="Filter by Street Name"
            >
              {this.state.majorRoadsNames.map(this.renderStreetFilter)}
            </DropdownButton>
          </div>
          {/* --------------------------------search------------------------------------- */}
          <form className="form-inline my-2 my-lg-0 float-right">
            <input
              className="form-control mr-sm-4"
              type="search"
              placeholder="Search by sample Id"
              aria-label="Search"
              onChange={(e) => this.handleSearch(e.target.value)}
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
              onClick={this.handleReset}
            >
              Reset table
            </button>
          </form>
        </div>
        <table className="table">
          <thead style={{ backgroundColor: "rgb(35, 35, 46)" }}>
            <tr id="tr">
              <th scope="col">Sample Id</th>
              <th scope="col">Section Id</th>
              <th scope="col">Road Id</th>
              <th scope="col">Road Name</th>
              <th scope="col">Add Data</th>
              <th scope="col">View Data</th>
              <th scope="col">Confirmed</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map(this.renderData)}</tbody>
        </table>
        {/* -----------------------------pagination --------------------------------*/}
        {/* <nav aria-label="Page navigation ">
          <ul className="pagination">{this.handlePagination}</ul>
        </nav> */}
      </React.Fragment>
    );
  }
}

export default Table;
