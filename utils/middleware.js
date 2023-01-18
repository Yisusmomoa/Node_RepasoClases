// middleware a nivel de ruta
// puede servir para proteger rutas
// let user=false;
export const isUser=(req, res, next)=>{
    if (req.body.role==="Admin") {
        console.log("user ok")
    }
    else{
        return res.redirect(301,'/')
    }
    next()
}
// middleware a nivel de ruta