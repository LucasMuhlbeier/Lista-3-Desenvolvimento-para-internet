let ipTexto = document.querySelector("#ipValor");
let ipTexto2 = document.querySelector("#ipMeta");
let ipTexto3 = document.querySelector("#ipMetaMin");
let Resultado = document.querySelector("#resultado");
let Resultado2 = document.querySelector("#resultado2");
let Resultado3 = document.querySelector("#resultado3");
let Calcular = document.querySelector("#btresultado");

function CalcularMetas(){
    let vendi = Number(ipTexto.value)
    let meta = Number(ipTexto2.value)
    let metamin = Number(ipTexto3.value)

    if (vendi >= meta) {
        Resultado.textContent = "Você atingiu a meta!";
        let percentualMeta = (vendi / meta) * 100;
        Resultado2.textContent = "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%";
    } else if (vendi >= metamin) {
        Resultado.textContent = "Você atingiu a meta mínima.";
        let percentualMetaMin = (vendi / metamin) * 100;
        Resultado3.textContent = "Percentual de atingimento da meta mínima: " + percentualMetaMin.toFixed(2) + "%";
    } else {
        Resultado.textContent = "Você não atingiu nenhuma das metas.";
        Resultado2.textContent = "";
        Resultado3.textContent = "";
    }
}

Calcular.onclick = function() {
    CalcularMetas();
}
