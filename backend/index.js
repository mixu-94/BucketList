import express from "express";
import { taskrouter } from "./routes/routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", taskrouter);

app.listen(PORT, () => console.log("Server started"));
