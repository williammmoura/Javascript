/**Callback: passar uma função para outra função e quando determinado evento acontecer,
 * a função, que foi passada, vai ser disparada de volta. A função "callback" pode ser
 * chamada várias vezes, ou apenas uma única vez (depende do contexto). 
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimir)/**"forEach" é uma função de fabricantes(array)*/ //Registrando o evento.
fabricantes.forEach(fabricante => console.log(fabricante))