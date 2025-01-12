const express = require ("express");
const {programacion} = require("../datos/cursos.js").infoCursos;

// Routers
//.use() es una función que le dice a express que use ("/cursos/programacion") como ruta

const routerProgramacion = express.Router();


// Otra ruta
routerProgramacion.get("/", (req, res) => {
    res.send(JSON.stringify(programacion));
  });
// FORMA APP
/*app.get("/cursos/programacion", (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
  });*/

  //************* PARAMETROS DE RUTA **********************************
 // ******* ROUTER *******
// Sustituimos app por router.
  routerProgramacion.get("/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(
      (cursos) => cursos.lenguaje === lenguaje
    );
    res.send(JSON.stringify(resultados));
  
    if (resultados.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
  });

// Parametro url
// : = parametro url
/*app.get("/cursos/programacion/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(
      (cursos) => cursos.lenguaje === lenguaje
    );
    res.send(JSON.stringify(resultados));
  
    if (resultados.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
  });*/


 module.exports = routerProgramacion;
  