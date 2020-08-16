const input = require('readline-sync')

const input1 = input.question('valor um')
const input2 = input.question('valor dois')


const total = parseFloat(input1) + parseFloat(input2)

console.log(total.toFixed(2))


// pegar os inputs
// somar os inputs
// dividir a soma pela quantidade de inputs

// media

// se a media é maior que 7 -> aprovada
// se a media é menor que 5 -> reprovada
// se a media é maior ou igual a 5 e menor que 7 -> recuperacao
