const input = require("readline-sync");


console.log(' == bem-vinda ao cardapio online do mercadinho organico == ')
const produto = input.question('De qual produto deseja saber o preço? ')

switch (produto) {
  case 'laranja':
    console.log('laranja custa 30 centavos')
    break;
  case 'manga':
    console.log('manga é 3 reais.')
    break;
  case 'mamao':
    console.log('manga e mamão custam 2.79 reais.')
    break;
  case 'limao':
    console.log('limao é 1 real')
    break;
  default:
    console.log('desculpe, nao temos o produto desejado')
}
