var miArray = ["Hola",2020,"Adios"]

var persona1 = {
    nombre : "Pedro",
    edad : 12
}
var persona2 = {
    nombre : "Quique",
    edad : 23
}
var persona3 = {
    nombre : "Alan",
    edad : 54
}

var personas = [persona1,persona2,persona3]

/*for (let index = 0; index < miArray.length; index++) {
    const element = miArray[index];
    console.log(element)
} imprime todos los elementos del array 

for (let index = 0; index < personas.length; index++) {
    const element = personas[index].edad; se imprime el elemento dentro array
    console.log(element)
} 

for (let index = 0; index < personas.length; index++) {
    if(personas[index].edad >= 50){
        break
    }
    const element = personas[index].nombre; 
    console.log(element)
} */

personas.forEach(element => console.log(element.edad)) //se utiliza para los arrays, ejecuta una funcion por cada elemento del array

// TODO while y dowhile








