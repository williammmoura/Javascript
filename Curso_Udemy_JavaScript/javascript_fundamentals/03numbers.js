const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
/*
 ".toFixed(n)" quer dizer a quantidade de nú-
meros que será mostrado após a vírgula.
 No caso mostrado acima, será mostrado 2 nú-
mmeros após a vírgula.

media.toFixed(2)
*/

/* 
 Convertendo um valor númerico para uma
string, retornando para o valor original.
*/
console.log(media.toString());

/*
 Para converter o valor ponto flutuante para
um valor binário.
 Dentro dos parenteses é colocado o número 2!
*/
console.log(media.toString(2));

//Tipo do dado.
//Type of data.
console.log(typeof media);
console.log(typeof Number);