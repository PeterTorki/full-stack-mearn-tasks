const express = require("express");
const Enrollment = require("../models/enrollment.model");
const router = express.Router();
const validator = require("../utils/schemaValidator");
const enrollmentValidator = require("../validators/enrollment.validator");

// Enroll student in course
router.post("/", validator(enrollmentValidator), async (req, res) => {
  try {
    const { student, course } = req.body;
    const enrollment = await Enrollment.create({ student, course });
    res.status(201).json(enrollment);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: "Student already enrolled in this course" });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
});

// Get all courses of a student
router.get("/student/:id", async (req, res) => {
  const enrollments = await Enrollment.find({ student: req.params.id }).populate("course");
  res.json(enrollments.map((e) => e.course));
});

// Get all students in a course
router.get("/course/:id", async (req, res) => {
  const enrollments = await Enrollment.find({ course: req.params.id }).populate("student");
  res.json(enrollments.map((e) => e.student));
});

// Unenroll student from course
router.delete("/", async (req, res) => {
  const { student, course } = req.body;
  await Enrollment.findOneAndDelete({ student, course });
  res.json({ message: "Unenrolled successfully" });
});

module.exports = router;
