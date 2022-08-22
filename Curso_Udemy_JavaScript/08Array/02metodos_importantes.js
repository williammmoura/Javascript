const pilotos = ['Verstappen', 'S.Pérez', 'C.Leclerc', 'C.Sainz', 'L.Hamilton', 'G.Russell'] /**A constante pilotos SEMPRE irá apontar para esta lista, porem, poderá ser modificada.*/
pilotos.pop()/**Esse método remove o último elemento do array.*/
console.log(pilotos)

pilotos.push('L.Norris', 'D.Riccardo')/**"push" adiciona novos elementos dentro do array.*/
console.log(pilotos)

pilotos.shift()/**Esse método retira o iten da primeira posição do array.*/
console.log(pilotos)

pilotos.unshift('F.Alonso', 'E.Ocon')/**Adiciona um elemento, no índice zero, no array.*/
console.log(pilotos)

/**Splice pode adicionar e remover alementos */
//Adicionar:
pilotos.splice(2, 0, 'Verstappen', 'G.Russell')
console.log(pilotos)

//Remover:
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //Retorna um novo array. Pegar um pedaço do array.
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(0, 4)
console.log(algunsPilotos1)