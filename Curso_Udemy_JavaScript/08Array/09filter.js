/**Filter 
 *O método filter() é um recurso que permite fazer a filtragem de elementos com apenas poucas linhas de comandos. Isso facilita o entendimento e a manutenção do código pelas pessoas que desenvolvem softwares.
 *Na prática, ele faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback e armazena o resultado em uma nova variável do tipo array. 
 
 Retorna VERDADEIRO ou FALSO.
*/

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 10.99, fragil: false}
]

const prodcaros = produtos => produtos.preco >= 2000
const prodfragil = produtos => produtos.fragil

const resultado = produtos.filter(prodcaros).filter(prodfragil);

console.log(resultado);