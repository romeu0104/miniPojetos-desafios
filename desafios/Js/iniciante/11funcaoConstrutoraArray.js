// Criar função construtora de postagem contendo um array

function Postagem(tittle,post,author){
    this.tittle=tittle
    this.post=post
    this.author=author
}

//não consegui fazer uma função construtora para as visualizações para somar as visualizações, ele tbm não deixou claro no desafio se era isso q pedia, se el tiver feito de foma diferente vou adicionar ao fim, caso ache interessante.
let visualizações=0;
function QuantViews(){
    return visualizações+=1
}


function Comentarios(author,msg){
    this.author=author
    this.msg=msg
    let comentarios=[]
    comentarios.push({author,msg})
    return comentarios
}


let postagem1=new Postagem("Algo", "Alguma coisa", "Alguém")
let view1 = QuantViews()
let comentario1=new Comentarios("Romeu", "Teste")

console.log(postagem1,view1,comentario1)
