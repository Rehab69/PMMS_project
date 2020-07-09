import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
//pages

const Table = () => {
  const data = [
    {
      OBJECTID: 1,
      Shape_Length: 4326.700516,
      roadId: 4,
      cityId: 1,
      roadName: "Alrabea",
    },
    {
      OBJECTID: 2,
      Shape_Length: 6314.544095,
      roadId: 1,
      cityId: 1,
      roadName: "Talaat Mostafa",
    },
    {
      OBJECTID: 3,
      Shape_Length: 4606.927899,
      roadId: 5,
      cityId: 1,
      roadName: "Madinty",
    },
    {
      OBJECTID: 4,
      Shape_Length: 5618.291188,
      roadId: 2,
      cityId: 1,
      roadName: " Alwady",
    },
    {
      OBJECTID: 5,
      Shape_Length: 3783.017578,
      roadId: 6,
      cityId: 1,
      roadName: "Talaat Mostafa-2",
    },
    {
      OBJECTID: 6,
      Shape_Length: 1700.448423,
      roadId: 3,
      cityId: 1,
      roadName: "Alzohor",
    },
  ];
  const majorRoadsData = [
    "Alrabea",
    "Talaat Mostafa",
    "Madinty",
    " Alwady",
    "Talaat Mostafa-2",
    "Alzohor",
  ];
  // const pageSize = 5;
  // let activePage = 1;
  // let pageChanged = "true";

  // const handlePageChange = (page) => {
  //   activePage = page;
  // };

  // //pagination
  // const startItem = pageSize * (activePage - 1);
  // const showedData = data.slice(startItem, pageSize + startItem);

  const renderData = (data, index) => {
    return (
      <tr key={index}>
        <td>{data.roadName}</td>
        <td>{data.roadId}</td>
        <td>{data.Shape_Length}</td>
      </tr>
    );
  };
  const renderStreetFilter = (data, index) => {
    return <Dropdown.Item onClick={handleFilter}>{data}</Dropdown.Item>;
  };
  const handleFilter = (data, index) => {
    return data.map((m) => renderData);
  };
  return (
    <React.Fragment>
      <div className="card ">
        <div className="card-header" style={{ marginBottom: 0 }}>
          List of Major Roads
        </div>

        <div className="card-body">
          {/* <div style={{ height: "30px" }}>
            {/* -------------------------------------filter--------------------------------------- */}
          {/* <div className="float-left">
              <DropdownButton
                id="dropdown-basic-button"
                title="Filter by Street Name"
              >
                {majorRoadsData.map(renderStreetFilter)}
              </DropdownButton>
            </div> */}
          {/* -------------------------------search----------------------------------- */}
          {/* <form className="form-inline my-2 my-lg-0 float-right">
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
          </div>  */}
          {/* -------------------------------------------Table--------------------------------------------------- */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">road name</th>
                <th scope="col">roadId</th>
                <th scope="col">Lenght</th>
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
