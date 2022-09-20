let num1 = 1
let num2 = 2

num1++;//Forma pós-fixada.
console.log(num1);
--num1; //prioridade maior (ordem de precedência).
console.log(num1);

console.log(++num1 === num2--); //Difícil leitura do código.
console.log(num1 === num2); //Código mais fácil de ser lido.