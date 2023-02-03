import { Router } from "express";
import CategoryController from "../controller/CategoryController.js";

const categoryRoutes = Router()

categoryRoutes.get("/", CategoryController.getAllCategories)

categoryRoutes.get("/:id", CategoryController.getCategoryById)

categoryRoutes.post("/", CategoryController.createCategory)

categoryRoutes.put("/:id", CategoryController.updateCategory)

categoryRoutes.delete("/:id", CategoryController.deleteCategory)

export default categoryRoutes


