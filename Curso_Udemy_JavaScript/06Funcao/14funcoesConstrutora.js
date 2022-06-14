function Carro(velocidaMaxima = 200, delta = 5){
    //atributo privado(apenas a função carro)
    let velocidaAtual = 0

    //metodo público
    this.acelerar = function(){
        if(velocidaAtual + delta <= velocidaMaxima){
            velocidaAtual += delta
        }else{
            velocidaAtual = velocidaMaxima
        }
    }
    
    //método publico
    this.getVelocidadeAtual = function(){
        return velocidaAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) //função construtor
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
console.log(typeof ferrari)