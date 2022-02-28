import React, { Component } from "react";
import Card from "./Card";
import LeftSideImage from "./LeftSideImage";
import RightSide from "./RightSide";
import "./style.css";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.handleStatusAndData = this.handleStatusAndData.bind(this);
  }

  handleStatusAndData() {
    this.setState({ status: !this.state.status });
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <LeftSideImage />
          {!this.state.status ? (
            <RightSide handleStatusAndData={this.handleStatusAndData} />
          ) : (
            <Card />
          )}
        </div>
      </div>
    );
  }
}

export default FormContainer;
