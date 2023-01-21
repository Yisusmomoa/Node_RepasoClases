import express from "express";
import {createServer} from 'http'

import { dirname } from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";

// el nombre del archivo actual, el que lo esta ejecutando
const __filename = fileURLToPath(import.meta.url);
// console.log(__filename)
// donde estas parado
const __dirname = dirname(__filename);
// console.log(__dirname)
// esto lo tengo que usar porque estoy trabajando con type:module


const app=express()

// crear un servidor y montar todo el modulo de app si quiero usar rutas y lo pueda manejar con express
// todas mis rutas estarán montadas en este sevrer
const httpServer=createServer(app)

// creamos una nueva instancia para poder conectar al servidor nativo
// en este servidor se van a conectar los sockets
const io=new Server(httpServer)
let messages=[
    {
        user:"os",
        message:"Hola equipo"
    },
    {
        user:"Kuka",
        message:"Hola equipo"
    }
]

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.sendFile(`/index.html`)
})


// "enciendo" mi socket
// y se ejecuta cuando un cliente se conecta
// la variable socket hace referencia al archivo index.js de la carpeta public, indica que alguien se conecto
io.on("connection", (socket)=>{
    console.log("Hola", socket.id)

    // primero mostrar los mensaje desde el server
    socket.emit("messages", messages)
    
    socket.on("newMessage", (data)=>{
        messages.push(data)
        io.sockets.emit("messages", messages)
    })

})

httpServer.listen(3000, ()=>{
    console.log("Server ok")
})