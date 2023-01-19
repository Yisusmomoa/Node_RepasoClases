import { Router } from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import categoryRoutes from "./categoryRoutes.js";

// manejador de rutas montables y modulares
// al final esto de aquí es un middleware
const routes=Router()
// un router es una mini aplicación contenida dentro de otra más grande
// y así ir seprando un router para cada entidad


routes.use('/user', userRoutes)
    // que elrouter de users se encargue exclusivamente de cosas para usuarios
routes.use('/products', productRoutes)
routes.use('/category', categoryRoutes)

export default routes