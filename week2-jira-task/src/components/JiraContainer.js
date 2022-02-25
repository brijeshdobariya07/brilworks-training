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
      editTask: {},
    };
    this.statusHandler = this.statusHandler.bind(this);
  }

  currentTask;

  statusHandler(task) {
    this.setState({ status: !this.state.status });
    this.currentTask = task;
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
            currentTask={this.currentTask}
          />
        )}
      </div>
    );
  }
}

export default JiraContainer;
