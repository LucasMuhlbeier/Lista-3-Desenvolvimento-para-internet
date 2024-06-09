let ipTexto = document.querySelector("#nome");
let ipTexto2 = document.querySelector("#idade");
let ipTexto3 = document.querySelector("#nome2");
let ipTexto4 = document.querySelector("#idade2");
let ipTexto5 = document.querySelector("#nome3");
let ipTexto6 = document.querySelector("#idade3");
let Resultado = document.querySelector("#resultado");
let Resultado2 = document.querySelector("#resultado2");
let Resultado3 = document.querySelector("#resultado3");
let Calcular = document.querySelector("#btresultado");

function CompararPessoas() {
    let nome = ipTexto.value;
    let idade = Number(ipTexto2.value);
    let nome2 = ipTexto3.value;
    let idade2 = Number(ipTexto4.value);
    let nome3 = ipTexto5.value;
    let idade3 = Number(ipTexto6.value);
    let anoAtual = new Date().getFullYear();

    // Ordenando as idades em ordem crescente
    let idades = [idade, idade2, idade3];
    idades.sort((a, b) => a - b);

    // Encontrando os nomes correspondentes às idades ordenadas
    let pessoas = [];
    for (let i = 0; i < idades.length; i++) {
        if (idade === idades[i]) pessoas[i] = nome;
        else if (idade2 === idades[i]) pessoas[i] = nome2;
        else pessoas[i] = nome3;
    }

    // Exibindo os resultados
    Resultado.textContent = "Pessoa mais nova : " + pessoas[2] + " - " + (anoAtual - idades[2]) + " anos";
    Resultado2.textContent = "Segunda pessoa mais velha: " + pessoas[1] + " - " + (anoAtual - idades[1]) + " anos";
    Resultado3.textContent = "Pessoa mais velha: " + pessoas[0] + " - " + (anoAtual - idades[0]) + " anos";
}


Calcular.onclick = function() {
    CompararPessoas();
};

    

