import bodyParser from "body-parser";
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

/*
{
    username:"",
    "email":"",
    "password":""    
}
*/
let users=[
    {
        email:"correospamtuptm@gmail.com",
        password:"123",
        "username":"makav6"
    }
]

/*
{
    "id":1,
    "messages":[
        {
            "username":"user",
            "msg":"qwertyu"
        }
    ],
    "nameRoom":""

}

*/
let rooms=[
    {
        id:1,
        "messages":[

        ],
        "nameRoom":"room1"
    }
]

app.use(express.static("public"))

app.get("/", (req, res)=>{
    // res.sendFile(`/index.html`)
    res.sendFile(`${__dirname}/index.html`)

})

// registro y login de manera "local"
//creación de rooms


app.get("/register", (req, res)=>{
    res.sendFile(`${__dirname}/public/register.html`)
})

app.get('/login', (req, res)=>{
    res.sendFile(`${__dirname}/public/login.html`)
})

app.get('/home/rooms', (req, res)=>{
    res.status(200).send(rooms)
})
app.get('/home', (req, res)=>{
    res.sendFile(`${__dirname}/public/home.html`)
})



app.post("/register", (req, res)=>{
    const {email, username, password}=req.body
    const isUserExist=users.some(user=>user.username===username)
    if (isUserExist) {
        return res.status(404).send({
            "error":"username is already exists"
        })
    } else {
        const user={
            email,
            username,
            password
        }
        users.push(user)
        console.log(users)
        return res.status(201).send({
            "success":"user was succesufly register"
        })
    }
})

app.post("/login", (req, res)=>{
    const {email, password}=req.body;
    console.log(users)
    const user=users.find(element=>{
        return element.email===email && element.password===password
    })
    if (user!=undefined) {
        console.log(user)
        return res.status(200).send(user)
    }
    return res.status(404).send({
        error:"Email o password incorrect"
    })
})

// loin lo guardo en el sessionStorage

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