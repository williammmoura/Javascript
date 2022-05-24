//Par, Nome/Valor
const saudacao = "Opa"; //Contexto léxico 1.

function exec() {
    const saudacao = "Falaaa!"; //Contexto léxico 2.
    return saudacao;
}

/*Objetos são grupos aninhados de pares nome/va-
lor.*/

const cliente = {
    nome: "William",
    idade: 30,
    peso: 61,
    endereco: {
        Logradouro: "Rua MuitO Legal",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);