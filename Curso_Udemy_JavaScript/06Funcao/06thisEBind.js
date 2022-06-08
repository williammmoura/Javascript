function Pessoa(){
    this.idade = 0

    const self = this //A constante "self" não irá mudar NUNCA!
    setInterval(function(){
        self.idade++ // possoa substituir o "this" pelo "self".
        console.log(self.idade)
    }/*. bind(this)*/, 1000) //Intervalo em milisegundo (valor 1000). A cada 1000milisegundos essa função vai ser "disparada" novamente.
}

//Instanciando a função "Pessoa" a um objeto.
new Pessoa