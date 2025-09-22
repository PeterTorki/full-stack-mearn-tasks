const express = require("express");
const validate = require("../middlewares/validation");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = new mongoose.Schema({
  User_ID: {
    type: Number,
    unique: true,
    required: true,
  },
  Name: {
    type: String,
    required: true,
    match: /^[a-zA-Z]*/,
    maxLength: 10,
  },
  Age: {
    type: Number,
    max: 50,
    min: 18,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Subscription_Type: {
    type: String,
    required: true,
  },
  Favorite_Genre: {
    type: String,
    enum: ["Action", "Drama"],
  },
});
// #4 create model -> quries
const User = new mongoose.model("users", userSchema);
// get all users
router.get("/", async (req, res) => {
  const users = await User.find({}).limit(10);
  // res.send("jjjjj");
  res.json({ msg: "success", users });
});

// get user by id
router.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  // const user = await User.findById(_id);
  // lookup -> populate
  // select -> project
  const user = await User.findOne({ _id }).select("-Age");
  res.json({ msg: "success", data: user });
});

router.post("/", validate, async (req, res) => {
  if (!req.valid) {
    res.json({ msg: "success", data: validate.errors });
  } else {
    const data = req.body;
    const user = new User({ ...data });
    await user.save();
    res.json({ msg: "success", data: user });
  }
});

module.exports = router;
