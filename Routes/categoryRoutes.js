import express from 'express';
import connection from '../db/db.js';
import { 
    getCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory
 } from "../controllers/categoryController.js";

const categoryRoutes=express.Router()

categoryRoutes.get('/', getCategories)

categoryRoutes.get('/:id',getOneCategory )

categoryRoutes.post('/', createCategory)

categoryRoutes.put('/:id', updateCategory)

categoryRoutes.delete('/:id', deleteCategory)

export default categoryRoutes