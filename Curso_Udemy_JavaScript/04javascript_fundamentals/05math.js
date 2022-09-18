//Objeto Math
/*Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.*/
const raio = 5.6;
const area = Math.PI * Math.pow(raio,2);/*Math.pow
fará a exponenciação.*/

console.log(area.toFixed(2));
console.log(typeof Math);//Objeto.