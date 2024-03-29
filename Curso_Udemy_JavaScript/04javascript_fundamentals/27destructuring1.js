//Novo recurso do ES2015.

/**Usando a estrutura de um objeto.*/

/**Criando um objeto.*/
const pessoa ={
    nome: "Ana",
    idade: 25,
    endereco: {
        logradouro: "Rua Abc",
        numero: 1000
    }
};
/**Usando o DESTRUCTURING.*/
const{ nome, idade} = pessoa;//Tirando do objeto "pessoa" os atributos "nome" e "idade".
console.log(nome, idade);

//Para mudar o nome da variável.
const{ nome: n , idade: i} = pessoa;//Substituindo: Tirando do objeto, os atributos "nome" e colocando "n", assim como, excluir o atributo "idade" e colocando "i".
console.log(n, i);

//Atributo que NÃO existe dentro do objeto.
const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

/*Acessando atributos (aninhado) que está dentro
de endereco.*/
const{ endereco: {logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);