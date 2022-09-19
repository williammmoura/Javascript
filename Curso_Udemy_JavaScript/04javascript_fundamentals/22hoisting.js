//Curiosidade.
/**Hoisting (içamento) */
console.log("a =", a); //Gera um "undefined".
var a = 2;
console.log("a =", a);

/*ERRO!
console.log("b =", b);
let b = 2; **Não ocorre o "içamento" com o let.**
console.log("b =", b);
*/