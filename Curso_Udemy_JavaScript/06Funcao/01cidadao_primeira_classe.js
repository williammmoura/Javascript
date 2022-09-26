/**Função em JS é First-Class Object (Citizens)
 * Higher-order function
 */
//Criar de forma literal;
function fun1() { }

//Armazenar em uma variável;
const fun2 = function () { }

//Armazenar em um array;
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto;
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parâmetro;
function run(fun){
    fun()
}

run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma função;
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5)/*"(4)" está relacionado com o parâmetro "c", que está dentro do "return" da função "soma". Por tanto, para que a soma seja feita conforme está no "console.log", deve ter os valores de a, b e c.*/

const cincoMais = soma(2, 3)/*Aqui foi criada uma constante "cincoMais", que recebe a função "soma(2, 3)".*/
cincoMais(4)//Valor da constante "cincoMais" é 4, que será adiciona ao valor da função "soma", cujo, os valores dos parâmetros são 2 e 3.