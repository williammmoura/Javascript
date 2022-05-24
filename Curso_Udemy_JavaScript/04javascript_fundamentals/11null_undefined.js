let valor; //não inicializada.
console.log(valor);

valor = null; //ausência de valor.
console.log(valor);
//console.log(valor.toString()); //ERRO!

const produto = {};
console.log(produto.preco);/**Não está definido
o preço dentro do produto.*/
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined //EVITAR!!!
console.log(!!produto.preco);
/*delete produto.preco; /**Tirar o atributo de
um objeto*/
console.log(produto);

produto.preco = null // Sem preço.
console.log(!!produto.preco);
console.log(produto);