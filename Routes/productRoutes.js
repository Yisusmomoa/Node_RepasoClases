import express from "express"
import Product from "../models/Product.js"
import Category from "../models/Category.js"
export const productRoutes=express.Router()

productRoutes.get("/",async (req, res)=>{
    try {
        const products=await Product.findAll({
            include:[
                {
                    model:Category, required:true
                }
            ]
        })
        res.status(200).send(products)
    } catch (error) {
        console.log(error)
        return res.status(500).send({error})
    }
})
productRoutes.get("/:id",(req, res)=>{
    res.send({getProductById:req.params.id})
})

productRoutes.post("/", async(req, res)=>{
    const {name, price, CategoryId, description, stock}=req.body
    try {
        const result=await Product.create({
            name:name,
            price:price,
            CategoryId:CategoryId,
            description:description,
            stock:stock
        })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

productRoutes.put("/",(req, res)=>{
    res.send("updateProduct")
})
productRoutes.delete("/",(req, res)=>{
    res.send("deleteProduct")
})

