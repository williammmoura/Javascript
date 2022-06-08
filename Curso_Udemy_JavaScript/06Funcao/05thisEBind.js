const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e Orientação a Objetos (OO)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar
falar2()