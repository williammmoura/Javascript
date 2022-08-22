/**JavaScript forEach é um tipo de estrutura de repetição, só que ele é disponível para a manipulação dos elementos de um array.
Trata-se de um recurso muito útil para ser utilizado sempre que queremos que uma determinada função seja aplicada em todos os elementos de um array, pois elimina a necessidade de escrevermos muitas linhas de códigos.
A tradução em português de forEach é para cada.
É importante dizer que o método forEach() é indicado para quando todos os elementos de um array precisam passar pela ação definida na função callback.

Fonte:https://blog.betrybe.com/javascript/javascript-foreach/
*/

//Ex.1:
const aprovados = ['Silvana', 'Carol', 'William', 'Andressa', 'Victória']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)//Template string.
})
//Ex.2:
aprovados.forEach((indice,nome) => console.log(indice,nome))

//Ex.3:
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)