const http = require("http");
//definir esta constante para almacenar el servidor y definir el metodo.

//a la constante servidor le decimos que se cree un servidor (con función flecha) http con req=solicitud y res=respuesta.
//el HTTP.createServer, es la variable de de arriba que con tiene requier.
//aquí se crea un servidor.
const servidor = http.createServer((req, res) =>{
    //end, es una función que envía al cliente.
    res.end("hola mundo");
});

// tambien se puede hacer una constante con el puerto.
const puerto = 3000;

//aquí decimos que se escuche el servidor en un puerto. O ponemos la const puerto= o lo indicamos 3000
servidor.listen(3000,()=>{
    console.log('el srvidor se está escuchando en el purto ${puerto} ...');
})

//node app.js----> ejecuta el servidor en la terminal
//en la web y pones localhoste:3000-----> carga lo del servidor.
//con localhost:3000 hacemos una solicitud al servidor y lo que vemos en el navegador es la respusta del servidor.
// req---->solicitud.
// res---->respuesta.