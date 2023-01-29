import connection from '../db/db.js';

export const getCategories=(req, res, next)=>{
    const query='SELECT id, name from category'
    connection.query(query, (err, result, fields)=>{
        if(err) return next(err)
        res.status(200).send(result)
    })
}

export const getOneCategory=(req, res, next)=>{
    const {id}=req.params
    const query=`SELECT id, name from category where id= ${id}`
    connection.query(query, (err, result, fields)=>{
        if(err) return next(err)
        res.status(200).send(result)
    })
}

export const createCategory= (req, res, next)=>{
    const {name}=req.body
    const query=`INSERT INTO category(name)
        VALUES("${name}")
    `
    connection.query(query, (err, result, fields)=>{
        if(err) return next(err)
        res.status(201).send({message:"categoria creada con exito", success:true})
    })
}

export const updateCategory=(req, res, next)=>{
    const {id}=req.params;
    const {name}=req.body;
    const query="UPDATE category set name=? where id=?"
    connection.query(query, [name, id], (err, result, fields)=>{
        if(err) return next(err)
        res.status(201).send({message:"categoria ediatda con exito", success:true, result})
    })
}

export const deleteCategory=(req, res, next)=>{
    const {id}=req.params;
    const query="DELETE FROM category where id=?"
    connection.query(query, [id], (err, result, fields)=>{
        console.log(result)
        console.log(fields)
        if(err) return next(err)
        res.status(201).send({message:"categoria ediatda con exito", success:true, result})
    })
}