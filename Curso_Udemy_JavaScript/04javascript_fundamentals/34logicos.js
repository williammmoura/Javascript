function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;//(|| = ou)
    const comprarTv50 = trabalho1 && trabalho2;//(&& = e)
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise "xor"
    const comprarTv32 = trabalho1 != trabalho2;//(!= = diferente)
    const manterSaudavel = !comprarSorvete; //Operedor unário.
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Objeto. (Coleção chave/valor)
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));