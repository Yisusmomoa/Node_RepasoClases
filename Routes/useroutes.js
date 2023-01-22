import express from 'express';


const userRoutes=express.Router()

userRoutes.post("/register", (req, res)=>{
    const {email, username, password}=req.body
    const isUserExist=users.some(user=>user.username===username)
    if (isUserExist) {
        res.status(404).send({
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
        res.status(201).send({
            "success":"user was succesufly register"
        })
    }
})

export default userRoutes