import express from "express"
import UserController from "../controller/UserController.js"
const userRoutes = express.Router()

userRoutes.get("/", UserController.getAllUser)

userRoutes.get("/:id", UserController.getUserById)

userRoutes.post("/", UserController.createUser)

userRoutes.put("/:id", UserController.updateUser)

userRoutes.delete("/:id", UserController.deleteUser)

export default userRoutes

