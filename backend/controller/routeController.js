import dbm from "../database/db.js ";
import Task from "../database/schema/task.js";
import mongoose from "mongoose";

export const getAllTasks = async (req, res) => {
  const userList = await Task.find();
  res.status(200).json(userList);
};

export const addNewTask = async (req, res) => {
  const { name, lastname, age } = req.body;
  Task.create({ name: name, lastname: lastname, age: age })
    .then((newUser) => res.status(200).json(newUser))
    .catch((err) => res.status(404).json(err.message));
};
export const getSingleTask = async (req, res) => {
  const { id } = req.params;

  Task.findById(id).then((task) => console.log(task));
  res.status(200).send({ msg: "singlepost ggg" });
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  Task.deleteOne({ _id: id }).then(() => console.log("deleted"));
  res.status(200).send({ msg: "deleted" });
};

export const updateTask = async (req, res) => {
  const { name, description, category, done } = req.body;
  const { id } = req.params;

  await Task.findOneAndUpdate(
    { _id: id },
    { name: name, description: description, category: category, done: done },
    { new: true }
  ).then(res.status(200).send({ msg: "geht" }));
};

// export const getAllTasks = async (req, res) => {};
// export const getAllTasks = async (req, res) => {};
// export const getAllTasks = async (req, res) => {};
// export const getAllTasks = async (req, res) => {};
// export const getAllTasks = async (req, res) => {};
