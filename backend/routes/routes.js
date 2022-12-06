import { Router } from "express";
import {
  getAllTasks,
  addNewTask,
  deleteTask,
  updateTask,
  getSingleTask,
} from "../controller/routeController.js";
import { checkTask } from "../middleware/checkTasks.js";

export const taskrouter = Router();

taskrouter.route("/task").get(getAllTasks).post(addNewTask);

taskrouter
  .route("/task/:id")
  .get(checkTask, getSingleTask)
  .delete(checkTask, deleteTask)
  .put(checkTask, updateTask);
