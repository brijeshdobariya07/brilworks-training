import React from "react";

function SuccessFunctional(props) {
  return (
    <>
      <div id="success-login">
        <h1>Welcome {props.msg}</h1>
        <br />
        <h2>You are Successfully Login</h2>
        <button onClick={() => props.callParentFunction()} className="backBtn">
          {" "}
          Back
        </button>
      </div>
    </>
  );
}

export default SuccessFunctional;
