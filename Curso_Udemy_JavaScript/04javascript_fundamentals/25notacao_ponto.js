console.log(Math.ceil(6.1));//Arredondamento para cima (ceil = teto).

const obj1 = {};
obj1.nome = "Bola";//Atributo dinâmico do objeto.
console.log(obj1.nome);

/**Criando uma função (com nome "obj") */
function Obj(nome) {
    this.nome = nome; /**"this.nome = nome" -> 
    significa que o "obj(nome)" ficará visí-
    vel para quem instanciar o objeto "nome".*/
    this.exec = function() {
        console.log("Exec...");
    }
}
const obj2 = new Obj("cadeira");
const obj3 = new Obj("mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();