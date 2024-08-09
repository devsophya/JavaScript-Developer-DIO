/* Faça um programa que calcule e imprima o salário a ser transferido
para um funcionário.
Para realizar o cálculo receba o valor bruto do salário e o adicional dos beneficios.
O salário a ser transferido é calculado da seguinte maneira:

valor bruto do salário - percentual de imposo mediante a faixa salarial + adição 
dos benefícios.

Para calcular o percentual de imposto segue as aliquotas:

De R$ 0.00 a 1100.00 = 5.00%
De 1100.01 a 2500.00 = 10.00%
Maior que R$ 2500.00 = 15.00%

Ex: Entrada: 
        2000
        250

    Saída:
        2050.00
*/

const { gets, print } = require('./mainDesafio3');

const salarioBruto = gets();
const beneficios = gets();

function calcularPorcentagem(valor ,percentual){
  return valor * (percentual/100);
}

print(calcularPorcentagem(salarioBruto, 10));