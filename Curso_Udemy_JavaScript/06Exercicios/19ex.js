/**O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function cardapio(codLanche, unidade){
    switch(codLanche){
        case 100:
            return unidade * 3
        case 200:
            return unidade * 4
        case 300:
            return unidade * 5.5
        case 400:
            return unidade * 7.5
        case 500:
            return unidade * 3.5
        case 600:
            return unidade * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(cardapio(100, 2))