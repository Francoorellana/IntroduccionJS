//Sentencias que realizan una tarea

function saludo(){
    console.log("Hola a todos")
} //se definen con la palabra "function", entre llaves se coloca lo que se va a ejecutar

var miSuma = function (a,b,c){ //puede ser una variable y pueden contener parametros entre ()
    return a + b + c //"return" para devolver resultado (similar a console.log)
}
saludo() //para imprimir en consola
console.log(miSuma(4,5,11))

console.log(miSuma(2,2,2))
var a1 = 4
var b1 = 6
var c1 = 10
console.log(miSuma(a1,b1,c1))

