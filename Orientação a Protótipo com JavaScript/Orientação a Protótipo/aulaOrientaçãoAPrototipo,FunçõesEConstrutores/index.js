/*
const pessoa = {
    genero: 'feminino'
}

const sophya = {
    nome: 'sophya',
    idade: 30, 
    __proto__: pessoa
}

console.log(sophya.genero)
*/

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade 
}
Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

new Pessoa()