
/*  Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números para os alunos e mostre o maior 
número sorteado.

Dados de entrada:
5
50
10
98
23

Saída :
98

*/

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas [i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};






