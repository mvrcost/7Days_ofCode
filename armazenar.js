var name = prompt('Qual seu nome?')
var age = prompt('Quantos anos você tem?')
var language = prompt(' Qual linguagem de programação você está estudando?')

alert(` Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`)

var question = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (question == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else{
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}