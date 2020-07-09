import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import { CSVLink } from "react-csv";
//map
import SectionsMap from "./sectionsMap";
//tables
import Table1 from "./tables1";
import Table2 from "./tables2";
import Table3 from "./tables3";

class Sections extends Component {
  state = {
    SectionsSamplesReports: [],
    confirmedData: [],
    headers: [
      { label: "Sample Id", key: "Id" },
      { label: "Section Id", key: "Section_ID" },
      { label: "Survey_No", key: "Survey_No" },
      { label: "Collected_Date", key: "Collected_Date" },
      { label: "Survey_Responsible", key: "Survey_Responsible" },
      { label: "Comment", key: "Comment" },
      { label: "Entry_Date", key: "Entry_Date" },
      { label: "Data_Entry", key: "Data_Entry_Responsible" },
      { label: "Alligator crack", key: "Alligator_crack" },
      { label: "Severity", key: "Alligator_crack_severity" },
      { label: "Area In M2", key: "Alligator_crack_area" },
      { label: "Bleeding", key: "Bleeding" },
      { label: "Severity", key: "Bleeding_severity" },
      { label: "Area In M2", key: "Bleeding_area" },
      { label: "Blocking_cracks", key: "Blocking_cracks" },
      { label: "Severity", key: "Blocking_cracks_severity" },
      { label: "Area In M2", key: "Blocking_cracks_area" },
      { label: "Edge crack", key: "Edge_cracking" },
      { label: "Severity", key: "Edge_cracking_severity" },
      { label: "Area In M2", key: "Edge_cracking_area" },
      { label: "Rutting", key: "Rutting" },
      { label: "Severity", key: "Rutting_severity" },
      { label: "Area In M2", key: "Rutting_area" },
      { label: "Long_Trans", key: "Long_Trans" },
      { label: "Severity", key: "Long_Trans_severity" },
      { label: "Area In M2", key: "Long_Trans_area" },
    ],
  };
  async componentDidMount() {
    await axios
      .get("http://localhost:3004/SectionsSamplesReports")
      .then((res) => res.data)
      .then((data) => {
        this.setState({ SectionsSamplesReports: data });
        const confirmedData = this.state.SectionsSamplesReports.filter(
          (d) => d.dataEntryConfirmed === true
        );
        this.setState({ confirmedData });
      });
  }
  render() {
    return (
      <div className="main_content">
        <div
          className="header sticky-top"
          style={{
            backgroundColor: "rgb(44, 44, 52)",
            borderBottomColor: " rgb(10, 11, 24)",
          }}
        >
          <i className="fas fa-bars"></i>&nbsp; Home / Major Roads / Sections
        </div>
        <div className="info">
          <div classNameNameNameName="cont1">
            <div className="card">
              <div className="card-header map-card-head">Sections</div>
              <div className="card-body  map-card-body">
                <SectionsMap />
              </div>
            </div>
          </div>
          <div>
            <div className="card ">
              <div className="card-header" style={{ marginBottom: 0 }}>
                List of reports
              </div>
              <div className="card-body">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ul className="nav">
                    <li className="nav-item">
                      <Link
                        style={{ color: "rgb(107, 97, 139)" }}
                        className="nav-link active"
                        to="/rms/reviewer/majorroads/sections/general"
                      >
                        General data
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        style={{ color: "rgb(107, 97, 139)" }}
                        className="nav-link active"
                        to="/rms/reviewer/majorroads/sections/defects"
                      >
                        defects(1)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        style={{ color: "rgb(107, 97, 139)" }}
                        className="nav-link active"
                        to="/rms/reviewer/majorroads/sections/defects2"
                      >
                        defects(2)
                      </Link>
                    </li>
                  </ul>
                  <div>
                    <CSVLink
                      data={this.state.confirmedData}
                      headers={this.state.headers}
                      filename={"section-samples.csv"}
                      className="btn btn-info"
                      target="_blank"
                      style={{ padding: "1rem", marginRight: "1.25rem" }}
                    >
                      Export CSV file
                    </CSVLink>
                    <button
                      className="btn btn-primary"
                      style={{ padding: "1rem", marginRight: "1.25rem" }}
                      onClick={() =>
                        this.props.createAndDownloadPDF(
                          this.state.confirmedData,
                          "Sections-reports-of-Reviewers"
                        )
                      }
                    >
                      Export PDF
                    </button>
                  </div>
                </div>
                <Switch>
                  <Route
                    path="/rms/reviewer/majorroads/sections/defects2"
                    render={(props) => (
                      <Table3
                        {...props}
                        confirmedData={this.state.confirmedData}
                      />
                    )}
                  />
                  <Route
                    path="/rms/reviewer/majorroads/sections/defects"
                    render={(props) => (
                      <Table2
                        {...props}
                        confirmedData={this.state.confirmedData}
                      />
                    )}
                  />
                  <Route
                    path="/rms/reviewer/majorroads/sections/general"
                    render={(props) => (
                      <Table1
                        {...props}
                        confirmedData={this.state.confirmedData}
                      />
                    )}
                  />
                  <Route
                    path="/rms/reviewer/majorroads/sections"
                    render={(props) => (
                      <Table1
                        {...props}
                        confirmedData={this.state.confirmedData}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sections;
