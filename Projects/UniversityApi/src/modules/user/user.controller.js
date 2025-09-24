import User from "../../../Database/models/user/user.model.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getSpecificUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully", userDeleted: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", userUpdated: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
