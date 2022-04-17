// todas as variaveis utilizadas

const input = document.querySelector("textarea");
const saida = document.querySelector(".resposta");
const cript = document.querySelector(".button1");
const descript = document.querySelector(".button2");
const copiar = document.querySelector(".conteudo-copiar");
const copiado = document.querySelector(".texto-copiado");
let textCript;
let textDescript;

// função que é ativada ao clicar no botão de criptografar, e faz a encriptação
function criptografar() {
  if (input.value != "") {
    textCript = input.value.replace(/e/g, "enter");
    textCript = textCript.replace(/i/g, "imes");
    textCript = textCript.replace(/a/g, "ai");
    textCript = textCript.replace(/o/g, "ober");
    textCript = textCript.replace(/u/g, "ufat");

    saida.textContent = textCript;
    copiar.classList.add("show");
    input.value = "";
  }
}

// função que é ativada ao clicar no botão de descriptografar, e faz a deseencriptação
function descriptografar() {
  if (input.value != "") {
    textCript = input.value.replace(/enter/g, "e");
    textCript = textCript.replace(/imes/g, "i");
    textCript = textCript.replace(/ai/g, "a");
    textCript = textCript.replace(/ober/g, "o");
    textCript = textCript.replace(/ufat/g, "u");

    saida.textContent = textCript;
    copiar.classList.add("show");
    input.value = "";
  }
}

// função ativada ao clicar no botão de copiar, e copia o texto para a area de transferencia (ctrl + C)
function copiarTexto() {
  navigator.clipboard.writeText(saida.textContent);
  copiado.classList.add("show");
  setTimeout("removerBotao()", 1000);
}

// função que faz o popup "texto copiado" sumir depois de 1 segundo
function removerBotao() {
  copiado.classList.remove("show");
}

// eventos de click dos botões
cript.addEventListener("click", criptografar);

descript.addEventListener("click", descriptografar);

copiar.addEventListener("click", copiarTexto);
