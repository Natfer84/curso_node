//crear una URL
// Obtener distintas partes de la URL
const miURL = new URL(`https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1`);
console.log(miURL.hostname); // Te muestra---->  www.ejemplo.org
console.log(miURL.pathname); // Accede a los PATH (CAMINOS)---> /cursos/programacion
console.log(miURL.searchParams); // Te da la respuesta de un query en json en la terminal---> {¨ordenar"(clave) => ¨vistas"(valor), nivel=> "1"}
console.log(miURL.searchParams.get("ordenar")); // Te muestra en consola---> vistas que es el valor de ordenar, del parametro pasado.