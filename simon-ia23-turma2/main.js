let genius = document.querySelector("div.genius")
let bts = genius.querySelectorAll("*:not(.pontuacao)")
let pontuacao = document.querySelector("div.genius > .pontuacao")
let sequencia = [0, 1, 2, 3]

let velocidade = 500

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

let currentIndex = 0

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

let estado = "apresentando sequencia"

async function iniciar() {
  if (estado == "apresentando sequencia") {
    estado = "..."
    pontuacao.innerHTML = "..."
    await apresentarSequencia()
    estado = "jogando"
    pontuacao.innerHTML = "Jogue"
    return
  }
}

pontuacao.addEventListener("click", iniciar)