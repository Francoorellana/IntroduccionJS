// Number.isInteger Informa si la variable numerica es entera o no
// Number.parseInt Devuelve el entero de un numero con decimales
// Number.to fixed acorta los decimales

var numero = 50.1234

var res = Number.isInteger(numero)
console.log(res)

var res1 = Number.parseInt(numero)
console.log(res1)

var res3 = Number.parseFloat(numero).toFixed(1)
console.log(res3)

