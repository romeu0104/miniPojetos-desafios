// retornar o endereço dentro de um objeto

const endereço={
    rua: "A",
    cidade: "B",
    cep: "C",
}

function exibirendereco(endereço){
    for(let prop in endereço){
        console.log(prop+": "+endereço[prop])
    }
}
exibirendereco(endereço)