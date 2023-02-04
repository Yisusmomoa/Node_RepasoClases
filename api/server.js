import express from 'express'
import morgan from 'morgan'
import db from './db/db.js'
import routes from './routes/index.js'
import dotenv from 'dotenv';
dotenv.config()

// import Category from './models/Category.js'
// import Product from './models/Product.js'
// import {Category, Product} from './models/index.js'
const app=express()

// Process es un objeto global que nos da acceso
// al proceso actual de node en ejecución
// cuando iniciamos nuestra app se genera un objeto
// al que podemos acceder de forma inmediata
// el objeto process cuenta con muchas propidades
// entre ella el .env
const APIPORT=process.env.API_PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny'))

app.use('/api', routes)

// db.sync() -> crea la tabla si no existe, no hace nada si ya existe
// db.sync({force:true}) -> elimina y vuelve a crear la tabla, obvio si existe elimina la tabla
// db.sync({force:false}) -> crea la tabla si no existe, no hace nada si ya existe, este modo viene por default

await db.sync({force:false}).then(()=>{
    app.listen(APIPORT, ()=>{
        console.log("servidor ok")
    })
})


