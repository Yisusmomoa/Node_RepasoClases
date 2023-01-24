import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors:{
        origin:'http://127.0.0.1:5173'
    }
 });

io.on("connection", (socket) => {
    console.log(socket.id)
});

httpServer.listen(3000, ()=>{
    console.log("server ok")
});


