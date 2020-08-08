const input = require("readline-sync")

console.log('== Olá somos o club das manas! ==')
const idade = input.question('qual sua idade?  ')

if (idade >= 18 && idade < 21) {
  console.log('pode entrar, mas não pode consumir bebidas alcolicas')
} else if (idade >= 21) {
  console.log('pode entrar e consumir bebidas alcolicas')
} else {
  console.log('entrada permitida apenas para maiores de idade.')
}
