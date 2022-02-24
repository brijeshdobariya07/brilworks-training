import React, { Component } from "react";
import CreateView from "./create-view-components/CreateView";
import ListView from "./list-view-components/ListView";
import "./style.css";
import data from "./data.json";

class JiraContainer extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      taskData: data,
    };
    this.statusHandler = this.statusHandler.bind(this);
  }

  statusHandler() {
    this.setState({ status: !this.state.status });
  }

  render() {
    return (
      <div>
        {!this.state.status ? (
          <ListView
            statusHandler={this.statusHandler}
            taskData={this.state.taskData}
          />
        ) : (
          <CreateView
            statusHandler={this.statusHandler}
            taskData={this.state.taskData}
          />
        )}
      </div>
    );
  }
}

export default JiraContainer;
