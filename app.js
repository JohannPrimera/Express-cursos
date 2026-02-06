const express = require("express");

const app = express();

const {infoCursos} = require("./cursos.js");
// console.log(infoCursos);

//Routing
app.get("/", (req,res) => {
    res.send("mi primer servidor. Cursos.");
});

app.get("/api/cursos",(req,res) =>{
    res.send(infoCursos);
})

const PUERTO = 3000;

app.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});