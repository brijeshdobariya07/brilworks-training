import React from "react";

function ListBody() {
  return (
    <div className="list-elements-container">
      <center>
        <div className="list-elements">
          <div className="to-do-ele">
            <h1>To-Do</h1>
            <div className="to-do-ele-content list-content"></div>
          </div>
          <div className="in-progress-ele">
            <h1>In-Progress</h1>
            <div className="in-progress-ele-content list-content"></div>
          </div>
          <div className="done-ele">
            <h1>Done</h1>
            <div className="done-ele-content list-content"></div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default ListBody;
