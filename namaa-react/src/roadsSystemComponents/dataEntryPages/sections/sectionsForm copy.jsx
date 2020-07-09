import React, { Component } from "react";
import { axios } from "axios";

import "./ddstyles.css";

class SectionsForm extends Component {
  state = {
    Id: this.props.Id,
    Survey_No: "",
    Collected_Date: "",
    Survey_Responsible: "not exists",
    Alligator_crack: "not exists",
    Alligator_crack_Severity: "",
    Alligator_crack_area: "",
    Bleeding: "not exists",
    Bleeding_Severity: "",
    Bleeding_area: "",
    Blocking_cracks: "not exists",
    Blocking_cracks_Severity: "",
    Blocking_cracks_area: "",
    Edge_cracking: "not exists",
    Edge_cracking_powe: "not exists",
    Edge_cracking_area: "",
    Rutting: "not exists",
    Rutting_Severity: "",
    Rutting_area: "",
    Long_Trans: "not exists",
    Long_Trans_Severity: "",
    Long_Trans_area: "",
    Comment: "not exists",
    Images: "not exists",
    Entry_Date: "not exists",
    Data_Entry_Responsible: "not exists",

    selectedFile: null,
    sampleId: this.props.Id,
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("survey_no=>" + "" + this.state.Survey_No);
    console.log("severity=>" + "" + this.state.Alligator_crack_Severity);
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "http://localhost:3004/sectionsSamplesReport", //put the right url
        ({ Id: this.state.Id },
        { Survey_No: this.state.Survey_No },
        { Collected_Date: this.state.Collected_Date },
        {
          Survey_Responsible: this.state.Survey_Responsible,
        },
        //--------------------------------
        { Alligator_crack: this.state.Alligator_crack },
        {
          Alligator_crack_power: this.state.Alligator_crack_power,
        },
        {
          Alligator_crack_area: this.state.Alligator_crack_area,
        },
        //----------------------------------
        { Bleeding: this.state.Bleeding },
        { Bleeding_power: this.state.Bleeding_power },
        { Bleeding_area: this.state.Bleeding_area },
        //----------------------------------
        { Blocking_cracks: this.state.Blocking_cracks },
        {
          Blocking_cracks_power: this.state.Blocking_cracks_power,
        },
        {
          Blocking_cracks_area: this.state.Blocking_cracks_area,
        },
        //------------------------------------
        { Edge_cracking: this.state.Edge_cracking },
        {
          Edge_cracking_powe: this.state.Edge_cracking_powe,
        },
        {
          Edge_cracking_area: this.state.Edge_cracking_area,
        },
        //------------------------------------
        { Rutting: this.state.Rutting },
        { Rutting_power: this.state.Rutting_power },
        { Rutting_area: this.state.Rutting_area },
        //------------------------------------
        { Long_Trans: this.state.Long_Trans },
        {
          Long_Trans_power: this.state.Long_Trans_power,
        },
        { Long_Trans_area: this.state.Long_Trans_area },
        //------------------------------------
        { Comment: this.state.Comment },
        { Images: this.state.Images },
        { Entry_Date: this.state.Entry_Date },
        {
          Data_Entry_Responsible: this.state.Data_Entry_Responsible,
        })
      );
    } catch (e) {
      console.log("error", e);
    }
  };
  //handle add formdata for image
  // for image upload
  // fileSelectedHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  // };
  // //send to server as a FormData
  // uploadHandler = () => {
  //   const formData = new FormData();
  //   formData.append(
  //     "myFile",
  //     this.state.selectedFile,
  //     this.state.selectedFile.name
  //   );
  //   axios.post("my-domain.com/file-upload", formData); //note that :""this is a path to firebase
  // };

  render() {
    console.log("sample_id_in_form =>" + "" + this.state.Id);
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ textAlign: "left" }}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Survey Number</label>
              <input
                style={{ fontSize: "15px" }}
                // style={{ fontSize: "15px" }}
                type="number"
                className="form-control"
                id="inputEmail4"
                value={this.state.Survey_No}
                name="Survey_No"
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
              style={{ fontSize: "15px" }}
              type="text"
              className="form-control"
              name="Survey_Responsible"
              Value={this.state.Survey_Responsible}
              onChange={this.handleChange}
            />
          </div>

          <hr />
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  style={{ fontSize: "15px" }}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="Alligator_crack"
                  Value={this.state.Alligator_crack}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Alligator crack</label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label>Severity</label>
              <select
                type="number"
                id="inputState"
                className="form-control"
                name="Alligator_crack_Severity"
                Value={this.state.Alligator_crack_Severity}
                onChange={this.handleChange}
              >
                <option>choose...</option>
                <option value="3">high</option>
                <option value="2">medium</option>
                <option value="1">low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>area</label>
              <input
                style={{ fontSize: "15px" }}
                type="number"
                className="form-control"
                name="Alligator_crack_area"
                Value={this.state.Alligator_crack_area}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  style={{ fontSize: "15px" }}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="Bleeding"
                  Value={this.state.Hala}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Bleeding</label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label>Severity</label>
              <select
                id="inputState"
                className="form-control"
                name="Bleeding_Severity"
                Value={this.state.Hala}
                onChange={this.handleChange}
              >
                <option selected>Choose...</option>
                <option value={3}>high</option>
                <option value={2}>medium</option>
                <option value={1}>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>area</label>
              <input
                style={{ fontSize: "15px" }}
                type="number"
                className="form-control"
                name="Bleeding_area"
                Value={this.state.Hala}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  style={{ fontSize: "15px" }}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="Blocking_cracks"
                  Value={this.state.Blocking_cracks}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Blocking cracks</label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label>Severity</label>
              <select
                id="inputState"
                className="form-control"
                name="Blocking_cracks_Severity"
                Value={this.state.Blocking_cracks_Severity}
                onChange={this.handleChange}
              >
                <option selected>Choose...</option>
                <option value={3}>high</option>
                <option value={2}>medium</option>
                <option value={1}>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>area</label>
              <input
                style={{ fontSize: "15px" }}
                type="number"
                className="form-control"
                name="Blocking_cracks_area"
                Value={this.state.Blocking_cracks_area}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  style={{ fontSize: "15px" }}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="Edge_cracking"
                  Value={this.state.Edge_cracking}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Edge cracking</label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label>Severity</label>
              <select
                id="inputState"
                className="form-control"
                name="Edge_cracking_powe"
                Value={this.state.Edge_cracking_powe}
                onChange={this.handleChange}
              >
                <option selected>Choose...</option>
                <option value={3}>high</option>
                <option value={2}>medium</option>
                <option value={1}>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>area</label>
              <input
                style={{ fontSize: "15px" }}
                type="number"
                className="form-control"
                name="Edge_cracking_area"
                Value={this.state.Edge_cracking_area}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  style={{ fontSize: "15px" }}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="Rutting"
                  Value={this.state.Rutting}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Rutting</label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label>Severity</label>
              <select
                id="inputState"
                className="form-control"
                name="Rutting_Severity"
                Value={this.state.Rutting_Severity}
                onChange={this.handleChange}
              >
                <option selected>Choose...</option>
                <option value={3}>high</option>
                <option value={2}>medium</option>
                <option value={1}>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>area</label>
              <input
                style={{ fontSize: "15px" }}
                type="number"
                className="form-control"
                name="Rutting_area"
                Value={this.state.Rutting_area}
                onChange={this.handleChange}
              />
            </div>
          </div>

          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  style={{ fontSize: "15px" }}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="Long_Trans"
                  Value={this.state.Long_Trans}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Long. and Trans.</label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label>Severity</label>
              <select
                id="inputState"
                className="form-control"
                name="Long_Trans_Severity"
                Value={this.state.Long_Trans_Severity}
                onChange={this.handleChange}
              >
                <option selected>Choose...</option>
                <option value={3}>high</option>
                <option value={2}>medium</option>
                <option value={1}>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>area</label>
              <input
                style={{ fontSize: "15px" }}
                type="number"
                className="form-control"
                name="Long_Trans_area"
                Value={this.state.Long_Trans_area}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <hr />
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
            </div>{" "}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>choose image</label>
              <input
                style={{ fontSize: "15px" }}
                type="file"
                onChange={this.fileSelectedHandler}
                name="Images"
                Value={this.state.Images}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              {/* <label>uploap image</label> */}
              {/*   <input
                style={{ fontSize: "15px" }}           type="button" onClick={this.uploadHandler} /> */}
            </div>
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

          <div className="form-row">
            <div className="form-group col-md-5">
              <button type="submit" Value="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default SectionsForm;

// handlePost = async () => {
//   const data = this.state.
//   const { data } = await axios.post(
//     "http://localhost:3004/sectionformdata",
//     {
//       data: this.state.
//     }
//   );
// };
