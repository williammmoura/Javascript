function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

//Simulando new
function novo(f,...params){
    const obj = {} // novo objeto;
    obj.__proto__ = f.prototype //protótipo do 'obj' associado ao atributo prototype da função;
    f.apply(obj, params)//Execução da função "f" passando como obejetos "obj" (criado a cima) e os paraâmetros criados no novo método;
    return obj //Retorno do objeto criado.
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)