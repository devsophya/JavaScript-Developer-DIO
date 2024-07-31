/* exercicio 2

Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC= peso / (latura * altura));
Instancie uma pessoa Gustavo que tenha 70kg de peso e 1,75 e peça ao Gustavo para dizer o valor 
do seu IMC;

*/

class Pessoa{
    nome;
    peso;
    altura;

   constructor (nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
   }
    
calcularImc(){
   return this.peso /(this.altura * this.altura);
    }

}

const gustavo = new Pessoa('Gustavo' , 70, 1.75);
console.log(gustavo.calcularImc());

const sophya = new Pessoa('Sophya' , 60, 1.74);
console.log(sophya.calcularImc());