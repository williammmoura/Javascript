/**Objeto:
 * Em JS é uma coleção de chave/valor, ou seja,
 * tenho um identificador e passo um valor para
 * ele (texto, boolean, função...).
 */

/*Objeto criado dinamicamente.*/
const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4999.90;
prod1["Desconto Legal"] = 0.4;/**Evitar atri-
butos com espaços.*/
/**Acima, criei um objeto. */

console.log(prod1);

const prod2 = {//Abre o "corpo" do objeto.
    nome: "Camisa Polo", // Identif./Valor
    preco: 79.90  // Identif./Valor
};/*Fecha*/

console.log(prod2);