//Pessoa -> 123 (enderço de memória) -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...} 
//pessoa = { nome: 'Ana'} //Gera um problema

Object.freeze(pessoa) //"Congelando" o objeto pessoa (não consigo mais mexer no objeto)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)