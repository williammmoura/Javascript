/**Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

//function nomeDaFunction(parâmetros)
function triangulo(x, y, z){
    //Condional "if".
    if(x == y & x == z & y == z){
        return 'Este triângulo é EQUILÁTERO.'
    } 
    else if( (z == y & x != z) || (x == y & y != z) || (x == z & y != z) ){
        return 'Este triângulo é ISÓSCELES. '
    } 
    else {
        return'Este triângulo é ESCALENO.'
    }
}

//Resposta do condicional "if".
console.log(triangulo(5, 5, 5))
console.log(triangulo(2, 5, 5))
console.log(triangulo(5, 2, 5))
console.log(triangulo(5, 5, 2))
console.log(triangulo(6, 4, 8))