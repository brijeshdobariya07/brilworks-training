import React, { Component } from "react";
import userData from "./data.json";
import SuccessLogin from "./SuccessLogin";

class LoginClass extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      name: "",
    };
  }

  verifyUser = (e) => {
    e.preventDefault();
    const typedEmail = document.getElementById("email").value;
    const typedPassword = document.getElementById("password").value;
    const displayMsg = document.querySelector(".message");

    const findEmail = userData.filter((user) => user.email === typedEmail);
    const findPassword = userData.filter(
      (user) => user.password === typedPassword
    );

    if (findEmail.length) {
      if (findPassword.length) {
        if (findEmail[0].email === typedEmail) {
          if (findPassword[0].password === typedPassword) {
            displayMsg.textContent = "";
            this.setState({ status: true, name: findEmail[0].name });
          } else {
            displayMsg.textContent = "Invalid password";
            this.setState({ status: false });
          }
        } else {
          displayMsg.textContent = "Wrong Credentials";
          this.setState({ status: false });
        }
      } else {
        displayMsg.textContent = "Enter a valid password";
        this.setState({ status: false });
      }
    } else {
      displayMsg.textContent =
        findEmail.length === 0 && findPassword.length === 0
          ? "Wrong Credentials"
          : "No such user";
      this.setState({ status: false });
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
            <input type="text" id="email" />
            <br />
            <label htmlFor="password">Password </label>
            <br />
            <input type="password" id="password" />
            <br />
            <button type="submit" onClick={this.verifyUser}>
              Submit
            </button>
          </form>
        </div>
        <div className="message"></div>
        {this.state.status ? <SuccessLogin msg={this.state.name} /> : null}
      </div>
    );
  }
}

export default LoginClass;
