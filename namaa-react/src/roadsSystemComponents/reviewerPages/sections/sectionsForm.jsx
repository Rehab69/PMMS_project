import React, { Component } from "react";
import { axios } from "axios";
class SectionsForm extends Component {
  state = {
    selectedFile: null,
  };
  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  //send to server as a FormData
  uploadHandler = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    axios.post("my-domain.com/file-upload", formData);
  };
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Survey Number</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Collection date</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="SurveyorName">Surveyor/ machine responsible</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="laneId">lane Id</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label for="from">from</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="form-group col-md-3">
              <label for="to">to</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <hr />
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Alligator crack
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="power">power</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="to">area</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Bleeding
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="power">power</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="to">area</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Blocking cracks
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="power">power</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="to">area</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Edge cracking
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="power">power</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="to">area</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Rutting
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="power">power</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="to">area</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Potholes
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="power">power</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="to">area</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="form-row">
            <div className="form-group col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Long. and Trans.
                </label>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="power">power</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="to">area</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <hr />
          <div className="form-group col-md-10">
            <label for="Comment">Comment</label>
            <textarea type="text" className="form-control" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="Comment">choose image</label>
              <input type="file" onChange={this.fileSelectedHandler} />
            </div>
            <div className="form-group col-md-4">
              <label for="">uploap image</label>
              <input type="button" onClick={this.uploadHandler} />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SectionsForm;
