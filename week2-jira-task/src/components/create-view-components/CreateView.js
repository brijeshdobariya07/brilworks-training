import React, { Component } from "react";
import CloseButton from "./CloseButton";
import CreateBody from "./CreateBody";
import Header from "./Header";

class CreateView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <CreateBody />
        <CloseButton statusHandler={this.props.statusHandler} />
      </div>
    );
  }
}

export default CreateView;
