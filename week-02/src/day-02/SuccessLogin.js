import React from "react";

function SuccessLogin(props) {
  return (
    <div id="success-login">
      <h1>Welcome {props.msg}</h1>
      <h3>You are SuccessFully Login</h3>
    </div>
  );
}

export default SuccessLogin;
