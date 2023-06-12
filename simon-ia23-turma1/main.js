let bts = document.querySelectorAll("div.genius > *:not(.pontuacao)")
let ordem = [0, 0, 1, 2, 1, 0, 1, 2]

function ligar(item) {
  bts[item].classList.add("on")
}

function desligar(item) {
  bts[item].classList.remove("on")
}

function piscar(item) {
  ligar(item)
  setTimeout(function () { desligar(item) }, 1000)
}