import express from "express";
import {
  addCourse,
  deleteCourse,
  getAllCourse,
  getSpecificCourse,
  updateCourse,
} from "./course.controller.js";
import { validate } from "../../middleware/validations.middleware.js";
import { courseSchema } from "./course.validation.js";

const courseRouter = express.Router();
courseRouter.get("/", getAllCourse);
courseRouter.get("/:id", getSpecificCourse);
courseRouter.post("/", validate("course"), addCourse);
courseRouter.delete("/:id", deleteCourse);
courseRouter.put("/:id", validate("course"), updateCourse);

export default courseRouter;
