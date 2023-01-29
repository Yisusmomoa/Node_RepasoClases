import express from 'express';
import { 
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
 } from "../controllers/userController.js";

const userRoutes=express.Router()

// hacemos nuestras peticiones http
userRoutes.get('/', getAllUsers)

userRoutes.get('/:id', getOneUser)

userRoutes.post('/', createUser)

userRoutes.put('/:id', updateUser)

userRoutes.delete('/:id', deleteUser)

export default userRoutes