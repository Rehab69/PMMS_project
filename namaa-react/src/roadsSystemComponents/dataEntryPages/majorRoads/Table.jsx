import React, { Component } from "react";

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

  const renderData = (data, index) => {
    return (
      <tr key={index}>
        <td>{data.roadName}</td>
        <td>{data.roadId}</td>
        <td>{data.Shape_Length}</td>
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
          {/* -------------------------------------------Table--------------------------------------------------- */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">road name</th>
                <th scope="col">Road Id</th>
                <th scope="col">Length</th>
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
