import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios'
import { saveAs } from 'file-saver'
//pages
import Section from "./sections/sections";
import InterSections from "./intersections/intersectionsContent";

import MajorRoads from "./majorRoads/majorRoads";
import MinorRoads from "./minorRoads/minorRoads";

import ReviewerHome from "./home/reviewerHome";

//sidebar
import NewSideBar2 from "./asmaaSidebar";

//style
import "./newSideBarStyle copy.css";

class Reviewer extends Component {
  state = {};

  createAndDownloadPDF = async (data, nameOfReport) => {
    console.log(data, nameOfReport)
    if (nameOfReport === "Sections-reports-of-Reviewers") {
     await axios.post('http://localhost:5000/create-SectionR', data)
        .then(() => axios.get('http://localhost:5000/SectionR-pdf', { responseType: 'blob' }))
        .then((res) => {
          console.log(res)
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
          saveAs(pdfBlob, 'Sections-reports.pdf');

        })
    } else if (nameOfReport === "Intersections-reports-of-Reviewer") {
      await axios.post('http://localhost:5000/create-intersectionR', data)
        .then(() => axios.get('http://localhost:5000/intersectionR-pdf', { responseType: 'blob' }))
        .then((res) => {
          console.log(res)
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
          saveAs(pdfBlob, 'Intersections-reports.pdf');

        })
    } else if (nameOfReport === "Streets-reports-of-Reviewer") {
      await  axios.post('http://localhost:5000/create-streetsR', data)
        .then(() => axios.get('http://localhost:5000/streetsR-pdf', { responseType: 'blob' }))
        .then((res) => {
          console.log(res)
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
          saveAs(pdfBlob, 'Streets-reports.pdf');

        })
    }

  }
  render() {
    return (
      <>
        <div className="page-wrapper chiller-theme toggled">
          <NewSideBar2 fakeAuth={this.props.fakeAuth} />
          <div className="wrapper" style={{ marginLeft: '0' }}>
            <main className="page-content" style={{ margin: '0px' }}>
              <div className="container-fluid">
                <Switch>

                  <Route
                    path="/rms/reviewer/majorroads/sections" render={(props) =>
                      <Section {...props} createAndDownloadPDF={this.createAndDownloadPDF} />
                    }
                  />

                  <Route
                    path="/rms/reviewer/majorroads/intersections" render={(props) =>
                      <InterSections {...props}
                        createAndDownloadPDF={this.createAndDownloadPDF}
                      />
                    }
                  />
                  <Route path="/rms/reviewer/majorroads" component={MajorRoads} />
                  <Route path="/rms/reviewer/minorroads"
                    render={(props) =>
                      <MinorRoads {...props} createAndDownloadPDF={this.createAndDownloadPDF} />
                    }
                  />
                  <Route path="/rms/Reviewer/" component={ReviewerHome} />
                  <Route path="/rms/Reviewer" component={ReviewerHome} />
                  <Route path="/" component={ReviewerHome} />

                </Switch>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Reviewer;
