import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import { CSVLink } from "react-csv";
//map
import Map from "./Map";
//tables
import Table1 from "./tables";
import Table2 from "./tables2";
import Table3 from "./tables3";

class InterSections extends Component {
  state = {
    intersectionsSamplesReports: [],
    confirmedData: [],

    headers: [
      { label: "Sample Id", key: "Id" },
      { label: "Intersection Id", key: "Intersection_ID" },
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
      .get("http://localhost:3004/intersectionsSamplesReports")
      .then((res) => res.data)
      .then((data) => {
        this.setState({ intersectionsSamplesReports: data });
        const confirmedData = this.state.intersectionsSamplesReports.filter(
          (d) => d.dataEntryConfirmed === true
        );
        this.setState({ confirmedData });
      });
  }
  render() {
    return (
      <div class="main_content">
        <div
          class="header"
          style={{
            backgroundColor: "rgb(44, 44, 52)",
            borderBottomColor: " rgb(10, 11, 24)",
          }}
        >
          <i class="fas fa-bars"></i> Home / Major Roads / Intersections
        </div>
        <div class="info">
          <div className="cont1">
            <div class="card">
              <div class="card-header map-card-head">Intersections</div>
              <div class="card-body  map-card-body">
                <Map />
              </div>
            </div>
            <div class="card">
              <div class="card-header map-card-head">List of Reports</div>
              <div class="card-body  map-card-body">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ul className="nav">
                    <li className="nav-item">
                      <Link
                        style={{ color: "rgb(107, 97, 139)" }}
                        className="nav-link active"
                        to="/rms/reviewer/majorroads/intersections/general"
                      >
                        General data
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        style={{ color: "rgb(107, 97, 139)" }}
                        className="nav-link active"
                        to="/rms/reviewer/majorroads/intersections/defects"
                      >
                        defects(1)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        style={{ color: "rgb(107, 97, 139)" }}
                        className="nav-link active"
                        to="/rms/reviewer/majorroads/intersections/defects2"
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
                          "Streets-reports-of-Reviewer"
                        )
                      }
                    >
                      Export PDF
                    </button>
                  </div>
                </div>
                <Switch>
                  <Route
                    path="/rms/reviewer/majorroads/intersections/defects2"
                    render={(props) => (
                      <Table3
                        {...props}
                        confirmedData={this.state.confirmedData}
                        createAndDownloadPDF={this.props.createAndDownloadPDF}
                      />
                    )}
                  />

                  <Route
                    path="/rms/reviewer/majorroads/intersections/defects"
                    render={(props) => (
                      <Table2
                        {...props}
                        confirmedData={this.state.confirmedData}
                        createAndDownloadPDF={this.props.createAndDownloadPDF}
                      />
                    )}
                  />
                  <Route
                    path="/rms/reviewer/majorroads/intersections/general"
                    render={(props) => (
                      <Table1
                        {...props}
                        confirmedData={this.state.confirmedData}
                        createAndDownloadPDF={this.props.createAndDownloadPDF}
                      />
                    )}
                  />
                  <Route
                    path="/rms/reviewer/majorroads/intersections"
                    render={(props) => (
                      <Table1
                        {...props}
                        confirmedData={this.state.confirmedData}
                        createAndDownloadPDF={this.props.createAndDownloadPDF}
                      />
                    )}
                  />
                </Switch>{" "}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default InterSections;
