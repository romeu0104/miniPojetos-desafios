


function FizzBuzz(valor){
    let tres=valor/3;
    let cinco=valor/5;
    if(typeof valor !== "number")
        return "Não é um numero"
    if(Number.isInteger(tres) && Number.isInteger(cinco))
        return "FizzBuzz"
    if(Number.isInteger(tres)) 
        return 'Fizz'
    if(Number.isInteger(cinco)){
        return 'Buzz'
    }
    else return valor
}
const resultado = FizzBuzz(15)
console.log(resultado)

//Forma mais usual
console.log("OUTRA FORMA")


const forma2= FizzBuzz2(15)
console.log(forma2)

function FizzBuzz2(outraVersao){
    if(typeof outraVersao!=='number')
        return 'Não é um número'
    if(outraVersao%3===0&&outraVersao%5===0)
        return "FizzBuzz"
    if(outraVersao%3===0)
        return "Fizz"
    if(outraVersao%5===0)
        return "Buzz"
    else return valor

}