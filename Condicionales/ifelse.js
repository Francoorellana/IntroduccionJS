var variable = true

/*if(!variable){ //dentro del parentesis se introduce el valor sin ningun operador, se considera true, se niega con !
    console.log("Verdadero")
}else{
    console.log("Falso")
}*/

var edad = 29

if(edad >= 18 && edad <=30){ //se pueden introducir tantos else if como se necesiten
    console.log("Joven Adulto")
}else if(edad < 18) {
    console.log("Niño o adolescente")
}
