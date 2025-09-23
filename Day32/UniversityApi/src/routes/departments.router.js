const express = require("express");
const Department = require("../models/department.model");
const Course = require("../models/course.model");
const router = express.Router();
const validator = require("../utils/schemaValidator");
const departmentValidator = require("../validators/department.validator");

router.post("/", validator(departmentValidator), async (req, res) => {
  try {
    const dept = await Department.create(req.body);
    res.status(201).json(dept);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

router.get("/:id", async (req, res) => {
  const dept = await Department.findById(req.params.id);
  const courses = await Course.find({ department: req.params.id });
  res.json({ ...dept.toObject(), courses });
});

router.put("/:id", async (req, res) => {
  const dept = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(dept);
});

router.delete("/:id", async (req, res) => {
  await Course.deleteMany({ department: req.params.id });
  await Department.findByIdAndDelete(req.params.id);
  res.json({ message: "Department and its courses deleted" });
});

module.exports = router;
