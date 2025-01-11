const http = require("http");
//los console.log se mostrarán por la terminal del servidor
//req es un objeto. 
const servidor = http.createServer((req, res) => {
  console.log("---->res (respuesta)");
  console.log(res.statusCode) // la respuesta es 200. Todo ha ido bien

  //podemos cambiar el código del estado
  res.statusCode = 404;
  console.log(res.statusCode); // la respuesta es 404. No ha ido bien

  // con setHeader modificas la cabecera.
  res.setHeader(`content-type`, `application/json`);
  console.log(res.getHeaders());
 
  //  res---> se muestra por el puerto. Por el navegador. Es la respuesta del servidor
  res.end("hola Mundo");
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`el servidor está en el puerto ${puerto}...`);
});


//si te vas a inspeccionar en el ordenador y a Network ves los statusCode.