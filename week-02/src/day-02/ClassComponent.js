import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Props Name : {this.props.name}</h2>
        <h2>State Name : {this.state.name}</h2>
      </div>
    );
  }
}

export default ClassComponent;
