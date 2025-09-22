const express = require("express");
const validate = require("../middlewares/validation");
const mongoose = require("mongoose");
const router = express.Router();
const Student = require("../models/studentModel");
const studentModel = require("../models/studentModel");

router.get("/:_id", async (req, res) => {
  try {
    const id = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid ID" });
    }

    const item = await studentModel.findById(id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/", async (req, res) => {
  const students = await Student.find({}).limit(10);
  res.json({ msg: "success", students });
});

router.post("/", validate, async (req, res) => {
  if (!req.valid) {
    res.status(400).json({ msg: "invalid data" });
    return;
  }
  const data = req.body;
  const student = new Student(data);
  await student.save();
  res.json({ msg: "student added", student });
});

module.exports = router;
