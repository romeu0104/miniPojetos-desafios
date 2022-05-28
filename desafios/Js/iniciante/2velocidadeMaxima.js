// Velmax=70
// a cada 5km/h a cima 1 ponto
// 12 pontos perde a carteira


let pontosVel = velMax(79);
console.log(pontosVel)


function velMax(velocidade){
    let velMax=70;
    let fatorDePontos=5;
    let pontos = Math.round(((velocidade-velMax)/fatorDePontos));
    if(pontos<1)
        return 'Está no limite'
    if(pontos>=12)
        return `Vc estava ${velocidade-velMax}Km/h acima do permitido, ${pontos>12?"CNH suspensa por estourar o limite de 12 pontos" : "CNH suspensa, atingiu o limite de 12 pontos"}`
    else
        return `Vc estava ${velocidade-velMax}Km/h acima do permitido, perdendo ${pontos} pontos na carteira.`
    
    
}

//coloquei o terceiro projeto aqui pq é muito simples o jeito q pensei seria mais rapido
console.log("Terceiro mini projeto - Impar par")

function imparPar(valor){
    valor%2===0?console.log("Par"):console.log("impar")
}
imparPar(10)