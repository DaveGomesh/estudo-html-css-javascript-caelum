var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valortamanho')

inputTamanho.oninput = alterarValor

function alterarValor(){
    outputTamanho.value = inputTamanho.value
}