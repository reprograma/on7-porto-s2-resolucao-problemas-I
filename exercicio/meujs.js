const input = require('readline-sync')

const input1 = input.question('valor um')
const input2 = input.question('valor dois')


const total = parseFloat(input1) + parseFloat(input2)

console.log(total.toFixed(2))
