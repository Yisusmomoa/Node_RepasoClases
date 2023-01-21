const socket=io();

const user=document.querySelector("#user")
const userMessage=document.querySelector("#message")
const chat=document.querySelector("#chat")
const form=document.querySelector("#form")

let dataGet=null

const showMessages=(data=[])=>{
    const messages=data.map((m,i)=>{
        if (m.user===data[i-1]?.user) {
            return `
                <dd>${m.message}</dd>
            `
        } else {
            return `
                <dt>${m.user}</dt>
                <dd>${m.message}</dd>
            `
        }
    }).join("")
    chat.innerHTML=messages
}

socket.on("messages", (data)=>{
    console.log(data)
    dataGet=data
    showMessages(data)
    
})

form.onsubmit=(ev)=>{
    ev.preventDefault();
    const message={
        user:user.value,
        message:userMessage.value
    }
    socket.emit("newMessage", message);
    userMessage.value=""

}


