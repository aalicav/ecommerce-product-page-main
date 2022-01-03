let mais = document.getElementById("mais")
let menos = document.getElementById("menos")
let valorInicial = 125
let quantidade = 1
const imgs = document.getElementById("img")
let idx = 0;
const img = document.querySelectorAll("#img img")
function calculaPreço(){

    function soma(){
        quantidade++
        document.getElementById("preço").textContent = `$${quantidade*valorInicial}`
        document.getElementById("quantidade").textContent = quantidade
    }
    function subtração(){
        if(quantidade>1){ 
        quantidade--
        document.getElementById("preço").textContent = `$${quantidade*valorInicial}`
        document.getElementById("quantidade").textContent = quantidade
        }
    }

    mais.addEventListener('click',soma)
    menos.addEventListener('click',subtração)

    
}
calculaPreço()

function carrossel(){
    idx++;
    if(idx > img.length){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx*500}px)`
}
function clickThumbnail(){
    function mostraImagem1(evento){
        document.querySelector("#img img").setAttribute('src',"images/image-product-1.jpg")
    }
    function mostraImagem2(){
        document.querySelector("#img img").setAttribute('src',"images/image-product-2.jpg")
    }function mostraImagem3(){
        document.querySelector("#img img").setAttribute('src',"images/image-product-3.jpg")
    }function mostraImagem4(){
        document.querySelector("#img img").setAttribute('src',"images/image-product-4.jpg")
    }
    document.querySelector("#img_menor #thumbnail1").addEventListener('click',mostraImagem1)
    document.querySelector("#img_menor #thumbnail2").addEventListener('click',mostraImagem2)
    document.querySelector("#img_menor #thumbnail3").addEventListener('click',mostraImagem3)
    document.querySelector("#img_menor #thumbnail4").addEventListener('click',mostraImagem4)
}
clickThumbnail()