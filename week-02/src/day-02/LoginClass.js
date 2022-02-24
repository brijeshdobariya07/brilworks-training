import React, { Component } from "react";
import userData from "./data.json";
import SuccessLogin from "./SuccessLogin";

class LoginClass extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      name: "",
      typedEmail: "",
      typedPassword: "",
      msg: "",
    };
  }

  verifyUser = (e) => {
    e.preventDefault();
    const typedEmail = this.state.typedEmail;
    const typedPassword = this.state.typedPassword;

    const findEmail = userData.filter((user) => user.email === typedEmail);
    const findPassword = userData.filter(
      (user) => user.password === typedPassword
    );

    if (findEmail.length) {
      if (findPassword.length) {
        if (findEmail[0].email === typedEmail) {
          if (findPassword[0].password === typedPassword) {
            this.setState({ status: true, name: findEmail[0].name, msg: "" });
          } else {
            this.setState({ status: false, msg: "Invalid password" });
          }
        } else {
          this.setState({ status: false, msg: "No Such User" });
        }
      } else {
        this.setState({ status: false, msg: "Enter a valid password" });
      }
    } else {
      this.setState({
        status: false,
        msg:
          findEmail.length === 0 && findPassword.length === 0
            ? "No such user"
            : "Wrong Credentials",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="form-details">
          <form action="">
            <h1 className="login-title">Class Login</h1>
            <label htmlFor="email">Email </label>
            <br />
            <input
              type="text"
              id="email"
              onChange={(e) => this.setState({ typedEmail: e.target.value })}
            />
            <br />
            <label htmlFor="password">Password </label>
            <br />
            <input
              type="password"
              id="password"
              onChange={(e) => this.setState({ typedPassword: e.target.value })}
            />
            <br />
            <button type="submit" onClick={this.verifyUser}>
              Submit
            </button>
          </form>
        </div>
        <div className="message">{this.state.msg}</div>
        {this.state.status ? <SuccessLogin msg={this.state.name} /> : null}
      </div>
    );
  }
}

export default LoginClass;
