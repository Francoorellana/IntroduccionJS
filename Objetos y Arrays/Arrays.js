//son listas que contienen parametros, objetos, funciones o arreglos
var permitido = "Usuario permitido"
var miFuncion = acceso => acceso

var miArray = [miFuncion(permitido),"Franco",2000] //los parametros se separan por coma, el primer valor es 0
//console.log(miArray[0]) 

var persona = {
    nombre : "Jose",
    miAutomovil : [
        pintura = {
            marca : "Marca",
            precio : 2000,
            color : "rojo"
        },
        vendedor = {
            nombre : "pepe",
            edad : 45,
            ayudante : {
                name : "Julio"
            }
        }

    ]
}

var otroArray = [miFuncion(permitido),"Franco",2000,true,["Hola Mundo","UnArray",300],persona]
console.log(otroArray[4][0]) //para imprimir un parametro dentro de un array
console.log(otroArray[5].miAutomovil[0].marca)//para imprimir hijos se debe ir de mayor a menor usando corchetes para ubicar arrays y . para objetos



