/**Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function divisivel3(x){
    if(x % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(divisivel3(3))
console.log(divisivel3(8))