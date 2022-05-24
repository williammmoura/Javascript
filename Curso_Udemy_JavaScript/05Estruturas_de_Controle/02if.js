function teste1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('Final') //Não tem relação com o "if".
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7);  //Cuidado com o ";", não usar com as estruturas de controle.
    //Aqui temos um bloco de código vazio.
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)