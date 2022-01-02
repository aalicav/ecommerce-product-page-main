let mais = document.getElementById("mais")
let menos = document.getElementById("menos")
let valorInicial = 125
let quantidade = 1
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