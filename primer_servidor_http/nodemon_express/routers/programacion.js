const express = require ("express");
const {programacion} = require("../datos/cursos.js").infoCursos;

// Routers
//.use() es una función que le dice a express que use ("/cursos/programacion") como ruta

const routerProgramacion = express.Router();

// ***************** MIDDLEWARE *****************
routerProgramacion.use(express.json());
/* Las funciones middleware se ejecutan: 
  - Despues de recibir una solicitud.
  - Antes de enviar una respuesta.
  Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una función que se llama para ejecutar el proxímo middleware.
*/


// Otra ruta
routerProgramacion.get("/", (req, res) => {
    res.send(programacion);
  });
// FORMA APP
/*app.get("/cursos/programacion", (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
  });*/

//*********************** PARAMETROS DE RUTA **********************************
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
      // return res.status(404).end(); OTRA OPCIÓN ENVIAR RESPUESTA VACÍA
    }
  });
  // *************** CÓDIGOS DE ESTADOS DE RESPUESTA HTTP *************************

  // POST
  // Incluir un curso nuevo
  routerProgramacion.post("/", (req, res) => {
    let cursoNuevo = req.body; // Extraemos del cuerpo (curso)
    programacion.push(cursoNuevo); // Agregamos curso
    res.send(JSON.stringify(programacion)); // Enviamos programación al cliente
  })

  // PUT
  // Actualizar una entidad. Hay que enviar la entidad completa no puedes enviar solo propiedades.
  routerProgramacion.put("/:id", (req, res) =>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0){
      programacion[indice] = cursoActualizado;
    }
    res.send(programacion);
  });

// PATCH
// Podemos pasar solo clave/valor para actualizar. "colocar un parche"
routerProgramacion.patch("/:id", (req, res)=>{
  const infoActualizada = req.body;
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);
  if( indice >= 0 ){
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada);// Assingn. Modifica solo algunas propiedades del objeto. Compara las dos constantes y cambia solo lo modificado.
  }
  res.send(JSON.stringify(programacion));
})

// DELETE
routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);
  if ( indice >= 0){
    programacion.splice(indice, 1);
  }
  res.send(JSON.stringify(programacion)); // send, ya convierte json.
})


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
  