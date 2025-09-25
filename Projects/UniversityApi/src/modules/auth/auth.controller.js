import User from './../../../Database/models/user/user.model.js';
import jwt from "jsonwebtoken"

export const signin = async (req, res) => {
    try {
        const token = jwt.sign({ id: req.user._id, role: req.user.role }, "UserToken")
        const userObj = req.user.toObject();
        delete userObj.password;
        res.status(200).json({ message: "User logged", User: userObj, token: "Bearer " + token })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}



export const signup = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "user created successfully", user: newUser })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}