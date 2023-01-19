import express from 'express'

const productRoutes=express.Router()

productRoutes.get('/', (req, res)=>{
    res.send("Get all products")
})

productRoutes.get('/:id', (req, res)=>{
    res.send({
        "getProductById":req.params.id
    })
})

productRoutes.post('/', (req, res)=>{
    res.send("postProduct")
})

productRoutes.put('/:id', (req, res)=>{
    res.send({
        "updateProduct":req.params.id
    })
})

productRoutes.delete('/:id', (req, res)=>{
    res.send({
        "deleteProduct":req.params.id
    })
})

export default productRoutes