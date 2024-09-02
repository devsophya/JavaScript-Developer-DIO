
class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Sophya'), new Pessoa ('Gustavo'), new Pessoa('Angela'), new Pessoa ('Tania')]

const listaEmHtml = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})
/*
const listaNomes = lista.map((element) => element.name)
*/

console.log(listaEmHtml)