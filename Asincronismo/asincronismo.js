//Suceso que no ocurre al mismo tiempo o en un simultaneidad con otro, se ejecutan primero funciones
//y luego. 
//Event loop: Bucle que gestiona la ejecucion en la app.
//Cola de tareas: Peticiones HTTP, eventos de tiempo, DOM, peticiones API

console.log(1)
setTimeout( () => console.log("Hola Mundo"),0)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)


for (let index = 0; index < 999; index++) {
    console.log("Fin del bucle");
}

//ejecuta primero todo el console.log y el bucle y luego el evento de tiempo.