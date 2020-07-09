import React, { Component } from "react";
class CheckBox extends Component {
  state = {
    confirmed: false,
  };
  ConfirmToggler = () => {
    this.setState(!confirmed);
  };
  render() {
    return (
      <div style={{ alignSelf: center }}>
        <input
          type="checkbox"
          aria-label="Checkbox for following text input"
          onClick={this.ConfirmToggler}
        />
      </div>
    );
  }
}

export default CheckBox;
