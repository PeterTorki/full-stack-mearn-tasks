const express = require("express");
const Student = require("../models/student.model");
const Enrollment = require("../models/enrollment.model");
const router = express.Router();
const validator = require("../utils/schemaValidator");
const studentValidator = require("../validators/student.validator");

router.post("/", validator(studentValidator), async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const students = await Student.find({ active: true }).populate("department");
  res.json(students);
});

router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id).populate("department");
  res.json(student);
});

router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, { active: false }, { new: true });
  await Enrollment.deleteMany({ student: req.params.id });
  res.json({ message: "Student deactivated and enrollments removed", student });
});

module.exports = router;
