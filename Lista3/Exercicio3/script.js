let ipTexto = document.querySelector("#VALOR");
let ipTexto2 = document.querySelector("#VALOR2");
let Resultado1 = document.querySelector("#Resultado");
let Resultado2 = document.querySelector("#resultado2");
let Resultado3 = document.querySelector("#resultado3");
let Resultado4= document.querySelector("#resultado4");
let Calcular = document.querySelector("#btResultado");

function Fazercontas(){
    let num = Number(ipTexto.value);
    let num1 = Number(ipTexto2.value);
    let soma = num + num1 ;
    Resultado1.textContent = " soma : " + String(soma);
    let menos = num - num1;
    Resultado2.textContent = "subtracao  :" + String(menos)
    let div = num/num1;
    Resultado3.textContent =   "divisao : " + String(div);
    let multi = num * num1;
    Resultado4.textContent ="multiplicacao:  " + String(multi);
   
}
Calcular.onclick=function(){
    Fazercontas();
}