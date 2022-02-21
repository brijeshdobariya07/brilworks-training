import React from "react";
import "./style.css";
// import "./script.js";

const LoginForm = () => {
  function printUser(e) {
    e.preventDefault();
    let printEmail = document.getElementById("printEmail");
    let printPassword = document.getElementById("printPassword");
    let userEmail = document.querySelector("#email").value;
    let userPassword = document.querySelector("#password").value;
    console.log(userEmail, userPassword);
    console.log(printEmail, printPassword);
    printEmail.innerHTML = `Email : ${userEmail} `;
    printPassword.innerHTML = `Password : ${userPassword}`;
  }

  return (
    <div>
      <section id="main">
        <div className="user-details">
          <h1>React Form</h1>
          <form>
            <table>
              <tr>
                <td>
                  <label htmlFor="text">Email</label>
                </td>
                <td>
                  <input type="text" id="email" placeholder="email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input type="password" id="password" placeholder="password" />
                </td>
              </tr>
            </table>
          </form>
          <button id="getUser" onClick={printUser}>
            GET USER
          </button>
          <div id="user-output">
            <div id="printEmail"></div>
            <div id="printPassword"></div>
          </div>
        </div>
      </section>
      {/* <section id="user-output"></section> */}
    </div>
  );
};

export default LoginForm;
