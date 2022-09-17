/**O array, em js, é um objeto especial com caracteristicas próprias, mas não existe o array nativo em js (tipo de dado array).*/

//Curiosidade
console.log(typeof Array, typeof new Array)/**function e a após o "new" o resultado será um objeto.*/
console.log(typeof Array, typeof new Array, typeof [])/**Adicionando mais um "typeof" de um Array literal,gerará um novo objeto.*/
//**A boa pratica diz que é melhor trabalhar com dados homogêneos, em um Array.*/

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
    
aprovados = ['Bia', 'Carlos', 'William']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

console.log('----------------------------------')

aprovados[3] = 'Caroline'
aprovados.push('Andressa')
console.log(aprovados.length)

console.log('----------------------------------')

aprovados[9] = 'Victória'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)
console.log()
console.log(aprovados)
aprovados.sort()//Vai ordenar o Array
console.log(aprovados)

delete aprovados[2]//Exclui o elemento de índice 1, mas não reordena.
console.log(aprovados)

aprovados = ['Andressa', 'Victória', 'William']
aprovados.splice(1, 1, 'AdicionandoElemento', '...')/**"splice" serve para adicionar elementos do array, assim como, para remover. Também serve para remover e adicionar elementos ao mesmo tempo.
Neste caso, estou trabalhando com o elemento 1 (Victória) e excluido um elemento (no caso, Victória).*/
console.log(aprovados)