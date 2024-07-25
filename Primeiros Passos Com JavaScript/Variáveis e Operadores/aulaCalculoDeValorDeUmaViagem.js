/* Desafio 

Faça um programa para calcular o valor de uma viagem 

Você terá 3 variaveis, sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustivel do carro por KM;
3- Distância em KM da viagem.
 
*/

const precoCombustivel = 5.79;
const kmPorLitros = 10; 
const distanciaEmKm = 100;

const litroConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litroConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));


