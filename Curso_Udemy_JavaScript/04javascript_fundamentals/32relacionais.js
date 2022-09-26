//IMPORTANTE!!!

console.log('01)', '1' == 1);//Igual => em JS é comparado o VALOR e NÃO o TIPO (tipo primitivo).
console.log('02)', '1' === 1);//Extritamente igual => compara o TIPO PRIMITIVO da variável(string, number, boolean).
console.log('03)', '3' != 3);//Diferente => aqui segue a lógica do primeiro exemplo.
console.log('04)', '3' !== 3);//extritamente diferente => aqui segue a lógica do segundo exemplo.

console.log('-----------------------------');
console.log('05)', '3' > 2);
console.log('06)', '3' < 2);
console.log('07)', '3' <= 2);
console.log('08)', '3' >= 2);

console.log('-----------------------------');
//Datas
const d1 = new Date(0);//Marco zero refere-se 01/01.
const d2 = new Date(0);
console.log('09)', d1 === d2);//Aqui é trabalhado a REFERENCIA DE MEMÓRIA! Note que a constante "d1" está alocado em espaço de memória e "d2" em outro. 
console.log('10)', d1 == d2);//Segue a mesma lógica do exemplo de cima.
console.log('11)', d1.getTime() === d2.getTime());//Aqui é considerado o TIPO PRIMITIVO (ambos são NUMBERS).
console.log('11.1)', d1.getTime() == d2.getTime());//Mesmo valor, então retornará true.

console.log('-----------------------------');
console.log('12)', undefined == null);//Comparando valor.
console.log('13)', undefined === null);//Comparando tipo.

//Recomendado usar o extritamente igual (===).