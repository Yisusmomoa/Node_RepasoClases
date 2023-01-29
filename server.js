// primer paso
import express, {  Router } from 'express'
// import { isUser } from './utils/middleware.js'
import routes from './Routes/index.js'
import morgan from 'morgan'

const app=express()

const PORT=8080
// middleware incorporado o integración
// middleware a nivel de la aplicación
app.use(express.json())
// si yo le mando un tipo de dato tipo json, mi backend lo pueda trabajar
app.use(express.urlencoded({extended:true}))

// middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routes)
app.listen(PORT, ()=>{
    console.log(`servidor Ok ${PORT}`)
})


