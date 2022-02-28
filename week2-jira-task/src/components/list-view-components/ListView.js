import React, { Component } from "react";
import CreateTaskButton from "./CreateTaskButton";
import Header from "./Header";
import ListBody from "./ListBody";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { taskData, statusHandler } = this.props;
    return (
      <div>
        <Header />
        <ListBody taskData={taskData} statusHandler={statusHandler} />
        <CreateTaskButton statusHandler={statusHandler} />
      </div>
    );
  }
}

export default ListView;
