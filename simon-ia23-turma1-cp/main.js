let bts = document.querySelectorAll("div.genius > *:not(.pontuacao)")
let sequencia = [3, 0, 1, 2, 3]

let velocidade = 1000

function ligar(item) {
  bts[item].classList.add("on")
}

function desligar(item) {
  bts[item].classList.remove("on")
}

function piscar(item) {
  ligar(item)
  setTimeout(function () { desligar(item) }, velocidade)
}

function apresentarSequencia() {
  let index = 0
  let interval = null

  function piscarCorAtual() {
    if (index >= sequencia.length) {
      clearInterval(interval)
      return
    }
    let atual = sequencia[index++]
    piscar(atual)
  }

  interval = setInterval(piscarCorAtual, velocidade + 300)
}