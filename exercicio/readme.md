# Exercício da Semana

## Instruções

### Fluxo subindo repositório local
Crie um novo repositório no seu github com o nome calculando-media.
Crie uma pasta no seu computador(com o mesmo nome) e siga
o passo a passo que o github mostra:

* `echo "# Meu Exercício" >> README.md`
* `git init`
* `git add README.md`
* `git commit -m "first commit"`
* `git remote add origin url-do-seu-repositorio`
* `git push -u origin master`


### Fluxo com git clone

* no github criar um novo repositório (pode inicializar com readme ou não)
* no botao verde `code` vamos copiar o link do respositório
* no terminal(git bash) na pasta DESKTOP damos o comando: ```git clone url-que-foi-copiada```
* ```cd nome-da-pasta-do-projeto```


### depois de criar repositório...
Dentro da pasta desse projeto...
crie uma branch com o seu nome `git checkout -b nome-da-branch`

Antes de começar vamos baixar o readline-sync e criar o package.json

```npm init -y``` para inicializar o package.json

```npm install readline-sync``` para baixar o readline-sync

Crie um arquivo `calculadora-de-media.js`
Dentro dele, crie um programinha que vai receber 6 notas,
calcular a média e dizer
se a aluna foi aprovada, reprovada ou ficou em recuperação.


regras:
* para ser __aprovada__ a média tem que ser maior ou igual 7
* para ser __reprovada__ a média tem que ser menor que 5
* para ir para __recuperação__ a média tem que ser maior ou igual a 5 e menor que 7

Para pegar inputs no terminal precisamos usar o
'readline-sync'

no topo do arquivo do seu código:
````
const input = require("readline-sync");
````

- finalizado o trabalho suba o código:

```
  - git add
  - git commit -m "o que eu fiz"
  - git push origin nome-da-sua-branch
```

- Abra a pull request e coloque o link  no google classroom
