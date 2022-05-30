// exibir números primos dentro de um limite


function numerosPrimos(limite){
    for(let i=2;i<=limite;i++){
        let ePrimo=true;
        for(let n=2;n<i;n++){
            if(i%n===0){
                ePrimo=false
                break;
            }
        }
        if(ePrimo) console.log(i)
    }
}
console.log(numerosPrimos(10))