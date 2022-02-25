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
        <CreateBody
          taskData={this.props.taskData}
          statusHandler={this.props.statusHandler}
          currentTask={this.props.currentTask}
        />
        <CloseButton statusHandler={this.props.statusHandler} />
      </div>
    );
  }
}

export default CreateView;
