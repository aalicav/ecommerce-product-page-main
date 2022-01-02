let mais = document.getElementById("mais")
let menos = document.getElementById("menos")
let valorInicial = 125
let quantidade = 1
function calculaPreço(){

    function soma(){
        quantidade++
        document.getElementById("preço").textContent = quantidade*valorInicial

    }
    function subtração(){
        if(quantidade>0){ 
        quantidade--
        document.getElementById("preço").textContent = quantidade*valorInicial
        }
    }

    mais.addEventListener('click',soma)
    menos.addEventListener('click',subtração)

    
}
    

calculaPreço()