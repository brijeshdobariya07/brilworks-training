import React, { Component } from "react";
import Header from "./Header";
import ListBody from "./ListBody";

class ListView extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <ListBody />
      </div>
    );
  }
}

export default ListView;
