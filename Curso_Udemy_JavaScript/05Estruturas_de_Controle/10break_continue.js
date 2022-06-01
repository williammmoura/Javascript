const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if(x == 5) {
        break//Interrompe a repetição e vai para a próxima sentença de código (fora da repetição).
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums) {
    if (y == 5){
        continue //Interrompe a repetição atual e vai para a próxima repetição.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: /*Rótolo. NÃO USAR!*/
for (a in nums) { 
    for(b in nums){
        if(a == 2 && b == 3) break externo /**"break rotulado": ele atuará no laço mais externo.*/
        console.log(`Par = ${a},${b}`)
    }
}