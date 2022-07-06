/**Object.preventExtensions -> previne que o objeto seja extendido, ou seja, não será possível aumentar o número de atributos em um objeto.*/

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha' /**Tentativa de alteração no nome (atributo) que já existe(permitido, não está em freeze).
Não será permitido adicionar novas "chaves" e valores no objeto;*/
produto.descricao = 'Borracha escolar'
delete produto.tag //Exclusão do atributo "tag".
console.log(produto)

/**Object.seal -> Não é permitido adicionar novos atributos, excluir atributos do objeto, mas é possível modificar os valores dos atributos do objeto.*/
const pessoa = {nome:'Caroline', idade: 30}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //Não foi possível
delete pessoa.nome //Não foi possível
pessoa.idade = 29 //Foi alterado
console.log(pessoa)

//Objeto.freeze = seledo + valores constantes. 
