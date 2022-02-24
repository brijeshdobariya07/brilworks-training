import React, { Component } from "react";
import CreateView from "./create-view-components/CreateView";
import ListView from "./list-view-components/ListView";
import "./style.css";

class JiraContainer extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
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
          <ListView statusHandler={this.statusHandler} />
        ) : (
          <CreateView statusHandler={this.statusHandler} />
        )}
      </div>
    );
  }
}

export default JiraContainer;
