let genius = document.querySelector("div.genius")
let bts = genius.querySelectorAll("*:not(.pontuacao)")
let pontuacao = genius.querySelector(".pontuacao")
let sequencia = [rng(), rng()]
let currentIndex = 0
let estado = "apresentando sequencia"
let velocidade = 500

function rng() {
  return Math.floor(Math.random() * 4)
}

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

  return new Promise((resolve, reject) => {
    function piscarCorAtual() {
      if (index >= sequencia.length) {
        clearInterval(interval)
        resolve()
        return
      }
      let atual = sequencia[index++]
      piscar(atual)
    }
    interval = setInterval(piscarCorAtual, velocidade + 300)
  })
}

genius.addEventListener("click", (ev) => {
  if (estado != "jogando")
    return

  const buttonIndex = [...bts].indexOf(ev.target)

  if (buttonIndex < 0)
    return

  if (buttonIndex != sequencia[currentIndex++]) {
    estado = "derrota"
    pontuacao.innerHTML = "PERDEU!"
    return
  }

  if (currentIndex == sequencia.length) {
    estado = "apresentando sequencia"
    currentIndex = 0
    iniciar()
    return
  }
})

async function iniciar() {
  sequencia.push(rng())
  if (estado == "apresentando sequencia") {
    estado = "..."
    pontuacao.innerHTML = "..."
    await apresentarSequencia()
    estado = "jogando"
    pontuacao.innerHTML = "Jogue"
  }
}

pontuacao.addEventListener("click", iniciar)