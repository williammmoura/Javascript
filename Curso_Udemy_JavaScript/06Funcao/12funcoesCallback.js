const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem Callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7)/**teste "if"*/{
        notasBaixas1.push(notas[i]) //".push" adiciona elementos no array.
    }
}

console.log(notasBaixas1)

//Com CAllback
notasBaixas2 = notas.filter(function(nota){//Função callback
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)