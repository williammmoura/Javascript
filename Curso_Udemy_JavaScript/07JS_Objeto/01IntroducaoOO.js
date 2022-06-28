//CÓDEGOS NÃO EXECUTÁVEIS!!!

/**Procedural -> Trecho de código, onde é dado um respectivo nome a esse trecho, e reutilizar o códego em outro lugar. Funções que manipulam dados.*/

//Hipotéticamente
processamento(valor1, valor2, valor3)

//OO ->Temos dados e dentro desses dados temos funções
objeto ={
    valor1,
    valor2,
    valor3,
    processamento(){
        //...
    }
}

objeto.processamento() //Foco passou a ser o objeto.

//Principios Importantes (Orientação a Objetos)
/**1. Abstração:
 * Ex.: Pegar um objeto do mundo real e traduzir para dentro do sistema.
 * EX.:Carro(atributos do carro).
 *
 * 2. Encapsulamento: Ter os detahes de implementação escondidos e mostrar para alguém, que for usar, o sistema (mostrar uma interface simples para interageir com determinado objeto).
 * EX.:Carro (é necessário aprender como liga o carro, passar a marcha, abastecer o carro...Porém a mecânica por trás disso fica encapsulada, escondida).
 * 
 * 3. Herança(prototype): Baseado em uma relação "é 1", reuso de código. Gerar objetos complexos a partir de outros objetos mais simples.
 * Herança - recebe atributos e comportamentos de um objeto pai.
 * 
 * 4. Polimorfismo (multiplas formas):
 * Ex.: Celular(variável genérica), que pode ser um Motorola, Sansung, LG, Iphone...) ->Linguagens tipadas.
 */