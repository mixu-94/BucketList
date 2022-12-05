import dbm from "../database/db.js ";
import Task from "../database/schema/task.js";
import mongoose from "mongoose";

export const getAllTasks = async (req, res) => {
  const userList = await Task.find();
  res.status(200).json(userList);
};

export const addNewTask = async (req, res) => {
  const { name, description, category } = req.body;
  Task.create({ name: name, description: description, category: category })
    .then((newTask) => res.status(200).json(newTask))
    .catch((err) => res.status(404).json(err.message));
};

//Single Tasks
export const getSingleTask = async (req, res) => {
  const { id } = req.params;

  const singletask = await Task.findById(id);
  console.log(singletask);
  res.status(200).json(singletask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  Task.deleteOne({ _id: id }).then(() => console.log("deleted"));
  res.status(200).send({ msg: "deleted" });
};

export const updateTask = async (req, res) => {
  const { name, description, category, done } = req.body;
  const { id } = req.params;

  const updatedTask = await Task.findOneAndUpdate(
    { _id: id },
    { name: name, description: description, category: category, done: done },
    { new: true }
  );
  res.status(200).json(updatedTask);
};
