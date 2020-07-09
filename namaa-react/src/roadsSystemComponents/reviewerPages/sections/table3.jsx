import React from "react";
import { MDBDataTable } from "mdbreact";
// import Data from "./data1";

const Table = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Add data",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        OBJECTID: 1,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 0,
        laneId: 9,
        sectionId: 3,
        Shape_Length: 98.834946,
        sampleId: 50,
      },
      {
        OBJECTID: 1,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 0,
        laneId: 9,
        sectionId: 3,
        Shape_Length: 98.834946,
        sampleId: 50,
      },
      {
        OBJECTID: 1,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 0,
        laneId: 9,
        sectionId: 3,
        Shape_Length: 98.834946,
        sampleId: 50,
      },
      {
        OBJECTID: 1,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 0,
        laneId: 9,
        sectionId: 3,
        Shape_Length: 98.834946,
        sampleId: 50,
      },
      {
        OBJECTID: 1,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 0,
        laneId: 9,
        sectionId: 3,
        Shape_Length: 98.834946,
        sampleId: 50,
      },
      {
        OBJECTID: 1,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 0,
        laneId: 9,
        sectionId: 3,
        Shape_Length: 98.834946,
        sampleId: 50,
      },
      {
        OBJECTID: 1,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 0,
        laneId: 9,
        sectionId: 3,
        Shape_Length: 98.834946,
        sampleId: 50,
      },
      {
        OBJECTID: 8,
        roude_name: "Madinty",
        roadId: 5,
        cityId: 1,
        direction: 1,
        laneId: 10,
        sectionId: 3,
        Shape_Length: 100.8368,
        sampleId: 1,
      },
    ],
  };

  return <MDBDataTable striped medium data={data} />;
};

export default Table;
