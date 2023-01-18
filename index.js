/*
https://expressjs.com/en/resources/middleware.html
https://expressjs.com/en/guide/writing-middleware.html
https://expressjs.com/en/4x/api.html#res.attachment

*/


import express from 'express'
import { isUser } from './utils/middleware.js';
const app=express()
const PORT=8081;

/*
Middleware functions are functions that have access 
to the request object (req), the response object (res), and the next function in the application’s request-response cycle. 
The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
*/

// middleware incorporado o de intergación
app.use(express.json())
// si yo le mando un dato de tipo json, mi backend o en este caso mi api lo pueda tarabajr


app.use(express.urlencoded({extended:true}))
/*
Returns middleware that only parses urlencoded bodies 
and only looks at requests where the Content-Type header matches the type option. 
This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

Middleware functions can perform the following tasks:

    Execute any code.
    Make changes to the request and the response objects.
    End the request-response cycle.
    Call the next middleware in the stack.
*/

// middleware incorporado o de intergación

// middleware a nivel aplicación, algo que yo creo
app.use(function (req, res, next) {
    // recibe 3 parametros
    console.log(Date())
    // primero pasa por aquí y luego pasa a las peticiones http
    next()
    // después de hacer lo que tiene que hacer next indica lo que sigue, que en este caso es la solicitud
})
const method=(req, res, next)=>{
    console.log(req.method)
    next()
}
app.use(method)
// middleware a nivel aplicación, algo que yo creo

app.listen(PORT, ()=>{
    console.log(`Server running in ${PORT}`);

})

// app.get('/', (req, res)=>{
//     res.send(
//         '<h1>Hola</h1>'
//     )
// })

// crud
// create
app.post('/', isUser, (req, res)=>{
    res.send("post")
})

// get / list
app.get('/', (req, res)=>{
    res.send("Get all")
})

// get
app.get('/:id', (req, res)=>{
    res.send("get by id")
})

// update
app.put('/:id',isUser, (req, res)=>{
    res.send("Put")
})

// delete
app.delete('/:id', isUser, (req, res)=>{
    res.send("delete")
})

