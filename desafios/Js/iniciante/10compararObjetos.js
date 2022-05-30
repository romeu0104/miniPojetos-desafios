//Igualdade de objetos

function Endereço(rua,cidade,cep){
    this.rua=rua
    this.cidade=cidade
    this.cep=cep
}

const endereço1=new Endereço("a","b","c")
const endereço2=new Endereço("a","b","c")

function compararEnd(end1,end2){
    if(end1.rua===end2.rua&&end1.cidade===end2.cidade&&end1.cep===end2.cep)
        return true
    else return false
}

console.log(compararEnd(endereço1,endereço2))