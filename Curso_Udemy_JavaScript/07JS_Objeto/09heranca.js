//Cadeia de protótipos (prototype chain)

//Ex.1:
Object.prototype.attr0 = '0' //Não recomendado.

const avo = {attr1: 'A'}
const pai = {__proto__: avo, Attr2: 'B', attr3: '3' /**sombreamento*/}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1) //Procurando no 'filho', 'pai' e 'avo' onde acho o attr1, que é igual a "A".
console.log(filho.attr0, filho.attr1, filho.Attr2, filho.attr3)


//Ex.2:
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h.`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing -> a variável pode sombrear outras variáveis de escopo mais abrangentes.
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}.`//"super" para referenciar o protótipo.
    } 
}

Object.setPrototypeOf(ferrari, carro)//Estabelece uma relção de protótipo entre dois objetos.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())