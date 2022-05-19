const nome = "Rebeca";
const concatenacao = "Olá, " + nome + "!";

/*Abrindo um template string (com sinal da 
crase)*/
const template = `
    Ola,
    ${nome}!`
console.log(concatenacao, template);

//Expressões;
console.log(`1 + 1 = ${1 + 1}`);

//Função Arrow;
const up = texto => texto.toUpperCase();/*Defi-
nindo a função, cujo nome é "up".*/
console.log(`Ei... ${up("cuidado")}!`);