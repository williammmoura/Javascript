/**Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */
function numerosExtenso(num){
    switch(num){
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Fora do intervalo (0 a 10).'    
    }
}

console.log(numerosExtenso(0))
console.log(numerosExtenso(1))
console.log(numerosExtenso(2))
console.log(numerosExtenso(3))
console.log(numerosExtenso(4))
console.log(numerosExtenso(5))
console.log(numerosExtenso(11))