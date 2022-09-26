function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))//O segundo valor será undefined.
console.log(area())
console.log(area(2, 3, 22, 44))//A função usará os dois primenros parâmentros no qual foi definido.
console.log(area(5, 5))