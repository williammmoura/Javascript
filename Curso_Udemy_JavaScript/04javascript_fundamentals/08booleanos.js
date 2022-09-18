let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

/**
 * Tranformando um valor numérico em um valor 
 *verdade ou falso.
*/
isAtivo = 1;
console.log(!!isAtivo); /*Aqui é coloca o sim-
bolo "!", que signifiva negação. */
/**
 * Explicação:
 * Usando duas vezes o simbolo de negação(!),
 *teremos como resultado verdadeiro(true).
 *"isAtivo", que recebe 1, tem como valor ini-
 *cial como verdadeiro(true). Usando uma vez a
 *negação(!) temos que o valor passa a ser
 *falso, mas com mais uma negação(!) o valor da-
 *do a 'isAtivo" passa a ser verdadeiro (true)
 *novamente.
 */

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);//Array.
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...")
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar (ou)...");
console.log(!!("" || null || 0 || " "));
console.log(("" || null || 0 || "epa!" || 123));

let nome = "";
console.log(nome || "Desconhecido"); /**Com
o primeiro nome dando falso, ou seja, nada
foi atribuído a variável "nome, então foi
mostrado "Desconhecido".
Se tivéssemos colocado, no lugar de vazio,
William, então seria mostrado William.*/