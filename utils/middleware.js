// middleware a nivel de ruta
// puede servir para proteger rutas
// let user=false;
export const isUser=(req, res, next)=>{
    if (req.body.role==="admin") {
        console.log("user ok")
    }
    else{
        res.redirect(401,"/")
    }
    next()
}
// middleware a nivel de ruta