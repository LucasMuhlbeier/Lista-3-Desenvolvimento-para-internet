let ipTexto = document.querySelector("#ipvalor"); 
let ipTexto2 = document.querySelector("#ipvalor2");
let Resultado = document.querySelector("#resultado");
let Comparar =  document.querySelector("#btresultado");

function Compararn(){
    let num = Number(ipTexto.value);
    let num2 = Number(ipTexto2.value);
    let comp = "" 
    if (num>num2) {
        comp = "Primeiro número é maior que o segundo"
    } else if (num===num2){
        comp= "os números são iguais"
    } else if (num<num2){
        comp= "o primeiro numero é menor que o segundo"
    }
    Resultado.textContent = String(comp)

}
Comparar.onclick=function(){
    Compararn()
}