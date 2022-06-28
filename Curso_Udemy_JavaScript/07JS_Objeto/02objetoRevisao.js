//Coleção dinâmica de pares chave/produto
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco //Excluir atributos do objeto
delete produto['marca do produto']
console.log(produto)

//Objeto Complexo
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Will',
        idade: 25,
        endereco: {
            logradouro: 'Rua Abc',
            numero: 123 
        }   
    },
    condutores:[{
        nome:'Carol',
        idade:22
    }, {
        nome:'And',
        idade: 30
    }],
    calcularValorSeguro: function(){
        //...
    }
}  

//Acesso aos atributos:
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //undefined