const express = require ("express");
const {matematicas} = require("../datos/cursos.js").infoCursos;

// Routers
//.use() es una función que le dice a express que use ("/cursos/programacion") como ruta
const routerMatematicas = express.Router();



// Otra ruta
routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});

  //************* PARAMETROS DE RUTA **********************************

// Parametro url
// : = parametro url

// Tienes que meter en buscador el tipo de nivel(parametro): basico, intermedio...
routerMatematicas.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = matematicas.filter(
    (curso) => curso.lenguaje === lenguaje
  ); //lenguaje=url

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
    //  ****** PARÁMETRO QUERY ******  

  // query es otro parametro de busqueda que da la orden de que es query luego (ordenar) es el nombre del parametro que tú le vas a dar, ya que QUERY lleva PARÁMETRO=VALOR
  if (req.query.ordenar === "visitas") {
    return res.send(
      //sort = 
      JSON.stringify(resultados.sort((a, b) => a.visitas - b.visitas))
    );
  } else {
    return res.send(JSON.stringify(resultados));
  }
});

//***** CON APP *****/

/*const routerMatematicas = require("./routers/matematicas.js")
app.use("/cursos/matematicas", routerMatematicas); // llamamos a la varieble.

//********************  AQUÍ EMPIEZAN LAS RUTAS  **********************

//get---> método
// /----> ruta
app.get("/", (req, res) => {
  res.send(`Mi primer servidor con Express con rutas y metodos.`);
});
// Agregar una nueva ruta
app.get("/cursos", (req, res) => {
  //res.send(infoCursos);
  res.send(JSON.stringify(infoCursos));
});*/


 module.exports = routerMatematicas;