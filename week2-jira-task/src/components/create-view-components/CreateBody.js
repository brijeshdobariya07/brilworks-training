import React, { useState } from "react";

function CreateBody(props) {
  const { title, desc, status } = props.currentTask || {};

  const [titleName, setTitleName] = useState(title || "");
  const [descName, setDescName] = useState(desc || "");
  const [statusName, setStatusName] = useState(status || "");
  let taskData = props.taskData;

  const updateTask = (e) => {
    e.preventDefault();

    if (title && desc && status) {
      const editTaskIndex = taskData.findIndex((task) => {
        return task.title === title && task.status === status;
      });
      taskData[editTaskIndex].title = titleName;
      taskData[editTaskIndex].desc = descName;
      taskData[editTaskIndex].status = statusName;
    } else {
      taskData.push({ title: titleName, desc: descName, status: statusName });
    }
    setTitleName("");
    setDescName("");
    setStatusName("");
    props.statusHandler();
  };

  return (
    <div>
      <div className="create-task-container">
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title Name"
              onChange={(e) => setTitleName(e.target.value)}
              value={titleName}
              required
            />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea
              name=""
              id="desc"
              rows="5"
              placeholder="Description About Task"
              onChange={(e) => setDescName(e.target.value)}
              value={descName}
            ></textarea>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              onChange={(e) => setStatusName(e.target.value)}
              value={statusName}
            >
              <option>-- Select --</option>
              <option value="to-do">To-Do</option>
              <option value="in-progress">In-Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
            <button onClick={updateTask}>
              {title && desc && status ? "Update" : "ADD"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBody;
