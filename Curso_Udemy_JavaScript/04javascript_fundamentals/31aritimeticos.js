const[a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, -divisao, modulo);
/*"-divisao" -> temos um operador unário, ou sejá, irá converter o resultado da divisão 
em um número negativo.*/