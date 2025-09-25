import User from '../../Database/models/user/user.model.js';
import jwt from "jsonwebtoken"

export const auth = () => {
    return async (req, res, next) => {
        try {
            const { token } = req.headers;
            if (!token) return res.status(400).json({ message: "Please signin first and try again" })
            if (!token.startsWith("Bearer")) return res.status(400).json({ message: "Invalid Token" })
            const originalToken = token.split(" ")[1];
            const decodedToken = jwt.verify(originalToken, "UserToken")
            if (!decodedToken.id) return res.status(400).json({ message: "Invalid Token payload" })
            const user = await User.findById(decodedToken.id);
            if (!user) return res.status(400).json({ message: "Please signup and try again" })
            req.authUser = user
            next()
        } catch (error) {
            res.status(500).json({ Error: error })
        }
    }
}