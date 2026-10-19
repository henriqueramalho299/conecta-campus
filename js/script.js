"use strict";

const botaoOrientacao = document.querySelector("#botao-orientacao");
const painelOrientacao = document.querySelector("#painel-orientacao");

if (botaoOrientacao && painelOrientacao) {
  botaoOrientacao.addEventListener("click", () => {
    const estavaOculto = painelOrientacao.hidden;

    painelOrientacao.hidden = !estavaOculto;
    botaoOrientacao.setAttribute("aria-expanded", String(estavaOculto));
    botaoOrientacao.textContent = estavaOculto
      ? "Ocultar orientação"
      : "Mostrar orientação";
  });
}

const anoAtual = document.querySelector("[data-ano-atual]");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
