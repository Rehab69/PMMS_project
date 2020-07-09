import React, { Component } from "react";
// import { DropdownButton, Dropdown } from "react-bootstrap";
import MinorRoadsModal from "./minorRoadsModal";

const Table = () => {
  const data = [
    {
      OBJECTID: 1,
      Shape_Length: 1177.484311,
      minorId: 1,
      regionId: 3,
      cityId: 1,
    },
    {
      OBJECTID: 2,
      Shape_Length: 202.8024042,
      minorId: 2,
      regionId: 3,
      cityId: 1,
    },
    {
      OBJECTID: 3,
      Shape_Length: 364.9456,
      minorId: 3,
      regionId: 3,
      cityId: 1,
    },
    {
      OBJECTID: 4,
      Shape_Length: 496.229343,
      minorId: 4,
      regionId: 3,
      cityId: 1,
    },
    {
      OBJECTID: 5,
      Shape_Length: 248.8184998,
      minorId: 5,
      regionId: 3,
      cityId: 1,
    },
    {
      OBJECTID: 6,
      Shape_Length: 1688.016181,
      minorId: 1,
      regionId: 4,
      cityId: 1,
    },
    {
      OBJECTID: 7,
      Shape_Length: 1426.40478,
      minorId: 2,
      regionId: 4,
      cityId: 1,
    },
    {
      OBJECTID: 8,
      Shape_Length: 1172.016239,
      minorId: 3,
      regionId: 4,
      cityId: 1,
    },
    {
      OBJECTID: 9,
      Shape_Length: 358.7232679,
      minorId: 4,
      regionId: 4,
      cityId: 1,
    },
    {
      OBJECTID: 10,
      Shape_Length: 457.3863965,
      minorId: 1,
      regionId: 8,
      cityId: 1,
    },
    {
      OBJECTID: 11,
      Shape_Length: 949.780481,
      minorId: 2,
      regionId: 8,
      cityId: 1,
    },
    {
      OBJECTID: 12,
      Shape_Length: 362.4712951,
      minorId: 3,
      regionId: 8,
      cityId: 1,
    },
    {
      OBJECTID: 13,
      Shape_Length: 437.7062297,
      minorId: 4,
      regionId: 8,
      cityId: 1,
    },
    {
      OBJECTID: 14,
      Shape_Length: 518.7189773,
      minorId: 1,
      regionId: 7,
      cityId: 1,
    },
    {
      OBJECTID: 15,
      Shape_Length: 204.6734348,
      minorId: 2,
      regionId: 7,
      cityId: 1,
    },
    {
      OBJECTID: 16,
      Shape_Length: 1135.568961,
      minorId: 3,
      regionId: 7,
      cityId: 1,
    },
    {
      OBJECTID: 17,
      Shape_Length: 563.8926317,
      minorId: 4,
      regionId: 7,
      cityId: 1,
    },
    {
      OBJECTID: 18,
      Shape_Length: 203.9166641,
      minorId: 1,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 19,
      Shape_Length: 408.1489057,
      minorId: 2,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 25,
      Shape_Length: 296.1739693,
      minorId: 3,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 28,
      Shape_Length: 344.7468644,
      minorId: 4,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 29,
      Shape_Length: 370.4894607,
      minorId: 5,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 30,
      Shape_Length: 279.1888518,
      minorId: 6,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 31,
      Shape_Length: 433.4079123,
      minorId: 7,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 32,
      Shape_Length: 1134.230681,
      minorId: 8,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 33,
      Shape_Length: 1074.268874,
      minorId: 9,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 34,
      Shape_Length: 660.4604442,
      minorId: 10,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 35,
      Shape_Length: 186.8963469,
      minorId: 11,
      regionId: 9,
      cityId: 1,
    },
    {
      OBJECTID: 36,
      Shape_Length: 277.4413467,
      minorId: 1,
      regionId: 10,
      cityId: 1,
    },
    {
      OBJECTID: 37,
      Shape_Length: 587.0691794,
      minorId: 2,
      regionId: 10,
      cityId: 1,
    },
    {
      OBJECTID: 38,
      Shape_Length: 208.6398635,
      minorId: 3,
      regionId: 10,
      cityId: 1,
    },
    {
      OBJECTID: 39,
      Shape_Length: 415.2102712,
      minorId: 4,
      regionId: 10,
      cityId: 1,
    },
    {
      OBJECTID: 40,
      Shape_Length: 953.3361131,
      minorId: 5,
      regionId: 7,
      cityId: 1,
    },
    {
      OBJECTID: 41,
      Shape_Length: 2027.363167,
      minorId: 1,
      regionId: 12,
      cityId: 1,
    },
    {
      OBJECTID: 42,
      Shape_Length: 2940.730628,
      minorId: 2,
      regionId: 12,
      cityId: 1,
    },
    {
      OBJECTID: 43,
      Shape_Length: 3292.214628,
      minorId: 3,
      regionId: 12,
      cityId: 1,
    },
    {
      OBJECTID: 44,
      Shape_Length: 5634.070714,
      minorId: 4,
      regionId: 12,
      cityId: 1,
    },
    {
      OBJECTID: 45,
      Shape_Length: 550.1055372,
      minorId: 1,
      regionId: 6,
      cityId: 1,
    },
    {
      OBJECTID: 46,
      Shape_Length: 1006.231773,
      minorId: 2,
      regionId: 6,
      cityId: 1,
    },
    {
      OBJECTID: 47,
      Shape_Length: 280.582759,
      minorId: 3,
      regionId: 6,
      cityId: 1,
    },
    {
      OBJECTID: 48,
      Shape_Length: 327.8611707,
      minorId: 4,
      regionId: 6,
      cityId: 1,
    },
    {
      OBJECTID: 49,
      Shape_Length: 151.7009296,
      minorId: 5,
      regionId: 6,
      cityId: 1,
    },
    {
      OBJECTID: 50,
      Shape_Length: 893.2271511,
      minorId: 1,
      regionId: 2,
      cityId: 1,
    },
    {
      OBJECTID: 51,
      Shape_Length: 220.4661961,
      minorId: 2,
      regionId: 2,
      cityId: 1,
    },
    {
      OBJECTID: 52,
      Shape_Length: 274.5280063,
      minorId: 3,
      regionId: 2,
      cityId: 1,
    },
  ];

  const renderData = (data, index) => {
    return (
      <tr key={index}>
        <td>{data.minorId}</td>
        <td>{data.regionId}</td>
        <td>
          <MinorRoadsModal />
        </td>
        <td>
          <input type="checkbox" />{" "}
        </td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      <div className="card ">
        <div className="card-header" style={{ marginBottom: 0 }}>
          List of Sections
        </div>
        <div className="card-body">
          <div style={{ height: "30px" }}>
            {/* -------------------------------search----------------------------------- */}
            <form className="form-inline my-2 my-lg-0 float-right">
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

          {/* -------------------------------------------Table--------------------------------------------------- */}
          <table className="table minor-table overflow-y-scroll">
            <thead>
              <tr>
                <th scope="col">street Id</th>
                <th scope="col">regoin Id</th>

                <th scope="col">Add Data</th>
                <th scope="col">confirmed</th>
              </tr>
            </thead>
            <tbody>{data.map(renderData)}</tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Table;
