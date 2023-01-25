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
 const rooms=
 {
     room1:[
         {
             user:"yo",
             "message":"sala1"
         }
     ],
     room2:[
         {
             user:"tu",
             "message":"sala2"
         }
     ],
     room3:[
         {
             user:"el",
             "message":"sala3"
         }
     ]
 }


io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("room", (room)=>{
        console.log(room)
        socket.join(rooms[room])
        io.to(rooms[room]).emit("messages", rooms[room])
    })
    const roomsArray=Object.keys(rooms)
    socket.emit("rooms", roomsArray)
});

httpServer.listen(3000, ()=>{
    console.log("server ok")
});


