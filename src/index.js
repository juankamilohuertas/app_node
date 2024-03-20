import express from "express";

const app = express() //ejecuta express

app.listen(3000) // puerto

app.get("/", (req,res)=>{
    res.send("<h1>Hola Mundo</h1>")//envio de respuesta del cliente
})
/* otra pagina */
app.get("/about", (req,res)=>{
    res.send("<h1>acerca de</h1>")//envio de respuesta del cliente
})