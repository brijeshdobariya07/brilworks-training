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
      data: {},
    };
    this.handleStatusAndData = this.handleStatusAndData.bind(this);
  }

  handleStatusAndData(data) {
    this.setState({ status: !this.state.status, data });
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <LeftSideImage />
          {!this.state.status ? (
            <RightSide handleStatusAndData={this.handleStatusAndData} />
          ) : (
            <Card
              data={this.state.data}
              handleStatusAndData={this.handleStatusAndData}
            />
          )}
        </div>
      </div>
    );
  }
}

export default FormContainer;
