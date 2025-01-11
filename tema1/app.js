
//si solo necesitas utilizar una función del modulo saludo.js se puede hacer destructuring
const { saludar, saludarHolaMundo } = require("./saludo.js"); 

//aquí importamos el modulo saludo.js con función require(),
//const saludo = require("./saludo.js"); 

//console.log(saludo);

console.log(saludar("natalia"));

console.log(saludarHolaMundo());