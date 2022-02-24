import React from "react";

function CloseButton(props) {
  return (
    <div>
      <div className="close-button-container">
        <button onClick={() => props.statusHandler()}>&times;</button>
      </div>
    </div>
  );
}

export default CloseButton;
