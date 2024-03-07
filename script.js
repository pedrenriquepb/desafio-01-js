/* 
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/

alert ('Olá! Vamos fazer operações matemáticas!')

Numberone = prompt('Para começar, insira o primeiro Número')
Numbertwo = prompt('Agora insira o segundo número')

sum = Number(Numberone) + Number(Numbertwo)
sub = Number(Numberone) - Number(Numbertwo)
div = Number(Numberone) / Number(Numbertwo)
mult = Number(Numberone) * Number(Numbertwo)
rest = Number(Numberone) % Number(Numbertwo)
ParOuImpar = sum % 2


alert ('A soma dos números é ' + sum)
alert ('A substração dos números é ' + sub)
alert ('A multiplicação dos números é ' + mult)
alert ('A divisão dos números é ' + div)
alert ('O resto da divisão dos números é ' + sum)

if (ParOuImpar == 0) {
  alert ('A soma dos números é par')
} else {
  alert ('A soma dos números é Ímpar')
}

if (Numberone === Numbertwo) {
  alert ('Os dois números são iguais!')
} else {
  alert ('Os dois números são diferentes!')
}
