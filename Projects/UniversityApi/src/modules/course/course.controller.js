import Course from "../../../Database/models/courses/course.model.js";

export const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find().populate("department");
    res.status(200).json({ AllCourses: courses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getSpecificCourse = async (req, res) => {
  try {
    let { id } = req.params;
    const course = await Course.findById(id).populate("department");
    if (!course) {
      return res.status(404).json({ message: "course not found" });
    }
    res.status(200).json({ course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addCourse = async (req, res) => {
  const data = req.body;
  try {
    const allcourses = await Course.find();
    const courses = new Course({ ...data });
    await courses.save();
    res.status(201).json({
      message: "course Created Successfully",
      course: courses,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    let { id } = req.params;
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ message: "course not found" });
    }
    res.status(200).json({
      message: "course deleted successfully",
      courseDeleted: course,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
export const updateCourse = async (req, res) => {
  try {
    let { id } = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body,{
      new: true,
      runValidators: true,
    }).populate("department");
    if (!course) {
      return res.status(404).json({ message: "course not found" });
    }
    res.status(200).json({
      message: "course updated successfully",
      courseUpdated: course,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
