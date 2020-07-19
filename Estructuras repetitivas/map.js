
auto1 = {color: "rojo", estado: "viejo", cilindros: 2};
auto2 = {color: "azul", estado: "obsoleto", cilindros: 3};
auto3 = {color: "blanco", estado: "usado", cilindros: 4};
auto4 = {color: "negro", estado: "nuevo", cilindros: 5};

autos = [auto1,auto2,auto3,auto4]


/*let sumarCilindros = ({ cilindros }) => cilindros >= 3 ? cilindros += 1 : cilindros += 0

let cilindrado = autos.map(sumarCilindros) //recorre el array al igual que foreach
console.log(cilindrado)

reduce: funcion que reduce todos los elementos a un valor, requiere dos parametros, unifica todos
los valores*/


/*
let reducirCilindros = (acum, { cilindros }) => acum + cilindros //funcion reductora

let totalCilindros = autos.reduce(reducirCilindros,0) //lleva la funcion reductora y un acumulador
console.log(totalCilindros)
*/

let nuevoObjeto = ({cilindros}) => {
    cilindros >= 3 ? cilindros += 1 : cilindros += 0
    let objeto = {} //objeto vacio
    objeto["cilindros"] = cilindros
    return objeto
}
let miNuevoCilindro = autos.map(nuevoObjeto) //crea un nuevo objeto con los valores de cilindros modificados
console.log(miNuevoCilindro) 






