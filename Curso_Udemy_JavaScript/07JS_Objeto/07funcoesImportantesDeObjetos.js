const pessoa = {
    nome:'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor] /**Destructuring */) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2022'//Funciona como se fosse um freez.
})/**Aqui posso definir algumas características de uma propriedade.
Ex: A propriedade pode, ou não, ser alterada;
A propriedade ficará, ou não, visível quando fazer "Object.keys.*/

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)//Pode passar varios objetos.

Object.freeze(obj)
obj.c = 1234
console.log(obj)    