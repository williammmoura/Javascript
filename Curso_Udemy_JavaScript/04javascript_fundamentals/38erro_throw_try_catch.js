function tratarErroELancar(erro) {
    //throw new Error('...');
    //throw 10
    throw {//Lançamento do erro. No caso foi lançado um objeto.
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{//try -> Bloco de código que pode gerar um tipo de erro.
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {//catch -> Tratamento do erro, que foi geredo dentro do "try".
        tratarErroELancar(e)
    } finally {//Será executado mesmo que ocorra um erro ou não. 
        console.log('final')
    }
}

const obj = { nome: 'William' }
imprimirNomeGritado(obj)