/*
function Pessoa(nome, idade) {
    this.nome = nome 
    this.idade = idade 
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é : ${this.nome}`)
}

const sophya = {
    genero: 'feminino'
}

Pessoa.call(sophya ,'nome', 19)

console.log(sophya)

*/

String.prototype.toPLang = function() {
    return `P ${this}`
}

console.log('teste'.toPLang())
