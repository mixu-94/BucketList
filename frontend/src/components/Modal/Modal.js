import React, { useState, useRef } from "react";
import "./Modal.css";
import { TbPlant } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { addNewTask } from "../../API/request";

function Modal({ closeModal }) {
  const categories = ["Finanzen", "Health", "Personality"];
  //
  const category1 = "Finanzen";
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    category: "No Category",
  });

  function onChange(e) {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
      //   description: e.target.description.value,
    });
  }

  function selectCategory(e) {
    e.preventDefault();
    console.log(e.target.id);
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.name,
      //   description: e.target.description.value,
    });
    console.log(newTask);
  }

  function onSubmit(e) {
    e.preventDefault();
    addNewTask(newTask);
    //POST Request mit task Object
  }

  function handleRadio(e) {
    console.log(e.target.id);
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.id,
      //   description: e.target.description.value,
    });
    console.log(newTask);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1 className="font-bold m-4">Bucket anlegen:</h1>
        </div>
        <div className="body">
          <form className="felx-auto content-center flex-col">
            <div className="radiobuttons">
              <input
                type="radio"
                name="category"
                id="card"
                onClick={handleRadio}
              />
              <label htmlFor="card">
                <TbPlant />
              </label>

              <input
                type="radio"
                name="category"
                id="d"
                onClick={handleRadio}
              />
              <label htmlFor="d">
                <TbPlant />
              </label>
              <input
                type="radio"
                name="category"
                id={categories[0]}
                onClick={handleRadio}
              />
              <label htmlFor={categories[0]}>
                <TbPlant />
              </label>
              <input
                type="radio"
                name="category"
                id="b"
                onClick={handleRadio}
              />
              <label htmlFor="b">
                <TbPlant />
              </label>
              <input
                type="radio"
                name="category"
                id="a"
                onClick={handleRadio}
              />
              <label htmlFor="a">
                <TbPlant />
              </label>
            </div>
            {/* <label>
              <input type="radio" name="test" value="small" />
              <TbPlant />
            </label>
            <ul>
              <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]">
                <TbPlant />
              </li>
              <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]">
                <FaHeartbeat />
              </li>
              <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]">
                <RiUserHeartFill />
              </li>
              <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]">
                <GiOfficeChair />
              </li>
              <li className="p-3  inline-block bg-white rounded-full hover:bg-[#84A98C]">
                <AiOutlineDollarCircle />
              </li>
            </ul> */}
            <p className="m-2">Category: {newTask.category} </p>
            {/* <label className="flex m-2 p-2 flex-col"> */}
            <p>Name:</p>
            <input type="text" name="name" onChange={onChange} required />

            {/* </label> */}
            {/* <label className="flex m-2 p-2 flex-col"> */}
            <p>Description:</p>
            <input type="text" name="description" onChange={onChange} />
            {/* </label> */}
            <div className="footer">
              <br />
              <button
                className="m-3 p-3 font-bold bg-red-500 rounded-lg"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={onSubmit}
                className="m-3 p-3 font-bold bg-[#84A98C] rounded-lg"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
