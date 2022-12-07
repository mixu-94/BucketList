import React from "react";
import { useState } from "react";
import "./TaskList.css";
import useFetch from "../../useFetch";
import TaskField from "../TaskField/TaskField";

const TaskList = () => {
  const [tasklist, setTaskList] = useState();

  const { data, loading, error } = useFetch("http://localhost:3000/task");
  console.log(data);

  const createTaskList = data.map((item) => {
    console.log(item);
    //   if (item.category == category) {
    <TaskField
      id={item._id}
      name={item.name}
      category={item.category}
      descprition={item.descprition}
      done={item.done}
    />;
    //   }
  });

  return <div className="tasklist">{createTaskList}</div>;
};

export default TaskList;
