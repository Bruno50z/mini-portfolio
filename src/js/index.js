/*
    OBJETIVO - quando clicarmos na aba temos que
    mostrar o conteudo da aba que foi clicada pelo
    usuario e esconder o conteudo da aba anterior

    - passo 1- da um jeito de pegar os elementos que
    representam as abas no HTML

    -passo 2 - dar um jeito de identificar, desmarcar
     a aba selecionada

    -passo 4- marcar a aba clicada como selecionado

    -passo 5- esconder o conteudo anterior

    -passo 6- mostrar o conteudo da aba selecionada

*/

//passo 1
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //passo 2
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
       mostrarinformacoesDaAba(aba)      
    });
});

function selecionarAba(aba){
    //passo 3
    const abaSelecionada = document.
    querySelector(".aba.selecionado");
    abaSelecionada.classList.remove
    ("selecionado");

    //passo4
    aba.classList.add("selecionado");
}

function mostrarinformacoesDaAba(aba){
     //passo5
     const informacaoselecionada = document.
     querySelector(".informacao.selecionado");
     informacaoselecionada.classList.remove
     ("selecionado");

     //passo6
      
     const idDoElementoDeInformacoesDaAba =
      `informacao-${aba.id}`      
     
     
      const informacaoASerMostrada = document.getElementById(
         idDoElementoDeInformacoesDaAba)
         informacaoASerMostrada.classList.add(
         "selecionado")
}

