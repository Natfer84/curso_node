function saludar(nombre){
    return `hola ${nombre}`;
}

function saludarHolaMundo(){
    return `hola Mundo`;
}


//Aquí exportamos en forma de objeto las dos funciones
module.exports = {
    saludar,
    saludarHolaMundo
}