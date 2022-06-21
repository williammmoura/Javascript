/**Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

let stringPontos = "14, 10, 25, 23, 30, 45, 35, 04, 33, 40"

function desempenhoPontos(stringPontos){
    let pontos = stringPontos.split(', ') /**O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.*/
    let quebraRecord = 0 //contador
    let piorPontuacao = 1
    let maiorpontuacao = pontos[0]
    let menorpontuacao = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if(pontos[i] > maiorpontuacao) {
            maiorpontuacao = pontos[i]
            quebraRecord++
        }else if (pontos[i] < menorpontuacao) {
            menorpontuacao = pontos[i]
            piorPontuacao = i+1;
        }
    }
    return [quebraRecord, piorPontuacao]
}
 
console.log(desempenhoPontos(stringPontos))
