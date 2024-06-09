let ipTexto = document.querySelector("#ipsabor")
let ipTexto2 = document.querySelector("#ipsabor2")
let ipTexto3 = document.querySelector("#ipsabor3")
let ipTexto4 = document.querySelector("#ipsabor4")
let ipTexto5 = document.querySelector("#refri1")
let Resultado = document.querySelector("#resultado")
let Resultado2 = document.querySelector("#resultado2")
let Calcular = document.querySelector("#btresultado")

function Mostrarsabores(){
    let sabor = (ipTexto.value)
    let sabor2 = (ipTexto2.value)
    let sabor3 = (ipTexto3.value)
    let sabor4 = (ipTexto4.value)
    let refrig = Number(ipTexto5.value)
    let sabores = sabor + sabor2 + sabor3 + sabor4 + refrig;
    Resultado.textContent = "Foram escolhidos os seguintes sabores: " + sabor + ", " + sabor2 + ", " + sabor3 + ", " + sabor4 + " e " + refrig + " refrigerante(s).";
    let valor = refrig*7 + 12+ 12 + 12 + 12;
    Resultado2.textContent = "O valor final ficou " + valor + " Reais.";
    
}
Calcular.onclick=function(){
    Mostrarsabores()
}