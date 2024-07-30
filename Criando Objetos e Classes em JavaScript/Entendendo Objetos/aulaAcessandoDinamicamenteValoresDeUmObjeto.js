
const pessoa = {
    nome: 'Sophya Damiazo',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


pessoa['nome'] = 'teste';
pessoa.nome = 'teste';
