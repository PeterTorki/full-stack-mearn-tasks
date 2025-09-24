import express from "express";
import {
  addDepartment,
  deleteDepartment,
  getAllDepartment,
  getSpecificDepartment,
  updateDepartment,
} from "./department.controller.js";

const departmentRouter = express.Router();
departmentRouter.get("/", getAllDepartment);
departmentRouter.get("/:id", getSpecificDepartment);
departmentRouter.post("/", addDepartment);
departmentRouter.delete("/:id", deleteDepartment);
departmentRouter.put("/:id", updateDepartment);

export default departmentRouter;
