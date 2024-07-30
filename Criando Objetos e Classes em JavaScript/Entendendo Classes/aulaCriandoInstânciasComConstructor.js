
class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }


    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
 }


const sophya = new Pessoa('Sophya', 19);

const gustavo = new Pessoa('Gustavo', 21);

console.log(sophya);
console.log(gustavo);