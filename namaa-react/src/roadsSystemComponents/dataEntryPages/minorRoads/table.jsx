import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import MinorRoadsModal from "./minorRoadsModal";
import data from "./minorData";
import axios from "axios";

class Table extends Component {
  state = {
    data: [],
    minorRegoinIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    search: "",
    pageSize: 8,
    activePage: 1,
  };
  // // handle getting data from server ---> add the data
  async componentDidMount() {
    await axios
      .get("http://localhost:3004/streets")
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
        this.state.data[id].OBJECTID +
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
    const filteredDataByRegoinID = dataa.filter((word) => word.regionId == s);
    this.setState({ data: filteredDataByRegoinID });
    this.state.data.map(this.renderData);
  };
  renderData = (data, index) => {
    return (
      <tr key={index}>
        <td>{data.Id}</td>
        <td>{data.regionId}</td>
        <td style={{ textAlign: "right" }}>
          <MinorRoadsModal
            id={data.Id}
            regionId={data.regionId}
            dataEntryConfirmed={data.dataEntryConfirmed}
          />
        </td>
        <td>
          <input
            type="checkbox"
            onClick={() => this.handleToggleConfirm(data.OBJECTID)}
          />
        </td>
      </tr>
    );
  };
  handleSearch = (s_id) => {
    const data3 = [...this.state.data];
    const filteredDataByStreetId = data3.filter((w) => w.minorId == s_id);
    this.setState({ data: filteredDataByStreetId });
    this.state.data.map(this.renderData);
  };
  handleReset = () => {
    const data = [...this.state.data];
    this.setState({ data });
    this.state.data.map(this.renderData);
  };
  render() {
    console.log("initial data : " + this.state.data.roude_name);
    return (
      <React.Fragment>
        <div style={{ height: "30px" }}>
          {/* -------------------------------------filter--------------------------------------- */}
          <div className="float-left">
            <DropdownButton
              id="dropdown-basic-button"
              title="Filter by regoin Id"
            >
              {this.state.minorRegoinIds.map(this.renderStreetFilter)}
            </DropdownButton>
          </div>
          {/* --------------------------------search------------------------------------- */}

          <form className="form-inline my-2 my-lg-0 float-right">
            <input
              className="form-control mr-sm-4"
              type="search"
              placeholder="Search by street Id"
              aria-label="Search"
              onKeyUp={(e) => this.handleSearch(e.target.value)}
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
          <thead>
            <tr>
              <th scope="col">Street Id</th>
              <th scope="col">Regoin Id</th>
              <th scope="col">Add Data</th>
              <th scope="col">Confirmed</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map(this.renderData)}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
