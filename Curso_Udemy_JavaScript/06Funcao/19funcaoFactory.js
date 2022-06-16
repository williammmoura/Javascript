//Criar produto
function criarProduto (nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 4799.99))
console.log(criarProduto('moto7', 1499.90))