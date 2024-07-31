/* exercício 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um método que dado a quantidade de quilomentros e preço do combustivel nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

constructor (marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
}

calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
}
  

}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70 , 5));

const palio = new Carro ('Fiat' , 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso (70 , 5));

