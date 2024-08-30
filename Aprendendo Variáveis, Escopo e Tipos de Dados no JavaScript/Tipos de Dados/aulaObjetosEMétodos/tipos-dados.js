
const pessoa     = {
    nome: 'Sophya' ,
    idade: 19, 
    falar : function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

pessoa.falar()