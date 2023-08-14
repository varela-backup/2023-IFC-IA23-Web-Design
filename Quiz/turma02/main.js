const elQuiz = document.querySelector(".quiz")
const elPergunta = elQuiz.querySelector(".pergunta")
const elAlternativas = elQuiz.querySelector(".alternativas")

async function main() {
  const request = await fetch("quiz.json")
  const quiz = await request.json()

  let numeroDaPergunta = 0

  function carregarPergunta(nPergunta) {
    elPergunta.innerHTML = quiz[nPergunta].pergunta
    elAlternativas.innerHTML = ""
    
    // for (let i = 0; i < 9; i++) {
    //   elRespostas.innerHTML += `<button>${quiz[nPergunta].alternativas[i]}</button>`
    // }

    quiz[nPergunta]
      .alternativas
      .forEach(alt => elAlternativas.innerHTML += `<button>${alt}</button>`)
  }

  elAlternativas.addEventListener("click", ev => {
    const alternativaClicada = ev.target;
    const arrayAlternativas = [...elAlternativas.children]
    const numeroDaAlternativaClicada = arrayAlternativas.indexOf(alternativaClicada)
    if (numeroDaAlternativaClicada == quiz[numeroDaPergunta].resposta) {
      carregarPergunta(++numeroDaPergunta)
      return
    }
    console.log("EROooooOOOoOOooWWWWW");
  })

  carregarPergunta(0)
}

main()