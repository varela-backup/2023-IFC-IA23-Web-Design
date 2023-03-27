var bt = document.querySelector("main div button")
var inp = document.querySelector("main div input")
var txt = document.querySelector("div.texto")

function mudarTexto() {
  txt.innerText = inp.value.toUpperCase() + "!!!!" 
}

bt.onclick = mudarTexto
inp.onkeyup = mudarTexto

// bt.addEventListener("click", () => txt.innerText = inp.value.toUpperCase() + "!!!!" )