import React, { Component } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";

import Data from "./data1";
import SectionModal from "./sectionModal";
import "./ddstyles.css";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["Street Name", "Street ID", "Section ID", "Add_Data", "status"];

class Table2 extends Component {
  state = {};
  render() {
    return (
      <div style={{ color: "rgb(209, 209, 210)" }}>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>Combined All Table</CCardHeader>
              <CCardBody>
                <nav
                  className="navbar navbar-expand-lg  table-head"
                  style={{ height: "40px" }}
                >
                  {/* <i className="fas fa-filter"></i> &nbsp;
                  <a className="navbar-brand" href="#">
                    Fliter
                  </a> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        {/* <a className="nav-link" href="#">
                          Home <span className="sr-only">(current)</span>
                        </a> */}
                        <i className="fas fa-filter"></i> &nbsp;
                        <a className="navbar-brand" href="#">
                          Fliter
                        </a>
                      </li>
                      <li className="nav-item">
                        {/* <a className="nav-link" href="#">
                          Link
                        </a> */}
                      </li>
                      <li className="nav-item">
                        {/* <a
                          className="nav-link disabled"
                          href="#"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Disabled 
                        </a>*/}
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-primary my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </nav>

                <CDataTable
                  items={Data}
                  fields={fields}
                  style={{ "text-color": "rgb(209, 209, 210)" }}
                  className="table-item"
                  hover
                  striped
                  bordered
                  size="sm"
                  itemsPerPage={10}
                  pagination
                  scopedSlots={{
                    Add_Data: (item) => (
                      <td>
                        <SectionModal />
                      </td>
                    ),
                    status: (item) => (
                      <td>
                        <form>
                          <input type="checkbox" />
                        </form>
                        {/* <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge> */}
                      </td>
                    ),
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Table2;
