/**Objetivo é criar mecânismos para que tenha o reuso do código (só há uma classe pai). Diferente de "composição*, onde há multiplos objetos.*/

/**Em JS a herança é baseada em protótipos.
 * Ex:Quando é definido uma variável dentro de uma função (variável "x") e fora da função temos uma variável chamada "x". Quando tentar acessar a variável "x", dentro da função, será atribuído o valor mais próximo ao acesso de "x". Ou seja, irá acessar a variável (x)que está dentro da função.
 * Caso não exista "x" dentro da função, o acesso irá ser feito no escopo mais abrangente fora da função.
 * Está é a ideia de protótipo.
*/

//Objeto1
const ferrari={
    modelo: 'F40',
    velMax: 324
}

//Objeto2
const volvo={
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)/**Atributo __proto__ -> A partir disso consigo acessar quem é o protótipo desse objeto (objeto pai).*/
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)

/**Um objeto, em JS, ele tem uma referencia para o seu protótipo e essa é a forma de como JS define herança. */