"use strict";

const botaoMenu = document.querySelector("#botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");
const iconeMenu = document.querySelector(".icone-menu");

if (botaoMenu && menuPrincipal && iconeMenu) {
  document.documentElement.classList.remove("sem-js");

  botaoMenu.addEventListener("click", () => {
    const menuEstaAberto = menuPrincipal.classList.toggle("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", String(menuEstaAberto));
    iconeMenu.textContent = menuEstaAberto ? "✕" : "☰";
  });
}

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

const formulario = document.querySelector("#formulario-contato");

if (formulario) {
  const nome = formulario.querySelector("#nome");
  const email = formulario.querySelector("#email");
  const assunto = formulario.querySelector("#assunto");
  const mensagem = formulario.querySelector("#mensagem");
  const erroNome = formulario.querySelector("#erro-nome");
  const erroEmail = formulario.querySelector("#erro-email");
  const erroAssunto = formulario.querySelector("#erro-assunto");
  const erroMensagem = formulario.querySelector("#erro-mensagem");
  const mensagemStatus = formulario.querySelector("#mensagem-status");
  const botaoValidar = formulario.querySelector("#botao-validar");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroAssunto.textContent = "";
    erroMensagem.textContent = "";
    mensagemStatus.textContent = "";
    mensagemStatus.className = "mensagem-status";

    nome.classList.remove("campo-invalido");
    email.classList.remove("campo-invalido");
    assunto.classList.remove("campo-invalido");
    mensagem.classList.remove("campo-invalido");
    nome.setAttribute("aria-invalid", "false");
    email.setAttribute("aria-invalid", "false");
    assunto.setAttribute("aria-invalid", "false");
    mensagem.setAttribute("aria-invalid", "false");

    let formularioValido = true;
    let primeiroCampoInvalido = null;

    if (nome.value.trim().length < 3) {
      erroNome.textContent = "Digite um nome com pelo menos 3 caracteres.";
      nome.classList.add("campo-invalido");
      nome.setAttribute("aria-invalid", "true");
      primeiroCampoInvalido = nome;
      formularioValido = false;
    }

    const emailDigitado = email.value.trim();

    if (!emailDigitado.includes("@") || !emailDigitado.includes(".")) {
      erroEmail.textContent = "Digite um e-mail com arroba e ponto.";
      email.classList.add("campo-invalido");
      email.setAttribute("aria-invalid", "true");
      if (!primeiroCampoInvalido) {
        primeiroCampoInvalido = email;
      }
      formularioValido = false;
    }

    if (assunto.value === "") {
      erroAssunto.textContent = "Selecione um assunto.";
      assunto.classList.add("campo-invalido");
      assunto.setAttribute("aria-invalid", "true");
      if (!primeiroCampoInvalido) {
        primeiroCampoInvalido = assunto;
      }
      formularioValido = false;
    }

    if (mensagem.value.trim().length < 10) {
      erroMensagem.textContent = "Escreva uma mensagem com pelo menos 10 caracteres.";
      mensagem.classList.add("campo-invalido");
      mensagem.setAttribute("aria-invalid", "true");
      if (!primeiroCampoInvalido) {
        primeiroCampoInvalido = mensagem;
      }
      formularioValido = false;
    }

    if (formularioValido) {
      mensagemStatus.textContent = "Dados validados. A sugestão está pronta para envio. Nenhum dado foi enviado.";
      mensagemStatus.className = "mensagem-status sucesso";
      formulario.reset();
      nome.focus();
    } else {
      mensagemStatus.textContent = "Revise os campos indicados antes de continuar.";
      mensagemStatus.className = "mensagem-status erro";
      primeiroCampoInvalido.focus();
    }
  });

  botaoValidar.disabled = false;
}
