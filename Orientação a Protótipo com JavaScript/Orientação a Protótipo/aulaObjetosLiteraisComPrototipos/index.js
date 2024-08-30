
const pessoa = {
    genero: 'feminino'
}

const sophya = Object.create(pessoa)

sophya.nome = 'Sophya'

console.log(sophya.genero)