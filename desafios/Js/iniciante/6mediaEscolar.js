// Obter a média a partir de um array devolver a nota conforme tabela

//0-59 F
//60-69 D
//70-79 C
//80-89 B
//90+ A

const boletim=[40,55,65]
let soma =0
let media
function calculoMedia(notas){
    
    for(let i in boletim){
        if(typeof boletim[i] !== 'number')
            return `${boletim[i]} não é número`
        else soma+=boletim[i]
    }
   media=soma/boletim.length
    if(media>=90)
        return "A"
    if(media>90&&media>=80)
        return "B"
    if(media<80&&media>=70)
        return "C"
    if(media<70&&media>=60)
        return "D"
    if(media<60)
        return "F"

}





console.log(calculoMedia(boletim))