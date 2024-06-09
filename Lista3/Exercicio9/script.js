let ipTexto = document.querySelector("#ipAlunos");
let ipTexto2 = document.querySelector("#ipSalas");
let Resultado = document.querySelector("#resultado");
let Resultado2 = document.querySelector("#resultado2");
let Calcular = document.querySelector("#btresultado");

function CalcularT(){
    let numA = Number(ipTexto.value);
    let numT = Number(ipTexto2.value);
    let Alunos = Math.floor(numA/numT)
    Resultado.textContent = "alunos por turma " +  String(Alunos);
    let semTurma = numA % numT 
    Resultado2.textContent = "alunos sem turma " +  String(semTurma);
    


}
Calcular.onclick=function(){
    CalcularT()
}