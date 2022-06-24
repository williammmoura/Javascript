/**Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. 
Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const classiDia = function(dia){
    switch(dia){
        case 1:
            return "Fim de semana. Yahoooo!"
        case 2: case 3: case 4:  case 5: case 6:
            return "Dia útil."
        case 7:
            return "Fim de semana. É Sábado do dia!"
        default:
            return "Dia inválido."
    }
}

console.log(classiDia(1))
console.log(classiDia(2))
console.log(classiDia(3))
console.log(classiDia(4))
console.log(classiDia(5))
console.log(classiDia(6))
console.log(classiDia(7))
console.log(classiDia('a'))

