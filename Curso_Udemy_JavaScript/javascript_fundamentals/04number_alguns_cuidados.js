console.log(7 / 0.000000000001);
console.log(7 / 0);

console.log("10" / 2);/*Converte automaticamente
o valor "string" para numérico e mostrará o 
valor da divisão (5)*/

console.log("show" * 2);/*O JS não saberá inter-
pretar o valor "show" e retornará um NaN (Not a 
Namber).*/

console.log(0.1 + 0.7);/*Gera uma pequena falta
de precisão.*/

//console.log(10.toString());  //Erro!

console.log((10.345).toFixed(2));