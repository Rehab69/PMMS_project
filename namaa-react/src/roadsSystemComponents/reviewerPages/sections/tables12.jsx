import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
// import Table2 from "./../intersections/table2";
// import { axios } from "axios";
class TableGeneral2 extends Component {
  state = {
    data: [],
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // Where we're fetching data from
    fetch(`https://localhost:3004/sectionsreport`) //put the url
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) =>
        this.setState({
          data: data,
        })
      )
      // Catch any errors we hit
      .catch((error) => this.setState({ error }));
  }

  tableData = {
    columns: [
      {
        label: "Sample_ID",
        field: "Section_Sample_ID",
        sort: "asc",
        width: 100,
      },
      {
        label: "Survey_No",
        field: "Survey_No",
        sort: "asc",
        width: 100,
      },

      {
        label: "Collected_Date",
        field: "Collected_Date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Equipment",
        field: "Survey_Responsible",
        sort: "asc",
        width: 100,
      },

      {
        label: "Comment",
        field: "Comment",
        sort: "asc",
        width: 100,
      },
      {
        label: "Images",
        field: "Images",
        sort: "asc",
        width: 100,
      },
      {
        label: "Entry_Date",
        field: "Entry_Date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Data_Entry",
        field: "Data_Entry_Responsible",
        sort: "asc",
        width: 100,
      },
    ],
    rows: this.state.data,
  };
  render() {
    return (
      <MDBDataTable
        className="temp-ttable"
        striped
        bordered
        small
        data={this.tableData}
      />
    );
  }
}

export default TableGeneral2;

// const DatatablePage = () => {

// const data = {
//   columns: [
//     {
//       label: "Sample_ID",
//       field: "Section_Sample_ID",
//       sort: "asc",
//       width: 100,
//     },
//     {
//       label: "Survey_No",
//       field: "Survey_No",
//       sort: "asc",
//       width: 100,
//     },

//     {
//       label: "Collected_Date",
//       field: "Collected_Date",
//       sort: "asc",
//       width: 100,
//     },
//     {
//       label: "Equipment",
//       field: "Survey_Responsible",
//       sort: "asc",
//       width: 100,
//     },

//     {
//       label: "Comment",
//       field: "Comment",
//       sort: "asc",
//       width: 100,
//     },
//     {
//       label: "Images",
//       field: "Images",
//       sort: "asc",
//       width: 100,
//     },
//     {
//       label: "Entry_Date",
//       field: "Entry_Date",
//       sort: "asc",
//       width: 100,
//     },
//     {
//       label: "Data_Entry",
//       field: "Data_Entry_Responsible",
//       sort: "asc",
//       width: 100,
//     },
//   ],

//   rows: [
//       {
//         Section_ID: 1,
//         Section_Sample_ID: 6,
//         Survey_No: 1,
//         Collected_Date: "5/26/2020",
//         Survey_Responsible: "equipment no1",
//         Alligator_crack: null,
//         Alligator_crack_power: null,
//         Alligator_crack_area: null,
//         Bleeding: true,
//         Bleeding_power: 1,
//         Bleeding_area: "50",
//         Blocking_cracks: null,
//         Blocking_cracks_power: null,
//         Blocking_cracks_area: "",
//         Edge_cracking: null,
//         Edge_cracking_powe: null,
//         Edge_cracking_area: null,
//         Rutting: null,
//         Rutting_power: null,
//         Rutting_area: null,
//         Long_Trans: null,
//         Long_Trans_power: null,
//         Long_Trans_area: null,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/3/2020",
//         Data_Entry_Responsible: "Mai Rabea",
//       },
//       {
//         Section_ID: 2,
//         Section_Sample_ID: 7,
//         Survey_No: 2,
//         Collected_Date: "5/26/2020",
//         Survey_Responsible: "equipment no1",
//         Alligator_crack: null,
//         Alligator_crack_power: null,
//         Alligator_crack_area: null,
//         Bleeding: null,
//         Bleeding_power: null,
//         Bleeding_area: "",
//         Blocking_cracks: null,
//         Blocking_cracks_power: null,
//         Blocking_cracks_area: "",
//         Edge_cracking: null,
//         Edge_cracking_powe: null,
//         Edge_cracking_area: null,
//         Rutting: true,
//         Rutting_power: 2,
//         Rutting_area: 96,
//         Long_Trans: null,
//         Long_Trans_power: null,
//         Long_Trans_area: null,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/4/2020",
//         Data_Entry_Responsible: "Mai Rabea",
//       },
//       {
//         Section_ID: 3,
//         Section_Sample_ID: 8,
//         Survey_No: 3,
//         Collected_Date: "5/26/2020",
//         Survey_Responsible: "equipment no1",
//         Alligator_crack: null,
//         Alligator_crack_power: null,
//         Alligator_crack_area: null,
//         Bleeding: null,
//         Bleeding_power: null,
//         Bleeding_area: "TRUE",
//         Blocking_cracks: 3,
//         Blocking_cracks_power: 135,
//         Blocking_cracks_area: "",
//         Edge_cracking: null,
//         Edge_cracking_powe: null,
//         Edge_cracking_area: null,
//         Rutting: null,
//         Rutting_power: null,
//         Rutting_area: null,
//         Long_Trans: null,
//         Long_Trans_power: null,
//         Long_Trans_area: null,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/5/2020",
//         Data_Entry_Responsible: "Azza Atef",
//       },
//       {
//         Section_ID: 4,
//         Section_Sample_ID: 1,
//         Survey_No: 4,
//         Collected_Date: "5/29/2020",
//         Survey_Responsible: "equipment no2",
//         Alligator_crack: true,
//         Alligator_crack_power: 3,
//         Alligator_crack_area: 140,
//         Bleeding: null,
//         Bleeding_power: null,
//         Bleeding_area: "",
//         Blocking_cracks: null,
//         Blocking_cracks_power: null,
//         Blocking_cracks_area: "",
//         Edge_cracking: null,
//         Edge_cracking_powe: null,
//         Edge_cracking_area: null,
//         Rutting: null,
//         Rutting_power: null,
//         Rutting_area: null,
//         Long_Trans: null,
//         Long_Trans_power: null,
//         Long_Trans_area: null,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/6/2020",
//         Data_Entry_Responsible: "Azza Atef",
//       },
//       {
//         Section_ID: 10,
//         Section_Sample_ID: 2,
//         Survey_No: 5,
//         Collected_Date: "5/30/2020",
//         Survey_Responsible: "equipment no3",
//         Alligator_crack: null,
//         Alligator_crack_power: null,
//         Alligator_crack_area: null,
//         Bleeding: null,
//         Bleeding_power: null,
//         Bleeding_area: "",
//         Blocking_cracks: null,
//         Blocking_cracks_power: null,
//         Blocking_cracks_area: "",
//         Edge_cracking: true,
//         Edge_cracking_powe: 2,
//         Edge_cracking_area: 100,
//         Rutting: null,
//         Rutting_power: null,
//         Rutting_area: null,
//         Long_Trans: null,
//         Long_Trans_power: null,
//         Long_Trans_area: null,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/7/2020",
//         Data_Entry_Responsible: "Azza Atef",
//       },
//       {
//         Section_ID: 11,
//         Section_Sample_ID: 3,
//         Survey_No: 6,
//         Collected_Date: "5/31/2020",
//         Survey_Responsible: "equipment no4",
//         Alligator_crack: true,
//         Alligator_crack_power: 3,
//         Alligator_crack_area: 130,
//         Bleeding: null,
//         Bleeding_power: null,
//         Bleeding_area: "",
//         Blocking_cracks: null,
//         Blocking_cracks_power: null,
//         Blocking_cracks_area: "",
//         Edge_cracking: null,
//         Edge_cracking_powe: null,
//         Edge_cracking_area: null,
//         Rutting: null,
//         Rutting_power: null,
//         Rutting_area: null,
//         Long_Trans: null,
//         Long_Trans_power: null,
//         Long_Trans_area: null,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/8/2020",
//         Data_Entry_Responsible: "Azza Atef",
//       },
//       {
//         Section_ID: 12,
//         Section_Sample_ID: 4,
//         Survey_No: 7,
//         Collected_Date: "6/1/2020",
//         Survey_Responsible: "equipment no5",
//         Alligator_crack: null,
//         Alligator_crack_power: null,
//         Alligator_crack_area: null,
//         Bleeding: null,
//         Bleeding_power: null,
//         Bleeding_area: "",
//         Blocking_cracks: null,
//         Blocking_cracks_power: null,
//         Blocking_cracks_area: "",
//         Edge_cracking: null,
//         Edge_cracking_powe: null,
//         Edge_cracking_area: null,
//         Rutting: null,
//         Rutting_power: null,
//         Rutting_area: null,
//         Long_Trans: true,
//         Long_Trans_power: 1,
//         Long_Trans_area: 60,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/9/2020",
//         Data_Entry_Responsible: "Mai Rabea",
//       },
//       {
//         Section_ID: 13,
//         Section_Sample_ID: 5,
//         Survey_No: 8,
//         Collected_Date: "6/2/2020",
//         Survey_Responsible: "equipment no6",
//         Alligator_crack: true,
//         Alligator_crack_power: 2,
//         Alligator_crack_area: 102,
//         Bleeding: null,
//         Bleeding_power: null,
//         Bleeding_area: "",
//         Blocking_cracks: null,
//         Blocking_cracks_power: null,
//         Blocking_cracks_area: "",
//         Edge_cracking: null,
//         Edge_cracking_powe: null,
//         Edge_cracking_area: null,
//         Rutting: null,
//         Rutting_power: null,
//         Rutting_area: null,
//         Long_Trans: null,
//         Long_Trans_power: null,
//         Long_Trans_area: null,
//         Comment: "no comment",
//         Images: "no images",
//         Entry_Date: "6/10/2020",
//         Data_Entry_Responsible: "Mai Rabea",
//       },
//     ],
//   };

// return (
//   <MDBDataTable className="temp-ttable" striped bordered small data={data} />
// );
// };

// export default DatatablePage;
