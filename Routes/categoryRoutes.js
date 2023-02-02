import { Router } from "express";
import Category from "../models/Category.js";

const categoryRoutes = Router()

categoryRoutes.get("/", async (req, res) => {
    try {
        const categories=await Category.findAll()
        res.status(200).send(categories)
    } catch (error) {
        return res.status(500).send(error)
    }
})

categoryRoutes.get("/:id", async(req, res) => {
    const {id}=req.params
    try {
        const category=await Category.findAll({
            where:{
                id:id,
            }
        })
        res.status(200).send(category)
    } catch (error) {
        return res.status(500).send(error)
    }
})

categoryRoutes.post("/", async (req, res) => {
    const category={
        name:req.body.name
    }
    try {
        const result=await Category.create(category)
        res.status(201).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
})

categoryRoutes.put("/:id", async (req, res) => {
    res.send("updateCategory")
})

categoryRoutes.delete("/:id", async (req, res) => {
    const {id}=req.params
    try {
        const result=await Category.destroy({
            where: {id:id}
        })
        console.log(result)
        res.status(200).send({result})
    } catch (error) {
        return res.status(500).send(error)
    }
})

export default categoryRoutes


