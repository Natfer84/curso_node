// la primera linea que se tiene que crear.
// importamos express.
const express = require("express");

// con esto ya tenemos nuestra aplicación de express
const app = express();
// Importamos infoCursos.
const { infoCursos } = require("./cursos.js");

// AQUÍ EMPIEZAN LAS RUTAS

//get---> método
// /----> ruta
app.get("/", (req, res) => {
  res.send(`Mi primer servidor con Express con rutas y metodos.`);
});
// Agregar una nueva ruta
app.get("/cursos", (req, res) => {
  //res.send(infoCursos);
  res.send(JSON.stringify(infoCursos));
});
// Otra ruta
app.get("/cursos/programacion", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});
// Otra ruta
app.get("/cursos/matematicas", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

// PARAMETROS DE RUTA

// Parametro url
// : = parametro url
app.get("/cursos/programacion/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(
    (cursos) => cursos.lenguaje === lenguaje
  );
  res.send(JSON.stringify(resultados));

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
});
// Tienes que meter en buscador el tipo de nivel: basico, intermedio...
app.get("/cursos/matematicas/:nivel", (req, res)=>{
    const nivel = req.params.nivel;
    const resultados = infoCursos.matematicas.filter((curso) => curso.nivel === nivel);
  if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron titulos de ${nivel}`);
      }

    res.send(JSON.stringify(resultados)); 
})





// process.env.PORT, por tenemos otra dirección
const PUERTO = process.env.PORT || 3000;

// La app escucha el puerto (listen)
app.listen(PUERTO, () => {
  console.log(`El servidoresta escuchando en el puerto ${PUERTO}...`);
});
