const pessoa = {
    saudacao: 'Bom dia!', //Objeto
    falar(){
        console.log(this.saudacao) //Acesso ao "saudação" do objeto "pessoa".
    }
}

pessoa.falar()

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e Orientação a Objetos (OO)

const falarDePessoa = pessoa.falar.bind(pessoa)//"bind" é passado um objeto onde queremos que seja resolvido o "this", ou seja, para a constante "pessoa", definida na linha 1. 
falarDePessoa()

const falar2 = pessoa.falar
falar2()