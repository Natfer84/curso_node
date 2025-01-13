// la primera linea que se tiene que crear.
// importamos express.
const express = require("express");
// con esto ya tenemos nuestra aplicación de express
const app = express();
// Importamos infoCursos.
const { infoCursos } = require("./datos/cursos.js");

// Routers


const routerMatematicas = require("./routers/matematicas.js")//app.use("/cursos/programacion", routerProgramacion);
app.use("/cursos/matematicas", routerMatematicas); // llamamos a la varieble.//.use() es una función que le dice a express que use ("/cursos/programacion") como ruta


const routerProgramacion = require("./routers/programacion.js")
app.use("/cursos/programacion", routerProgramacion); // llamamos a la varieble.

//********************  AQUÍ EMPIEZAN LAS RUTAS  **********************

//get---> método
// /----> ruta
app.get("/", (req, res) => {
  res.send(`Mi primer servidor con Express con rutas y metodos.`);
});
app.get("/cursos", (req, res) => {  // Agregar una nueva ruta
  res.send(JSON.stringify(infoCursos));  //res.send(); realice una respuesta en formato json de nfoCursos
});




// process.env.PORT, por tenemos otra dirección
const PUERTO = process.env.PORT || 3000;

// La app escucha el puerto (listen)
app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
