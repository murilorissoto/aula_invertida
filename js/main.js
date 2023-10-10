function MudarConceito(){
    const texto = document.querySelector("#oi");
    const texto2 = document.querySelector("h3");
    const imagem = document.querySelector("#img2");
    const imagem2 = document.querySelector("#img3");
    const imagem3 = document.querySelector("#img4");
    const valor = document.querySelector('#valor').value;
    
    if((valor=="Objeto") || (valor =="objeto") ||(valor=="OBJETO")){
        texto.innerHTML = "O que é um Objeto:";
        imagem.setAttribute("src","img/img20.jfif");
        imagem.setAttribute("width","500px");
        texto2.innerHTML = "O objeto é, na verdade, uma aglutinação de estados e comportamentos. Conceitualmente falando, um objeto é um elemento que representa alguma entidade, quer seja abstrata quer seja concreta, da área de interesse do problema que está sendo analisado. Portanto, esse paradigma aproxima o mundo real do mundo virtual. Mas o que é interessante entender é que para dar suporte à definição de “objetos” criou-se a definição de classes.";
    }

    else if((valor=="Classe") || (valor=="CLASSE") || (valor=="classe")){
        texto.innerHTML = "O que é uma Classe";
        imagem.setAttribute("src","img/img1.png");
        imagem2.setAttribute("src","img/img2.png");
        imagem3.setAttribute("src","img/img3png");
        imagem.setAttribute("width","500px");
        texto2.innerHTML = "Uma classe é um modelo usado para definir vários objetos com características semelhantes. Um programa é constituído de uma classe ou de um conjunto de classes. Os elementos básicos de uma classe são chamados membros da classe e podem ser divididos em duas categorias: variáveis, que especificam o estado da classe ou de um objeto instância desta classe. Os métodos, que especificam os mecanismos pelos quais a classe ou um objeto instância desta classe podem operar.";
    }
    else{
        texto.innerHTML = "ESSE AÍ NÃO DÁ NÃO... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","500px");
        texto2.innerHTML = "Chola mais!!";
    }
}




    