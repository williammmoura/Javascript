function soma(){
    let soma = 0
    for (i in arguments) {/*Propriedade "arguments" -> é um array.*/
        soma += arguments[i] //cada índice do array vira um argumento. 
    }
    return soma
}

//Chamando a função:
console.log(soma())  //Repare, que não foi passado nenhum parâmetro a variável soma.
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3)) //Será feita a soma dos argumentos.
console.log(soma(1.1, 2.2, 'Teste')) //Aqui, haverá a soma dos numeros e a concatenação da string "Teste".
console.log(soma('William', 'Carol', 'Maggie')) //Concatenação das strings. O zero, já estará na variável soma.