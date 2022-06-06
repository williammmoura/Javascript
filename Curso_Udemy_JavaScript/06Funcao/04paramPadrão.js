//Estratégia 01 para gerar valor padrão:
function soma1(a, b, c){
    a = a || 1 //"a" recebe "a" ou 1.
    b = b || 1
    c = c || 1
    return a + b + c  
}

console.log(soma1(), soma1(3)) //Resultado esperado é 5.
console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) //"(0, 0, 0)" será considerado falso, então mostrará o valor padrão (3).

//Estratégia 02, 03 e 04 para gerar valor padrão.
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //Mais segura!
    return a + b + c 
}

console.log(soma2())
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrão do es2015. (MAIS ADEQUADA)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c 
}

console.log(soma3())
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))