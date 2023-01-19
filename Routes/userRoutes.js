import express from 'express'

// manejador de rutas
const userRoutes=express.Router()

userRoutes.get('/', (req, res)=>{
    console.log(req.ip)
    res.send("Get all users")

})

userRoutes.get('/:id', (req, res)=>{
    res.send({"getUserById": req.params.id})
})

userRoutes.post('/', (req, res)=>{
    res.send("create user")
})

userRoutes.put('/', (req, res)=>{
    res.send("update user")
})

userRoutes.delete('/', (req, res)=>{
    res.send("delete user")
})


export default userRoutes