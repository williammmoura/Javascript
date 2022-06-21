/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalIni, txJuros, tempoAplica){
    return capitalIni + (capitalIni * txJuros * tempoAplica)
}

function JurosComposto(capitalIni, txJuros, tempoAplica){
    return capitalIni * (1 + txJuros) ** tempoAplica
}

console.log(jurosSimples(100, 50/100, 1))
console.log(JurosComposto(100, 50/100, 1))