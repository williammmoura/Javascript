/*Map: permite percorrer um vetor e obter um novo
 array cujos itens são o resultado de uma função
 de callback que recebe como parâmetro cada item
 original. Por exemplo, podemos partir de um
 array de valores numéricos e obter um novo
 contendo o quadrado de cada item original. 
*/

const nums = [1, 2, 3, 4, 5];//array

//Map seria um "for" com propósito.
let resultado = nums.map(function(e){//mapeamento (map) do array "nums".
    return e * 2; //multiplica o elemento "e" da função por 2.
})

console.log(resultado)//Output -> [2, 4, 6, 8, 10].
console.log(nums)/*O array original nã0 será modificado. Output -> [1, 2, 3, 4, 5]*/

const soma10 = e => e + 10; //A arrow tem o "return" implícito.
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);//Resultado aparece em uma "string" pois está em uma template string.