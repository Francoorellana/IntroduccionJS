var express = require('express') 
var app = express() 



//METODOS HTTP
app.use("/", (req,res) => res.send("Hola Franco y Mer") )
app.post("/login", (req,res) => res.send("Bienvenido") )
app.patch("/actualizar", (req,res) => res.send("Usuario actualizado") )
app.delete("/login", (req,res) => res.send("Usuario logueado") )


app.listen(3000, () => console.log("Escuchando en el puerto 3000"))

//instalando el paquete "nodemon" se ejecuta el servidor todo el tiempo y se visualizan las modificaciones sin hacer el despliegue