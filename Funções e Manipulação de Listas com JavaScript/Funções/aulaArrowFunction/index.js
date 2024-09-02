

function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const sophya = {
    nome: 'Sophya',
    funcao1,
    funcao2
}

sophya.funcao1()
sophya.funcao2()