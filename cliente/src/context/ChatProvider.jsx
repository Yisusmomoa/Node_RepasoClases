import React, { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

// el chat context es la variable que va a venir y te llevará la información
export const chatContext = createContext()
const {Provider}=chatContext

const ChatProvider = ({children}) => {
    // children son todos los componentes que esten siendo
    // envueltos por el ChatProvider

    // la url dondese esta ejecutando mi servidor
    const socket = io('http://localhost:3000');
    // puede presentar el problema con el cors
    // intercambio de origenes cruzados
    // me estas haciendo peticiones de un lugar que no conozco
    // se soluciona usando una libreria llamada cors
    // se instala del lado del servidor

    const [roomSelected, setRoomSelected] = useState("room1");
    const [newMessages, setMessages]=useState([])
    const [rooms, setRooms]=useState([])
    useEffect(() => {
        socket.emit("room", roomSelected)
    }, [roomSelected]);

    // para pintar los mensajes
    socket.on("messages", messages=>{
        console.log(messages)
        setMessages(messages)
    })

    // para pintar los rooms
    useEffect(() => {
        socket.on("rooms", (dataRooms)=>{
            setRooms(dataRooms)
        })
    }, []);

    // para cambiar los rroms
    const changeRoom=(nameRoom)=>{
        setRoomSelected(nameRoom)
    }
    const dataChatContext={
        roomSelected,
        newMessages,
        rooms,
        changeRoom
    }
  return (
    // el render prop dataCHatCOntext son los metodos y valores que van a poder ser llamados
    // desde cualquier componente siempre y cuando este sea hijo de chatProvider
    <Provider value={dataChatContext}>
        {children}
    </Provider>
  )
}

export default ChatProvider