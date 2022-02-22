import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
    this.handleClick2 = this.handleClick2.bind(this); // Best Approch(*)
  }

  handleClick = () => {
    // Good Approch
    this.setState({ name: "Arrow Function" }, () => {
      console.log("name : ", this.state.name);
    });
  };

  handleClick2() {
    this.setState({ name: "Normal Function" });
    console.log("name : ", this.state.name);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Props Name : {this.props.name}</h2>
        <h2>State Name : {this.state.name}</h2>
        <button onClick={this.handleClick}>Arrow Update</button>&nbsp;
        {/* Worst Approch */}
        {/* <button onClick={this.handleClick2.bind(this)}>Normal Update</button>  */}
        {/* Worst Approch */}
        {/* <button onClick={() => this.handleClick2()}>Normal Update</button> */}
        {/* Best Approch(*) */}
        <button onClick={this.handleClick2}>Normal Update</button>
      </div>
    );
  }
}

export default ClassComponent;
