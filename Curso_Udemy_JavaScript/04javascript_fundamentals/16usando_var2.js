var numero = 1;
{
    var numero = 2;//Não fica restrito apenas no bloco{}, somente dentro de uma função

    console.log("dentro =", numero);
}
console.log("fora =", numero);