/**Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function saqueDinheiro(saqueValor){
    //Contador das cédulas.
    let cont200 = 0 
    let cont100 = 0
    let cont50 = 0
    let cont20 = 0
    let cont10 = 0
    let cont5 = 0
    let cont2 = 0
    let valorNota = calcValorNota(saqueValor)
    while(saqueValor >= valorNota){
        switch(valorNota){
            case 200:
                saqueValor -= 200
                cont200++
                break //Necessário para mudar a "case"!
            case 100:
                saqueValor -= 100
                cont100++
                break
            case 50:
                saqueValor -= 50
                cont50++
                break
            case 20:
                saqueValor -= 20
                cont20++
                break
            case 10:
                saqueValor -= 10
                cont10++
                break
            case 5:
                saqueValor -= 5
                cont5++
                break
            case 2:
                saqueValor -= 2
                cont2++
                break
        }

        valorNota = calcValorNota(saqueValor)
    }
    return resultado(cont200, cont100, cont50, cont20, cont10, cont5, cont2)
}

function calcValorNota(saqueValor){
    if(saqueValor >= 200){
        return 200
    }else if(saqueValor >= 100){
        return 100
    }else if(saqueValor >= 50){
        return 50
    }else if(saqueValor >= 20){
        return 20
    }else if(saqueValor >= 10){
        return 10
    }else if(saqueValor >= 5){
        return 5
    }else if(saqueValor >= 2){
        return 2
    }
}

function resultado(cont200, cont100, cont50, cont20, cont10, cont5, cont2){
    let resultado = ''
    
    if(cont200 > 0){
        resultado += `${cont200} nota(s) de R$200,00. `
    }
    if(cont100 > 0){
        resultado += `${cont100} nota(s) de R$100,00. `
    }
    if(cont50 > 0){
        resultado += `${cont50} nota(s) de R$50,00. `
    }
    if(cont20 > 0){
        resultado += `${cont20} nota(s) de R$20,00. `
    }
    if(cont10 > 0){
        resultado += `${cont10} nota(s) de R$10,00. `
    }
    if(cont5 > 0){
        resultado += `${cont5} nota(s) de R$5,00. `
    }
    if(cont2 > 0){
        resultado += `${cont2} nota(s) de R$2,00. `
    }

    return resultado
}

console.log(saqueDinheiro(338))