import React from "react";
import { GrEdit } from "react-icons/gr";
import { IoTrashOutline } from "react-icons/io5";

function ListBody(props) {
  // const [toDoList, setToDoList] = useState();
  // const [inProgressList, setInProgressList] = useState();
  // const [doneList, setDoneList] = useState();

  const toDoTasks = props.taskData.filter((task) => task.status === "to-do");
  const inProgressTasks = props.taskData.filter(
    (task) => task.status === "in-progress"
  );
  const doneTasks = props.taskData.filter((task) => task.status === "done");

  return (
    <div className="list-elements-container">
      <center>
        <div className="list-elements">
          <div className="to-do-ele">
            <h1>To-Do</h1>

            <div className="to-do-ele-content list-content">
              {toDoTasks.map((task) => (
                <div className="task-element" key={task.id}>
                  {task.title}
                  <GrEdit
                    className="icon"
                    onClick={() => props.statusHandler()}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="in-progress-ele">
            <h1>In-Progress</h1>

            <div className="in-progress-ele-content list-content">
              {inProgressTasks.map((task) => (
                <div className="task-element" key={task.id}>
                  {task.title}
                  <GrEdit
                    className="icon"
                    onClick={() => props.statusHandler()}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="done-ele">
            <h1>Done</h1>

            <div className="done-ele-content list-content">
              {doneTasks.map((task) => (
                <div className="task-element" key={task.id}>
                  {task.title} <IoTrashOutline className="icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default ListBody;
