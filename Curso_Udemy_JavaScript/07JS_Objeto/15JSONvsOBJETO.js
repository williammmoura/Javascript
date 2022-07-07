/**JSON é basicamente um formato leve de troca de informações/dados entre sistemas.
 * Vantagens do JSON:
Leitura mais simples
Analisador(parsing) mais fácil
JSON suporta objetos! Sim, ele é tipado!
Velocidade maior na execução e transporte de dados
Arquivo com tamanho reduzido
Quem utiliza? Google, Facebook, Yahoo!, Twitter...
 */

//Criando um objeto.

const obj = {a: 1, b: 2, c: 3, soma(){
    return a + b + c 
}}
console.log(JSON.stringify(obj))//Escreve texto.

//console.log(JSON.parse("{a:1, b: 2, c: 3}")) -> Formato inválido.
//console.log(JSON.parse("{'a':1,'b': 2, 'c': 3}"))//Formato inválido.
console.log(JSON.parse('{"a":1,"b": 2, "c": 3}'))//Formato válido (um objeto gerado a partir de um texto, respeitando o formato JSON).
console.log(JSON.parse('{"a":1.7,"b": "String", "c": true, "d": {}, "e": []}'))//Formato valido, com um objeto dentro de outro.

//Qualquer texto e atributos, dentro do JSON, tem que estar delimitado por áspas duplas "".