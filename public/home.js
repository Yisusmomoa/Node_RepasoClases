const socket=io();

const listRooms=document.querySelector('#rooms')
const formRooms=document.querySelector('#formRooms');
const nameRoom=document.querySelector('#nameRoom');
window.addEventListener('load', ()=>{
    getRooms()
    
})
const showRooms=(data=[])=>{
    const groups=data.map(element=>{
        return `
        <li>
            <a href='room/${element.id}'>
                ${element.nameRoom}
            </a>    
        </li>
        `
   }).join("")
   listRooms.innerHTML=groups
}
const getRooms=async()=>{
    try {
        const res=await fetch('/home/rooms',{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        const body=await res.json()
        if (res.ok) {
           showRooms(body)
        }
        else{
            alert("error")
            console.log(body)
        }
        
    } catch (error) {
        alert(error)
    } 
}

formRooms.onsubmit=(ev)=>{
    ev.preventDefault()
    if(nameRoom.value===undefined || nameRoom.value==="" || nameRoom.value.length===0){
        alert("field the name ")
    }
    else{
        const room={
            nameRoom:nameRoom.value
        }
        socket.emit("createRoom", room)
        nameRoom.value=""
    }
}

socket.on("rooms", (data)=>{
    console.log(data)
    showRooms(data)
})