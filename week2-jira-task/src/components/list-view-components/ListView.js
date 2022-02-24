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
    return (
      <div>
        <Header />
        <ListBody />
        <CreateTaskButton statusHandler={this.props.statusHandler} />
      </div>
    );
  }
}

export default ListView;
