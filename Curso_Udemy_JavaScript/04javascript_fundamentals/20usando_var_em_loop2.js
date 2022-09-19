const funcs = []; //Array vazio.

for (var i=0; i<10; i++){//"i" vai de 0 até 9.
    funcs.push(function(){//Adicionando uma função sem nome.
        console.log(i);
    })
}

funcs[2](); //Em ambos será chamado 10, pois a variável não tem escopo de bloco.
funcs[8]();