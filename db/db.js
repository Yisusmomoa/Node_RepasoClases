import mysql from 'mysql2'

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'up'
})

connection.connect(err=>{
    if(err) throw err
    console.log("conexión exitosa")
})

export default connection