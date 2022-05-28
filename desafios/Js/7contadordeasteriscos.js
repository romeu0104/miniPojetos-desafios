//função q exiba número de asteriscos em relação a linhas


function contadorAsteriscos(quantidade){
    let asteriscos=""
    for(i=1;i<=quantidade;i++){
        asteriscos+="*"
        console.log(asteriscos)
    }
    return quantidade
}

console.log(contadorAsteriscos(5))