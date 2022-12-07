import React from "react";
import "./TaskField.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useState } from "react";

const TaskField = (props) => {
  const [isChecked, setIsChecked] = useState(props.done);

  function toggleCheck() {
    setIsChecked(!isChecked);
  }

  function openTaskPage() {}

  return (
    <div className="taskfield" key={props.id}>
      <div className="taskfield-name">{props.name}</div>
      <div className="taskfield-buttons">
        <div className="taskfield-more">
          <button onClick={openTaskPage}> More</button>
        </div>
        <div className="taskfield-checkmark">
          {isChecked ? (
            <ImCheckboxChecked size={25} onClick={toggleCheck} />
          ) : (
            <ImCheckboxUnchecked size={25} onClick={toggleCheck} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskField;
