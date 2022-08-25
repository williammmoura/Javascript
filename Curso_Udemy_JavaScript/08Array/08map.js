/*O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.*/

Array.prototype.map2 = function(callback){
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.80 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços.

const paraObjeto = json => JSON.parse(json);//Transformação de "json" para objeto.
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

console.log(resultado)