var acceso = false

/*var acceso = function(a){
    return a
}


var accesoU = a => a //devuelve un valor, el simbolo => devuelve un valor
var accesoU = () => false //no pasamos parametros a nuestra funcion y retornamos un valor 
var accesoU = (a,n) => console.log(`Usuario ${n} Acceso ${a}`) //pasamos mas de un parametro, hay que usar parentesis
accesoU(acceso,"Franco") 
*/


var accesoU = (a,nombre)  => {
    console.log(`Usuario ${nombre} en ejecucion`)
    return a
} //cuando se ejecuta mas de una "tarea" hay que usar llaves

accesoU(acceso,"franco") == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")

