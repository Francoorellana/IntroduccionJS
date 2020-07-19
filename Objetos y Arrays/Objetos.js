var user = "Franco"

var persona = { //se declaran con un = y una {}, dentro llevan "claves" que son parametros con valores que se deben definir
    nombre : "Alejo", //pueden ser strings, nombres, fechas,boolean,funciones, objetos
    sexo : "Masculino"
}

var miObjeto = {
    nombre : "Franco",
    edad : 2020,
    importante : true,
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : persona,
    fecha : new Date()
}

var {nombre} = miObjeto  //desestructuracion de un objeto

var otraFuncion = ({texto},{otroObjeto}) => {
    console.log(otroObjeto.sexo)
    console.log(texto)
}

otraFuncion(miObjeto,miObjeto)

