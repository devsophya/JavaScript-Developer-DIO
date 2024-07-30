
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
 }


const sophya = new Pessoa();
 sophya.nome = 'Sophya Damiazo';
 sophya.idade = 19;


const gustavo = new Pessoa();
 gustavo.nome = 'Gustavo Vieira';
 gustavo.idade = 21;


sophya.descrever();
gustavo.descrever();


