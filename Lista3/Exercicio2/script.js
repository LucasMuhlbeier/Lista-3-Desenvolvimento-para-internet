let ipTexto = document.querySelector("#ipPessoa");
let Resultado = document.querySelector("#Resultado");
let Resultado2 = document.querySelector("#Resultado2");
let Calcular = document.querySelector("#btResultado");

function CalcularIngred(){
    let numPessoas = Number(ipTexto.value);
    let soma = numPessoas*2;
    Resultado.textContent = "Voce vai precisar de "  + String(soma)  + " ovos";
    let queijo = numPessoas*50
    Resultado2.textContent = "Voce vai precisar de " + String(queijo) + "g de queijo ";
} 


 Calcular.onclick=function(){
    CalcularIngred()
}