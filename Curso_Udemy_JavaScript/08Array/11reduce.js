const  alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual)/*função "callback"*/{
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado) //Resultado final do acumulado, da soma, das notas, colocadas dentro do array. 
