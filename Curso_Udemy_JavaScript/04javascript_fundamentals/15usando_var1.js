{ 
    { 
        { 
            { 
                var sera = "Será???"; 
                console.log(sera); //Escopo.
            } 
        } 
    } 
}

console.log(sera);/**Variável visivel fora do
bloco (escopo)*/

function teste() {
    var local = 123;
    console.log(local); /**Variável visivel.
    O escopo da variável "teste", fica visí-
    apenas dentro da função. */
}

teste()
/*console.log(local);/**A variável "local" não
estará visível aqui, somente dentro do escopo.*/

/**Uma variável (var) criada fora de uma fun-
 * çao ela será global, ou seja, estará dispo-
 * nível fora do escopo.
 */