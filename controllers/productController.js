import connection from '../db/db.js';

export const getAllProucts=(req, res, next)=>{
    const query=`SELECT idProduct, productName, price, name as "name category" from product p join category c 
        on p.idCategory=c.id
    `
    connection.query(query, (err, result, fields)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).send(result)
    })
}

export const getOneProduct=(req, res)=>{
    const {idProduct}=req.params
    const query=`SELECT idProduct, productName, price, name as "name category" from product p join category c 
        on p.idCategory=c.id WHERE idProduct="${idProduct}"
    `

    connection.query(query, (err, result, fields)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).send(result)
    })
}

export const createProduct= (req, res)=>{
    const {productName, price, idCategory}=req.body
    const query=`INSERT INTO product(productName, price, idCategory)
            VALUES(?,?,?)
    `
    connection.query(query, [productName, price, idCategory],
         (err, result, fields)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(201).send({
                message:"producto cread con exito",
                result
            })
    })
}

export const updateProduct=(req, res)=>{
    const {idProduct}=req.params
    const {productName, price, idCategory}=req.body
    const query=`UPDATE product set productName=?, price=?, idCategory=? where idProduct=?`
    connection.query(query, [productName, price, idCategory, idProduct],
        (err, result, fields)=>{
           if(err){
               return res.status(500).send(err)
           }
           res.status(201).send({
               message:"producto editado con exito",
               result
           })
   })
}

export const deleteProduct=(req, res)=>{
    const {idProduct}=req.params
    const query=`delete from product where idProduct=${idProduct}`
    connection.query(query,
        (err, result, fields)=>{
           if(err){
               return res.status(500).send(err)
           }
           res.status(201).send({
               message:"producto eliminado con exito",
               result
           })
   })
}


