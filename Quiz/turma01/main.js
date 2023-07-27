const pergunta = document.querySelector(".pergunta")
const alternativas = document.querySelector(".alternativas")

async function main() {
  const requisicao = await fetch("questoes.json")
  const quiz = await requisicao.json()
  
  let questaoAtual = 0
  let alternativaCorretaAtual

  function carregarAlternativa(numeroDaAlternativa) {
    const alt = quiz[numeroDaAlternativa]
    alternativaCorretaAtual = alt.correta
    pergunta.innerHTML = alt.pergunta

    alternativas.innerHTML = ""
    // quiz[0].alternativas.forEach(alt => alternativas.innerHTML += `<button>${alt}</button>`);
    for (let i = 0; i <= 9; i++) {
      alternativas.innerHTML += `<button>${alt.alternativas[i]}</button>`
    }
  }

  alternativas.addEventListener("click", ev => {
    const listaDeFilhos = [...alternativas.children]
    const alternativaCorretaClicada = listaDeFilhos.indexOf(ev.target)
    if (alternativaCorretaClicada == alternativaCorretaAtual)
      return carregarAlternativa(++questaoAtual)
    alert("errou bestão!")
  })

  carregarAlternativa(questaoAtual)
}

main()