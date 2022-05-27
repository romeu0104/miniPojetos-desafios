const filme={
    titulo: "Qualquer",
    ano: 2020,
    autor: "Rob",
    personagem: "Joseph"
}

function infoFilme(parametro){
    for(let prop in parametro){
        if(typeof parametro[prop] === "string")
            console.log(prop+" = "+filme[prop])
    }
    
}


infoFilme(filme)