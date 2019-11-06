window.addEventListener("load",comenzar,false);
var imgenvia;
var sectionrecibe;

function comenzar(){
    imgenvia = document.getElementById("imgEnvia");
    imgenvia.addEventListener("dragstart",comenzamosArrastrar,false);

    sectionrecibe = document.getElementById("sectionRecibe");
    sectionrecibe.addEventListener("dragover",function(e){
        e.preventDefault();},false);
    sectionrecibe.addEventListener("drop",soltar,false);

    imgenvia.addEventListener("dragend",terminado,false);

    sectionrecibe.addEventListener("dragenter",entrando,false);
    sectionrecibe.addEventListener("dragleave",saliendo,false);
}

function comenzamosArrastrar(e){
    var codigo = "<img src='" + imgenvia.getAttribute("src")+"'>";
    e.dataTransfer.setData("Text",codigo);
}

function soltar(e){
    e.preventDefault();
    sectionrecibe.innerHTML=e.dataTransfer.getData("Text");
}

function terminado(e){
    var elemento = e.target;
    elemento.style.visibility= "hidden";
}

function entrando(e){
    e.preventDefault();
    sectionrecibe.style.background = "rgba(155,155,155,.3)"
}

function saliendo(e){
    e.preventDefault();
    sectionrecibe.style.background="white";
}