/* DESAFIO 

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio de commbustível do carro por KM;
5- Distância em KM da viagem; 

Imprima o valor que será gasto para realizar esta viagem

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litroConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litroConsumidos * precoEtanol;
        console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litroConsumidos * precoGasolina;
        console.log(valorGasto.toFixed(2));

}


