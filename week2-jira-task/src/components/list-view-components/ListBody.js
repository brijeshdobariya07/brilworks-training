import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { IoTrashOutline } from "react-icons/io5";

function ListBody(props) {
  const [toDoList, setToDoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    const toDoTasks = props.taskData.filter((task) => task.status === "to-do");
    setToDoList(toDoTasks);

    const inProgressTasks = props.taskData.filter(
      (task) => task.status === "in-progress"
    );
    setInProgressList(inProgressTasks);

    const doneTasks = props.taskData.filter((task) => task.status === "done");
    setDoneList(doneTasks);
  }, [props.taskData]);

  const handleIcon = (task) => {
    props.statusHandler(task);
  };

  const deleteTaskIcon = (task) => {
    const findDoneTaskIndex = props.taskData.findIndex((item) => {
      return item.title === task.title && item.status === task.status;
    });
    props.taskData.splice(findDoneTaskIndex, 1);
    const doneTasks = props.taskData.filter((task) => task.status === "done");
    setDoneList(doneTasks);
  };

  return (
    <>
      <div className="list-elements-container">
        <center>
          <div className="list-elements">
            <div className="to-do-ele">
              <h1>To-Do</h1>

              <div className="to-do-ele-content list-content">
                {toDoList.map((task, index) => (
                  <div className="task-element" key={index}>
                    {task.title}
                    <GrEdit className="icon" onClick={() => handleIcon(task)} />
                  </div>
                ))}
              </div>
            </div>

            <div className="in-progress-ele">
              <h1>In-Progress</h1>

              <div className="in-progress-ele-content list-content">
                {inProgressList.map((task, index) => (
                  <div className="task-element" key={index}>
                    {task.title}
                    <GrEdit className="icon" onClick={() => handleIcon(task)} />
                  </div>
                ))}
              </div>
            </div>

            <div className="done-ele">
              <h1>Done</h1>

              <div className="done-ele-content list-content">
                {doneList.map((task, index) => (
                  <div className="task-element" key={index}>
                    {task.title}
                    <IoTrashOutline
                      className="icon"
                      onClick={() => {
                        deleteTaskIcon(task);
                      }}
                    />
                    <GrEdit className="icon" onClick={() => handleIcon(task)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default ListBody;
