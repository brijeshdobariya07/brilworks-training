import React from "react";
import "./style.css";
// import "./script.js";

const LoginForm = () => {
  return (
    <div>
      <section id="main">
        <div class="user-details">
          <h1>React Form</h1>
          <form>
            <table>
              <tr>
                <td>
                  <label htmlFor="text">Email</label>
                </td>
                <td>
                  <input type="text" id="email" value="" placeholder="email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    value=""
                    placeholder="password"
                  />
                </td>
              </tr>
            </table>
          </form>
          <button id="getUser">GET USER</button>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
