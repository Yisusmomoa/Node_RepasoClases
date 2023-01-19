import express from 'express'

const categoryRoutes=express.Router()

categoryRoutes.get('/', (req, res)=>{
    res.send("Get all categories")
})

categoryRoutes.get('/:id', (req, res)=>{
    res.send({
        "getcategoryById":req.params.id
    })
})

categoryRoutes.post('/', (req, res)=>{
    res.send("post category")
})

categoryRoutes.put('/:id', (req, res)=>{
    res.send({
        "update category":req.params.id
    })
})

categoryRoutes.delete('/:id', (req, res)=>{
    res.send({
        "delete category": req.params.id
    })
})


export default categoryRoutes

