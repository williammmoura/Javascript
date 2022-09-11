const  alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
  
//Desafio 1: Todos os alunos são bolsistas?

console.log(alunos.map(a => a.bolsista))//Percorre todo o array mostrando, apenas, true ou false.
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista//"ou" pelo menos uma das condições terá que ser verdadeira, para retornar verdadeiro.
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))