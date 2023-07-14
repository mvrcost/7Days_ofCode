var escolha = prompt('Qual área de você deseja seguir? Front-End ou Back-End')

if (escolha == 'Front-End'){
    prompt('Você deseja aprender React ou Vue?')
}
else if ( escolha== 'Back-End'){
    prompt('Você deseja aprender C# ou Java?')
} else{
    alert('Resposta inválida')
}

prompt('Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?')

var tech = prompt('Quais são as tecnologias na qual você gostaria de se especializar ou de conhecer?')
var question = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')

while (question != 'sim'){
    question = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Qual?')
}