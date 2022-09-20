const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'; 
/*
(?)operador ternário. 
Ele é composto por três partes:
1º - Uma expressão (retorna true ou false);
2º - Depois colocar "?";
3º - Colocar o argumento verdade (true) : argumento falso (false).
*/
console.log(resultado(7.1));
console.log(resultado(6.9));