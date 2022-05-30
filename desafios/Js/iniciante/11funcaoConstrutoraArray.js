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


// No desafio foi solicitado q colocasse contador de visualizações e comentários com mensagem e autor da msg, porém na realização do exercício não foi feito isso, ele criou uma função construtora com todos as propriedades pedidas, em visualizações e atribuiu "this.visualizações=0" e comentários "this.comentários=[]", após disse q deveria ser criada uma função a parte para essas e etc, mas n fez, por isso n tenho uma melhor solução q essa, a dele foi igual a abaixo:
/*
    function Postagem(tittle,post,author){
    this.tittle=tittle
    this.post=post
    this.author=author
    this.vizualizações=0;
    this.comentarios=[]
    this.estaOnline=false
}

OBS.: na hora q fiz o exercício esqueci do "está online ou não" porém faria seguindo a mesma linha de raciocínio da função QuantViews, mudando os valores para booleanos*/