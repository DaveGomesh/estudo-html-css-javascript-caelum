var preco = parseFloat(document.querySelector("#preco").textContent.replace("R$", "00").replace(",", "."));
var quant = document.querySelector("#qtd");
var total = document.querySelector('#total');

quant.oninput = function(){
    total.textContent = "R$"+(preco * parseInt(quant.value)).toFixed(2).replace(".", ",");
}