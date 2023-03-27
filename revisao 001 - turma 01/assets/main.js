var inp = document.querySelector("main > div > input")
var bt = document.querySelector("main > div > button")
var txt = document.querySelector("div.texto")

function mudarTexto() {
  txt.innerText = inp.value.toUpperCase() + "!!!"
}


bt.onclick = mudarTexto
inp.onkeyup = mudarTexto