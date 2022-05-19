// Trocar os valores das variáveis.
let a = 7;
let b = 94;

// Depois da troca... a = 94 e b = 7.

/* 
    Variável com valor temporário.
    Explicação:
*/ 
let temp = a; // "temp" passa a valer 7.
a = b; //"a" passa a valer 94.
b = temp; // "b" passa valer "temp", que é 7.

console.log(a);
console.log(b);