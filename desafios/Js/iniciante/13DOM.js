// Forma como eu tentei resolver sem ver a solução
const listaConvidados = ["João", "Antônio", "Romeu", "Leonardo"]
const emissorConvite = ["Marcos", "Jane", "Mário"]

function confConvidado(convidado){
    for(let nome of listaConvidados){
        if(nome===convidado)
            return nome===convidado     
    }
    return false
}
function confEmissor(emissor){
    for(let nome of emissorConvite){
        if(nome===emissor)
            return nome===emissor     
    }
    return false
}
// Precisei pesquisar como pegar valores da página HTML

const botao = document.getElementById("send")
botao.addEventListener("click", function(e){
    e.preventDefault(); //aqui estou dizendo para não enviar o formulário
    const nomeConvidado = document.getElementById("convidado").value
    const nomeEmissor = document.getElementById("emissorConvite").value

    const constaConvidado = confConvidado(nomeConvidado)
    const constaEmissor= confEmissor(nomeEmissor)

    if(constaConvidado&&constaEmissor)
        document.getElementById("resposta").innerHTML="Pode entrar"
    else if(constaConvidado!==true)
        document.getElementById("resposta").innerHTML="Seu nome não está na lista"
    else if(constaEmissor!==true)
        document.getElementById('resposta').innerHTML=`${nomeEmissor} não tem direito a convites`
})