const form = document.querySelector("#form-habits") // colocar numa variavel o formulario
const nlwSetup = new NLWSetup(form) //criar outra variavel para iniciar a biblioteca
const button = document.querySelector("header button") // document pega seletor header button

button.addEventListener("click", add) // adiciona uma escuta o evento de click
form.addEventListener("change", save)

function add() {
  alert("botão clicado")
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // slice significa recorte funciona com objetos string
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  alert("dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  //localStorage = é um objeto que guarda na memoria do browser informações.
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  //JSON.stringify() = transforma objeto em string.
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
