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
// import "./ddstyles.css";

const getBadge = (status) => {
  switch (status) {
    case "false":
      return "warning";
    case "true":
      return "success";
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
