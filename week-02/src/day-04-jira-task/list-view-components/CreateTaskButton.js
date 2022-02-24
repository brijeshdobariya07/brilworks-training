import React from "react";

function CreateTaskButton(props) {
  return (
    <div>
      <div className="create-button">
        <button onClick={() => props.statusHandler()}>Create</button>
      </div>
    </div>
  );
}

export default CreateTaskButton;
