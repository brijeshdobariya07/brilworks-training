import React from "react";

function CreateBody() {
  return (
    <div>
      <div className="create-task-container">
        <form action="">
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Title Name" />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea
              name=""
              id="desc"
              rows="5"
              placeholder="Description About Task"
            ></textarea>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select name="status" id="status">
              <option value="to-do">To-Do</option>
              <option value="in-progress">In-Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
            <button>ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBody;
