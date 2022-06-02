// Criar array de objetos de faixas de preço forma normal, factory function e função construtora


// Normal
const faixas = [
    {
        tooltip: "Mais barato",
        min: 0,
        max: 100
    },
    {
        tooltip: "Intermediárias",
        min: 100,
        max: 400
    },
    {
        tooltip: "Mais caras",
        min: 400,
        max: 99999999
    }
]


// Factory Function
function criarFaixas(tooltip, min, max){
    return {
        tooltip,
        min,
        max
    }
}

const faixas2=[
    criarFaixas("Mais barato", 0, 100),
    criarFaixas("Intermediárias", 100, 400),
    criarFaixas("Mais caras", 4000,9999999)
]

// Função construtora

function CriarFaixas(tooltip, min, max){
    {
        this.tooltip=tooltip,
        this.min=min,
        this.max=max
    }
}

let faixas3 = [
    new CriarFaixas("Mais barato", 0, 100),
    new CriarFaixas("Intermediárias", 100, 400),
    new CriarFaixas("Mais caras", 4000,9999999)
]


console.log(faixas)
console.log(faixas2)
console.log(faixas3)