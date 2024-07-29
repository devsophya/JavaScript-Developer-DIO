/* Exemplos de Funções*/

function sayMyname(name1, name2){
    console.log( 'Your name is ' + name1 + " " + name2);
}
 
sayMyname("Sophya", "Gustavo");
 

/* quadrado de um valor */
function quadrado(valor){
    return valor * valor;
 }

console.log(quadrado(10) + quadrado(10));


    /* incrementando juros */

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;

}

console.log(incrementarJuros (100, 10));
console.log(incrementarJuros (100, 15));
console.log(incrementarJuros (100, 20));




