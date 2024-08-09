/* Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número ímpar.

Ex: Entrada :
        5
        3
        4
        1
        10
        8

    Saída:
        Maior número par: 10
        Menor número impar: 1
*/

const { gets, print } = require('./mainEx2');

const n = gets();
let maiorNumeroPar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if( numero % 2 === 0){
        if (numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    }
    
}

print(maiorNumeroPar);