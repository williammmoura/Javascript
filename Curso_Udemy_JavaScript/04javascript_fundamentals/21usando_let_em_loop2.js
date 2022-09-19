const funcs = [] //array

for(let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[6]();//Aqui tem escopo de bloco
funcs[2]();
funcs[8]();