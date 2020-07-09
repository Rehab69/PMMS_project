import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import IntersectionModal from "./intersectionModal";
import Data from "./intersections";
import axios from "axios";
import InterSectionsViewDataModal from "./intersectionViewDataModal";

class Table extends Component {
  state = {
    data: [],
    majorRoadsNames: [
      "Alrabea",
      "Talaat Mostafa",
      "Madinty",
      " Alwady",
      "Talaat Mostafa-2",
      "Alzohor",
    ],
    search: "",
    pageSize: 8,
    activePage: 1,
    intersectionsSamplesReports: [],
  };

  // // handle getting data from server ---> add the data
  async componentDidMount() {
    await axios
      .get("http://localhost:3004/intersections")
      .then((res) => res.data)
      .then((data) => {
        // console.log("section_samples=>" + data);
        this.setState({ data });
      });
    await axios
      .get("http://localhost:3004/intersectionsSamplesReports")
      .then((res) => res.data)
      .then((data) => {
        this.setState({ intersectionsSamplesReports: data });
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
        this.state.data[id].id +
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
        <td>{data.id}</td>
        <td>{data.interId}</td>
        <td>{data.route1Id}</td>
        <td>{data.route2Id}</td>
        <td>
          <IntersectionModal
            id={data.id}
            intersectionId={data.interId}
            route1Id={data.route1Id}
            route2Id={data.route2Id}
            dataEntryConfirmed={data.dataEntryConfirmed}
          />
        </td>
        <td>
          <InterSectionsViewDataModal
            sampleId={data.Id}
            sectionId={data.sectionId}
            roadId={data.roadId}
            roadName={data.roude_name}
            dataEntryConfirmed={data.dataEntryConfirmed}
          />
        </td>
        <td>
          <input
            type="checkbox"
            onClick={() => this.handleToggleConfirm(data.id)}
          />
        </td>
      </tr>
    );
  };
  handleSearch = (s_id) => {
    const data3 = [...this.state.data];
    const filteredDataByIntersectionId = data3.filter(
      (word) => word.interId == s_id
    );
    this.setState({ data: filteredDataByIntersectionId });
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
          {/* --------------------------------search------------------------------------- */}
          <form class="form-inline my-2 my-lg-0 float-right">
            <input
              class="form-control mr-sm-4"
              type="search"
              placeholder="Intersection Id"
              aria-label="Search"
              onKeyUp={(e) => this.handleSearch(e.target.value)}
            />
            <button
              class="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
              onClick={this.handleReset}
            >
              Reset table
            </button>
          </form>
        </div>
        <table className="table" style={{ textAlign: "left" }}>
          <thead>
            <tr>
              <th scope="col">sample Id</th>
              <th scope="col">Intersection Id</th>
              <th scope="col">route(1) Id</th>
              <th scope="col">route(2) Id</th>
              <th scope="col">Add Data</th>
              <th scope="col">View Data</th>

              <th scope="col">confirmed</th>
            </tr>
          </thead>
          <tbody>{this.state.data.map(this.renderData)}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
