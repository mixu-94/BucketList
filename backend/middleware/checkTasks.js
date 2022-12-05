import Task from "../database/schema/task.js";

export const checkTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const test = await Task.findById(id);
    console.log(test);
    if (test._id) {
      next();
    }
  } catch {
    res.status(404).send({ msg: "task not found" });
  }
};
