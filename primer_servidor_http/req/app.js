const http = require("http");
//los console.log se mostrarán por la terminal del servidor
//req es un objeto. Es la SOLICITUD
const servidor = http.createServer((req, res) => {
  console.log("---->req (solicitud)");
  //  req.url---> nos permite mediante la barra / hacer una dirección en el navegador.Son los endpoint
  console.log(req.url);
  // req.method---> nos permite saber el verbo GET,POST,PUT,DELETE
  console.log(req.method);
  //  req.headers---> ver la cabecera de la solicitud
  console.log(req.headers);

  //  res---> se muestra por el puerto. Por el navegador. Es la respuesta del servidor
  res.end("hola Mundo");
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`el servidor está en el puerto ${puerto}...`);
});
