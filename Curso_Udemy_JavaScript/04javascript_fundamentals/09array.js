const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);/*Não está presente no
array.*/
valores[4] = 10;
console.log(valores[4]);
console.log(valores.length);

/**Função "push".
 * Para adicionar novos elementos no array.
 */

/*JS, por ser uma linguagem fracamente tipada ele aceita colocar, dentro de um array, um "objeto", "um boolean"... NÃO É UMA BOA PRÁTICA!*/
valores.push({id: 3}, false, null, "teste");/**
Array é heterogêneo, ou seja, aceita multiplos
valores.*/
/*"{id: 3}" é uma objeto.*/
console.log(valores);

/**Função "pop".
 * Retornará o último valor do array, que no
 * caso será "teste". 
 */
console.log(valores.pop());

/**Para deletar o valor do Array.*/
delete valores[0];
console.log(valores);

console.log(typeof valores);