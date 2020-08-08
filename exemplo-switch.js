const input = require("readline-sync");


const produto = input.question('qual produto deseja?')

switch (produto) {
  case 'laranja':
    console.log('laranja custa 30 centavos')
    break;
  case 'manga':
  case 'mamao':
    console.log('manga e mamão custam 2.79 reais.')
    break;
  case 'limao':
    console.log('limao é 1 real')
    break;
  default:
    console.log('desculpe, nao temos o produto desejado')
}
