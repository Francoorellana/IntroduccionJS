//Recibe una expresion y de acuerdo a ella, ejecuta una orden

var opcion = 3

/*switch (key) { la estructura recibe el valor de una variable y sus posibles "casos" u "ordenes"
    case value:  
        
        break;

    default:
        break;
}
*/
switch (opcion) {
    case 1:
        console.log("Menu de usuario")
        break;
    case 2:
        console.log("opcion 2")
        break
    default:
        console.log("Sin opcion")
        break;
}