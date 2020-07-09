import React, { Component } from "react";
import axios from "axios";
class SectionsForm extends Component {
  state = {
    id: this.props.sampleId,
    sampleId: this.props.sampleId,
    sectionId: this.props.sectionId,
    roadId: this.props.roadId,
    roadName: this.props.roadName,
    Survey_No: null,
    Collected_Date: null,
    Survey_Responsible: "",
    Alligator_crack_low: null,
    Alligator_crack_meduim: null,
    Alligator_crack_high: null,
    Bleeding_low: null,
    Bleeding_meduim: null,
    Bleeding_high: null,
    Blocking_cracks_low: null,
    Blocking_cracks_meduim: null,
    Blocking_cracks_high: null,
    Edge_cracking_low: null,
    Edge_cracking_meduim: null,
    Edge_cracking_high: null,
    Rutting_low: null,
    Rutting_meduim: null,
    Rutting_high: null,
    Long_Trans_low: null,
    Long_Trans_meduim: null,
    Long_Trans_high: null,
    Comment: "",
    Images: "not exists",
    Entry_Date: null,
    Data_Entry_Responsible: "",
  };


  // handleSubmit = async (event) => {
  //   event.preventDefaults();
  //   const currentReport = {
  //     Survey_No: this.state.Survey_No,
  //     Collected_Date: this.state.Collected_Date,
  //     Survey_Responsible: this.state.Survey_Responsible,

  //     Comment: this.state.Comment,
  //     Images: this.state.Images,
  //     Entry_Date: this.state.Entry_Date,
  //     Data_Entry_Responsible: this.state.Data_Entry_Responsible,
  //   };
  //   await axios.post("http://localhost:3015/Section_Samples", currentReport);
  // };

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:3015/Section_Samples")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       this.setState({ Section_Samples: data });
  //     });
  // }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log("updated state=" + this.state);
  };

  handleSubmit = (e) => {
    e.preventDefaults();
    axios
      .post("http://localhost:3020/Section_Samples", this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("data_posted" + this.state);
  };

  render() {
    console.log(this.state);
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ textAlign: "left" }}
        action="#"
        // method="post"
      >

        {/* ----------------------------------inventory data--------------------------------- */}
        <div className="form-row">
          <div className="form-group col-md-4">
            <label> Section Id: {this.state.sectionId} </label>
          </div>
          <div className="form-group col-md-4">
            <label>Road Name: {this.state.roadName}</label>
          </div>
          <div className="form-group col-md-4">
            <label>Road Id: {this.state.roadId}</label>
          </div>
        </div>

        {/* ----------------------------top------------------------------- */}
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Survey Number</label>
            <input
              type="number"
              className="form-control"
              id="inputEmail4"
              style={{ fontSize: "15px" }}

              name="Survey_No"
              value={this.state.Survey_No}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Collection date</label>
            <input
              style={{ fontSize: "15px" }}
              type="date"
              className="form-control"
              id="inputPassword4"
              name="Collected_Date"
              value={this.state.Collected_Date}

              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Surveyor/ equipment responsible</label>
          <input
            type="text"
            style={{ fontSize: "15px" }}
            className="form-control"
            name="Survey_Responsible"
            Value={this.state.Survey_Responsible}
            onChange={this.handleChange}
          />
        </div>
        <hr />
        {/* --------------------------------defects------------------------------------ */}
        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-12" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Alligator crack</h2>
          </div>
        </div>

        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-4">
            <label>Area of low Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Alligator_crack_low"
              Value={this.state.Alligator_crack_low}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of medium Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Alligator_crack_meduim"
              Value={this.state.Alligator_crack_meduim}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of High Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Alligator_crack_high"
              Value={this.state.Alligator_crack_high}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <hr />
        {/* ===========================Bleeding=========================== */}
        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-12" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Bleeding</h2>
          </div>
        </div>


        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-4">
            <label>Area of low Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"

              name="Bleeding_low"
              Value={this.state.Bleeding_low}

              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of medium Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"

              name="Bleeding_meduim"
              Value={this.state.Bleeding_meduim}

              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of High Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Bleeding_high"
              Value={this.state.Bleeding_high}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <hr />
        {/* ===========================Blocking_cracks=========================== */}
        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-12" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Blocking cracks</h2>
          </div>
        </div>

        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-4">
            <label>Area of low Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Blocking_cracks_low"
              Value={this.state.Blocking_cracks_low}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of medium Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Blocking_cracks_meduim"
              Value={this.state.Blocking_cracks_meduim}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of High Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Blocking_cracks_high"
              Value={this.state.Blocking_cracks_high}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <hr />
        {/* ===========================Edge_cracking=========================== */}

        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-12" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Edge cracking</h2>
          </div>
        </div>

        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-4">
            <label>Area of low Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Edge_cracking_low"
              Value={this.state.Edge_cracking_low}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of medium Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Edge_cracking_meduim"
              Value={this.state.Edge_cracking_meduim}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of High Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Edge_cracking_high"
              Value={this.state.Edge_cracking_high}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <hr />
        {/* ===========================Rutting=========================== */}

        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-12" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Rutting</h2>
          </div>
        </div>

        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-4">
            <label>Area of low Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Rutting_low"
              Value={this.state.Rutting_low}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of medium Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Rutting_meduim"
              Value={this.state.Rutting_meduim}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of High Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Rutting_high"
              Value={this.state.Rutting_high}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <hr />
        {/* ===========================Long_Trans=========================== */}

        <div className="form-row" style={{ textAlign: "center" }}>
          <div className="form-group col-md-12" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Long and Trans</h2>
          </div>
        </div>

        <div className="form-row" style={{ textAlign: "center" }}>

          <div className="form-group col-md-4">
            <label>Area of low Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Long_Trans_low"
              Value={this.state.Long_Trans_low}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of medium Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Long_Trans_meduim"
              Value={this.state.Long_Trans_meduim}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Area of High Severity</label>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              className="form-control"
              name="Long_Trans_high"
              Value={this.state.Long_Trans_high}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <hr />
        {/* ----------------------------------------bottom area------------------------ */}
        <div className="form-row">
          <div className="form-group col-md-10">
            <label>Comment</label>
            <textarea
              type="text"
              className="form-control"
              name="Comment"
              Value={this.state.Comment}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>choose image</label>
            <input
              style={{ fontSize: "15px" }}
              type="file"
              // onChange={this.fileSelectedHandler}
              name="Images"
              // Value={this.state.Images}
              // onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4"></div>
        </div>
        <hr />
        <div className="form-row">
          <div className="form-group col-md-5">
            <label>Date of Adding Data</label>
            <input
              style={{ fontSize: "15px" }}
              type="date"
              className="form-control"
              id="inputCity"
              name="Entry_Date"
              Value={this.state.Entry_Date}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group col-md-7">
            <label>Data Entry Responsible</label>
            <input
              style={{ fontSize: "15px" }}
              type="text"
              className="form-control"
              name="Data_Entry_Responsible"
              placeholder="please enter your name"
              Value={this.state.Data_Entry_Responsible}
              onChange={this.handleChange}
            />
          </div>
        </div>
        {/* ---------------------------------------submit------------------------------ */}
        <div className="form-row">
          <div className="form-group col-md-5">
            <button type="submit" Value="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SectionsForm;

