/**Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function reajuste(planoAumento, salarioAtual){
    switch(planoAumento){
        case 'A':
            return salarioAtual * 1.10
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.20
        default:
            return 'Plano inválido.'
    }
}

console.log(reajuste('A', 3000))
console.log(reajuste('B', 3000))
console.log(reajuste('C', 3000))
console.log(reajuste('D', 3000))