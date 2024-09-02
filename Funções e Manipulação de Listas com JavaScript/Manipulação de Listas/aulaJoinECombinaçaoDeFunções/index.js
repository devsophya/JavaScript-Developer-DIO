
const lista = [{nome:'Sophya'}, {nome:'Gustavo'}, {nome:'Angela'}, {nome:'Tania'}]

const elementosEmHtml =lista
    .filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)




