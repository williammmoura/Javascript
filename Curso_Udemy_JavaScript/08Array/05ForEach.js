Array.prototype.forEach2 = function(callback){
    //Percorrendo o Array
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}


const aprovados = ['William', 'Carol', 'Andressa', 'Victória']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})