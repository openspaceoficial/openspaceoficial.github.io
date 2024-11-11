// Typing
const typing = document.querySelector('[data-js="typing"]')

const mensagem = ['Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.']

let mensagemIndex = 0
let caractereIndex = 0
let mensagemAtual = ''
let caractereAtual = ''


const type = () =>{
  mensagemAtual = mensagem[0]
  caractereAtual = mensagemAtual.slice(0, caractereIndex++)

  typing.textContent = caractereAtual
}

setInterval(type, 30)