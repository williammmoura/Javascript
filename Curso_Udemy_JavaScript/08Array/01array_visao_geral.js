/**O array, em js, é um objeto especial com caracteristicas próprias, mas não existe o array nativo em js (tipo de dado array).*/

//Curiosidade
console.log(typeof Array, typeof new Array)/**function e a após o "new" o resultado será um objeto.*/
console.log(typeof Array, typeof new Array, typeof [])/**Adicionando mais um "typeof" de um Array literal,gerará um novo objeto.*/
//**A boa pratica diz que é melhor trabalhar com dados homogêneos, em um Array.*/

let aprovados = new Array('Bia', 'Carlos', 'Ana')