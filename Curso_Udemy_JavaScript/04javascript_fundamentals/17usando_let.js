let numero = 1;
{
    let numero = 2;
    console.log("dentro =", numero); /**Escopo
    de bloco.
    Só é possível com "let". */
}
console.log("fora =", numero);