Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]//DEfinindo o acumulador
    for(let i=1; i<this.length; i++)/*Condição para percorrer o aaray*/{
        acumulador = callback(acumulador, this[i], this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))