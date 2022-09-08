Array.prototype.filter2 = function(callback){
    const newArray = [
        for(let i = 0; i < this.length; i++){
            if(callback(this[i], i, this)){
                newArray.push(this[i])
            }
        }
    ]
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 10.99, fragil: false}
]

const prodcaros = produtos => produtos.preco >= 2000
const prodfragil = produtos => produtos.fragil

const resultado = produtos.filter2(prodcaros).filter2(prodfragil);

console.log(produtos.filter2(caro).filter2(fragil));