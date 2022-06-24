/**Faça um algoritmo que calcule o fatorial de um número. */


function fatorial(nfat){
//Condicional para o cálculo do n!. 
    if(nfat == 0){
        return 1
    } else {
        return nfat * fatorial(nfat - 1)
    }
}
console.log(fatorial(4))