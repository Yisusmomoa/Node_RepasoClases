const socket=io();

const form=document.querySelector("#form")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const username=document.querySelector("#username")

form.onsubmit=(ev)=>{
    ev.preventDefault();
    const user={
        email:email.value,
        password:password.value,
        username:username.value
    }
    register(user)
    /*
     La función toma dos argumentos: el primer 
     argumento es el nombre del evento, que se utiliza para 
     identificar el tipo de mensaje que se está enviando, y el segundo argumento 
     es el cuerpo del mensaje, que puede ser cualquier tipo de datos. 
    
    */

    // socket.emit("register", user)

}

const register=async(data)=>{
    try {
        const res=await fetch('/register',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        })
        console.log(res)
        const body=await res.json()
        if (res.ok) {
           console.log(body)
           alert("ta bien todo")
        }
        else{
            console.log(body)
            alert(body.error)
            
        }
        
    } catch (error) {
        alert(error)
    } 
}