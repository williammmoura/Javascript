//Armazenando uma função em uma variável.
const imprimirSoma = function(a, b){
    console.log( a+ b);
}
imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variável.
const soma = (parametroA, parametroB) => {
    return parametroA + parametroB;
}

console.log(soma(2, 3));

//Retorno implícito.
const subtração = (a, b) => a - b;//Executa apenas uma sentença de código.

console.log(subtração(3, 2));

const imprimir2 = a => console.log(a);//Quando tiver apenas 1 parâmetro não será necessário ficar entre perentes.
imprimir2("Legal!!!");