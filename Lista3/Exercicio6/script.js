let ipTexto = document.querySelector("#ipnota");
let Resultado = document.querySelector("#resultado");
let Calcular = document.querySelector("#btresultado");

function Calcularmedia(){
    let valorM = Number(ipTexto.value)
    let mEDIA = "";
        if (valorM>=6.0) {
         mEDIA= "APROVADO!!"}
        else if (valorM<6.0 && valorM>=4.0) {
            mEDIA= "Fazer prova substitutiva"}
            else if (valorM<4.0)
                mEDIA= "Reprovado!!"





    Resultado.textContent = (mEDIA)

}
Calcular.onclick=function(){
    Calcularmedia()
}

