import express from 'express'
import morgan from 'morgan'
import db from './db/db.js'
import routes from './routes/index.js'
// import Category from './models/Category.js'
// import Product from './models/Product.js'
import {Category, Product} from './models/index.js'
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny'))

app.use('/api', routes)

// db.sync() -> crea la tabla si no existe, no hace nada si ya existe
// db.sync({force:true}) -> elimina y vuelve a crear la tabla, obvio si existe elimina la tabla
// db.sync({force:false}) -> crea la tabla si no existe, no hace nada si ya existe, este modo viene por default

await db.sync({force:false}).then(()=>{
    app.listen(8080, ()=>{
        console.log("servidor ok")
    })
})


