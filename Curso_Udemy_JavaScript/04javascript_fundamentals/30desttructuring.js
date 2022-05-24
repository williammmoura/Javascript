function rand([min=0, max=1000]) {
    if(min>max) [min, max] = [max, min]; /**Condicional com operadores do "destruction":
    O que é mín passa ser máx. */
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50,40]));
console.log(rand([992]));
console.log(rand([,10]));//Passando apenas o valor máximo. O mínimo será considerado zero.
console.log(rand([]))//Array vazio irá passar os valores (min e max) padrão.
//console.log(rand()) -> erro!