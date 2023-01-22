const socket=io();

const form=document.querySelector("#form")
const email=document.querySelector("#email")
const password=document.querySelector("#password")

form.onsubmit=(ev)=>{
    ev.preventDefault();
    const user={
        email:email.value,
        password:password.value,
    }
    login(user)

}

const login=async (data)=>{
    try {
        const res=await fetch('/login',{
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
           alert("ta bien todo, binevenido")
           sessionStorage.setItem("user", JSON.stringify(body))
        }
        else{
            console.log(body)
            alert(body.error)
            
        }
        
    } catch (error) {
        alert(error)
    } 
}