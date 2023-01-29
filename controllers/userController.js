import connection from '../db/db.js';

export const getAllUsers=(req, res, next)=>{
    const query=`SELECT id, email, username, contraseña from user`
    connection.query(query, (err, result, fields)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(201).send(result)
    })
}

export const getOneUser=(req, res, next)=>{
    const {id}=req.params;
    const query=`SELECT id, email, username, contraseña from user where id="${id}"`
    connection.query(query, (err, result, fields)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(201).send(result)
    })
}

export const createUser=(req, res, next)=>{
    const {email, username, contraseña}=req.body
    const query="INSERT INTO user(email, username, contraseña) VALUES(?,?,?)"
    connection.query(query, [email, username,contraseña]
        , (err, result, fields)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.status(201).send({
                message:"usuario cread con exito",
                success:true,
                result
            })
    })
}

export const updateUser=(req, res, next)=>{
    const {id}=req.params;
    const {username, contraseña}=req.body;
    const query=`UPDATE user Set username=?, contraseña=? where id=?`
    connection.query(query, [username, contraseña, id], (err, result, fields)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).send({
            message:"usuario editado con exito",
            success:true,
            result
        })
    })
}

export const deleteUser=(req, res, next)=>{
    const {id}=req.params;
    const query=`DELETE FROM user Where id = "${id}"`
    connection.query(query, (err, result, fields)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).send({
            message:"usuario eliminado con exito",
            success:true,
            result
        })
    })
}