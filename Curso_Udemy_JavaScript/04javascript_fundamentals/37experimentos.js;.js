/**Exemplo de Node */
//Aula para conhecer o local onde está executando (RunTime).

let a = 3;

global.b = 123;
this.c = 456;
this.e = 'teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//Criando uma variável maluca, ou seja, sem var e let.
abc = 3; //não fazer isso!
console.log(global.abc);//Colocando uma variável global no Node.

//module.exports = { e: 456, f: false, g: 'teste' }