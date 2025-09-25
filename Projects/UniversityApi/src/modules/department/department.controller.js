import Department from "../../../Database/models/department/department.model.js";

export const getAllDepartment = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json({ AllDepartments: departments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getSpecificDepartment = async (req, res) => {
  try {
    let { id } = req.params;
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: "department not found" });
    }
    res.status(200).json({ department });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addDepartment = async (req, res) => {
  const data = req.body;
  try {
    const alldepartments = await Department.find();
    const existName = alldepartments.find((department) => {
      department.name == data.name;
    });
    if (existName) {
      return res.status(208).json({ message: "Name already exist" });
    }
    const departments = new Department({ ...data });
    await departments.save();
    res.status(201).json({
      message: "department Created Successfully",
      department: departments,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    let { id } = req.params;
    const department = await Department.findByIdAndDelete(id);
    if (!department) {
      return res.status(404).json({ message: "department not found" });
    }
    res.status(200).json({
      message: "department deleted successfully",
      departmentDeleted: department,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
export const updateDepartment = async (req, res) => {
  try {
    let { id } = req.params;
    const department = await Department.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!department) {
      return res.status(404).json({ message: "department not found" });
    }
    res.status(200).json({
      message: "department updated successfully",
      departmentUpdated: department,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
