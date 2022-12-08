import React from "react";
import "./TaskField.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useState } from "react";
import { useEffect } from "react";

const TaskField = ({ id, name, description, done, category }) => {
  const [isChecked, setIsChecked] = useState(done);
  const [taskcolour, setTaskColour] = useState("green");

  function toggleCheck() {
    setIsChecked(!isChecked);
  }

  function setBGColour() {
    switch (category) {
      case "Finanzen":
        setTaskColour("#31d51ca6");
        break;

      default:
        setTaskColour("grey");
        break;
    }
  }

  useEffect(() => {
    setBGColour();
  }, []);

  function openTaskPage() {}

  return (
    <div className="taskfield" key={id} style={{ backgroundColor: taskcolour }}>
      <div className="taskfield-name">
        <a>{name}</a>
      </div>
      <div className="taskfield-buttons">
        <div className="taskfield-more">
          <button onClick={openTaskPage}> More</button>
        </div>
        <div className="taskfield-checkmark">
          {isChecked ? (
            <ImCheckboxChecked size={25} />
          ) : (
            <ImCheckboxUnchecked size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskField;
