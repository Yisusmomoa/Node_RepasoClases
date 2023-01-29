
import express from 'express';
import connection from '../db/db.js';
import { 
    getAllProucts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,

 } from "../controllers/productController.js";
export const productRouter=express.Router()

productRouter.get('/', getAllProucts)

productRouter.get('/:idProduct', getOneProduct)

productRouter.post('/', createProduct)

productRouter.put('/:idProduct', updateProduct)

productRouter.delete('/:idProduct', deleteProduct)

