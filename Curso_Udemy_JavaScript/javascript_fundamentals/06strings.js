const escola = "Cod3r"

/*Letra que está no índice 4 dentro da string.
No caso, abaixo, será "r".*/
console.log(escola.charAt(4));
//IMPORTANTE!
console.log(escola.charAt(0));

/*Indice fora do tamanho da string.*/
console.log(escola.charAt(5));
/*Ele não retornará erro. Não mostrará nada!*/

console.log(escola.charCodeAt(3));/*Busca o
valor correspondente ao 3 da tabela unicode.*/

console.log(escola.indexOf("3"));/*Busca o 
índice, que está associado ao digito "3" na
constante escola.*/

console.log(escola.substring(1));/*Vai mostrar
a partir do índice 1, até o final da string.*/

console.log(escola.substring(0, 3));/*Aqui
irá mostrar do índice 0 até o índice 3, SEM
incluir o indice 3.*/

console.log("Escola " + escola + "!");
console.log("Escola ".concat(escola).concat("!"));
/*Concatenação.*/

console.log(escola.replace(3, "e"));/*Vai colo-
car dentro do valor 3 a letra "e".*/

console.log("Ana, Maria, Pedro".split(","));
/*String separada por vírgula e transformar em 
um Array.
Array é uma estrutura linear, onde têm várias
variáveis.*/