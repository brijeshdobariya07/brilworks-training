import React from "react";

function ListBody() {
  return (
    <div className="list-elements-container">
      <center>
        <div className="list-elements">
          <div className="to-do-ele">
            <h1>To-Do</h1>
          </div>
          <div className="in-progress-ele">
            <h1>In-Progress</h1>
          </div>
          <div className="done-ele">
            <h1>Done</h1>
          </div>
        </div>
      </center>
    </div>
  );
}

export default ListBody;
