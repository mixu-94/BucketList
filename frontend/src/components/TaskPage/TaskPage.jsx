import React from "react";
import { useState } from "react";

const TaskPage = () => {
  const [tasklist, setTaskList] = useState();

  return (
    <div>
      <div className="taskpage-header">LOGO</div>
      <div> back Button</div>
      <div className="taskpage-taskname"> Taskname</div>
      <div> category</div>
      <div> Descirption</div>
      <div> Edit / Delete Button</div>
      <div> back Button</div>
    </div>
  );
};

export default TaskPage;
