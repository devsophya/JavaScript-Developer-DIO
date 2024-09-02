
const pessoa = {
    nome: 'Sophya',
    idade: 19
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaaaaaa'])
gritar.call(pessoa, 'Olaaaaaaaa')

