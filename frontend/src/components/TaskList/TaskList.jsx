import React from "react";
import { useState } from "react";
import "./TaskList.css";
import useFetch from "../../useFetch";
import TaskField from "../TaskField/TaskField";

const TaskList = (searchkeyword) => {
  const [tasklist, setTaskList] = useState(null);

  const { data, loading, error } = useFetch("http://localhost:3000/task");
  console.log(data);

  if (!data) {
    return <div className="tasklist">....Laden</div>;
  } else {
    const createTaskList = data.map((item) => {
      console.log(item);
      if (item.category == "Finanzen") {
        return (
          <div key={item._id}>
            <TaskField
              id={item._id}
              name={item.name}
              category={item.category}
              descprition={item.descprition}
              done={item.done}
            />
          </div>
        );
      }
    });
    return (
      <div className="tasklist">
        {createTaskList}
        <TaskField name="Aaaa" category="Finanzen" />
      </div>
    );
  }

  // return <div className="tasklist">{createTaskList}</div>;
};

export default TaskList;
