let mais = document.getElementById("mais")
let menos = document.getElementById("menos")
let valorInicial = 125
let quantidade = 1
const imgs = document.getElementById("img")
let idx = 0;
const img = document.querySelectorAll("#img img")
document.querySelector("#fundo_preto").style.display = 'none'
function calculaPreço(){
// Calcula a quantidade de produtos e o preço total
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
// controla a imagem que está sendo mostrada maior

function clickThumbnail(){
    function mostraImagem1(evento){
        document.querySelector("#img img").setAttribute('src',"images/image-product-1.jpg")
        document.querySelector("#img thumbnail3").setAttribute('border-color','orange')
    }
    function mostraImagem2(){
        document.querySelector("#img img").setAttribute('src',"images/image-product-2.jpg")
        document.querySelector("#img thumbnail2").setAttribute('border-color','orange')
    }function mostraImagem3(){
        document.querySelector("#img img").setAttribute('src',"images/image-product-3.jpg")
        document.querySelector("#img thumbnail3").setAttribute('border-color','orange')
    }function mostraImagem4(){
        document.querySelector("#img img").setAttribute('src',"images/image-product-4.jpg")
        document.querySelector("#img thumbnail4").setAttribute('border-color','orange')
    }
    document.querySelector("#img_menor #thumbnail1").addEventListener('click',mostraImagem1)
    document.querySelector("#img_menor #thumbnail2").addEventListener('click',mostraImagem2)
    document.querySelector("#img_menor #thumbnail3").addEventListener('click',mostraImagem3)
    document.querySelector("#img_menor #thumbnail4").addEventListener('click',mostraImagem4)
}
function mostraCarrossel(){
    document.querySelector("#corpo .carrossel").addEventListener('dblclick',function(){
        document.querySelector("#fundo_preto").style.display = 'block'
        document.querySelector("#fundo_preto").addEventListener('dblclick',function(){
            document.querySelector("#fundo_preto").style.display = 'none'
        });
    });

}
setInterval(mostraCarrossel,100)
clickThumbnail()