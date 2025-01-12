const http = require("http");

// vamos a similar que trbajamos un  una BD.
// Aquí requerimos, SOLICITAMOS (req) al modulo cursos.
const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      // Como indicamos return, no es necesario poner breack.
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
      console.log(`El metodo no puede ser manejado por el servidro: ${method}`);
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === "/") {
    res.statusCode = 200; //será 200 por defecto. Tenemos que poner a mano el codigo que queremos. // si NO se indica, no pasa nada
    res.end(`Bienvenidos a mi primer servidor y API con Node.js`);
  } else if (path === "/cursos") {
    res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200; 
    res.end(JSON.stringify(cursos.infoCursos.programacion));
  }

  res.statusCode = 400; // Error si metes otra ruta diferente
  return res.end(`El recurso solicitado no existe...`);
}

// Agregar un nuevo registro a una BD 
function manejarSolicitudPOST(req, res) {

  const path = req.url;

  if (path === "/cursos/programacion") {

    let cuerpo = "";

    req.on("data", contenido =>{
        cuerpo += contenido.toString();
    });

    req.on("end",()=>{
        console.log(cuerpo);
        console.log(typeof cuerpo);
        res.end(`El servidor recibio una solicitud POST`)
    });
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor está escchando en el puerto ${PUERTO}...`);
});
