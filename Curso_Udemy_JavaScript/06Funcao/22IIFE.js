//Função autoenvocada.
//IIFE -> Immediately Invoked Function Expression

//Padrão usado para "fugir" do escopo global.
(function()/*função anonima*/{
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente!')
})()