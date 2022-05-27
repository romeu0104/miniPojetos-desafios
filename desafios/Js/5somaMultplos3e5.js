//função que some todos os multiplos de 5 e 3 e retorne a soma deles


function somaMultiplos(numero){
    let soma=0;
    if(numero<3)
        return "Esse número não tem múltiplos de 3 ou 5"
    for(i=1;i<=numero; i++){
        if(i%3===0&&i%5===0)
            soma += 2*i
        if(i%3===0||i%5===0)
            soma+=i
    }
    return soma
}


console.log(somaMultiplos(2))