const express = require("express");
const Course = require("../models/course.model");
const Enrollment = require("../models/enrollment.model");
const router = express.Router();
const validator = require("../utils/schemaValidator");
const courseValidator = require("../validators/course.validator");

router.post("/", validator(courseValidator), async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const courses = await Course.find().populate("department");
  res.json(courses);
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id).populate("department");
  res.json(course);
});

router.put("/:id", async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
});

router.delete("/:id", async (req, res) => {
  await Enrollment.deleteMany({ course: req.params.id });
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course and related enrollments deleted" });
});

module.exports = router;
