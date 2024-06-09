let ipTexto = document.querySelector("#ipnumero");
let Resultado = document.querySelector("#resultado");
let Verificar = document.querySelector("#btresultado");

function VerificarIouP(){
    let num = Number(ipTexto.value);
    let verf = ""
    if (num % 2 === 0 ){
        verf= "Este número é par"

    } else {
        verf= "Este número é ímpar"
    }
    Resultado.textContent = String(verf)
 
}
Verificar.onclick=function(){
    VerificarIouP()
}
