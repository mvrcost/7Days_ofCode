var num = Math.round(Math.random() * 10)
var guess = prompt('Tente descobrir um número de 1-10')

if (guess==num){
    alert('Parabéns, você acertou')
} else{
    for (let i = 0; i<2; i++){
        var segundaChance = prompt('Digite outro número')
        if (segundaChance == num){
            alert('Parabéns, você acertou')
            break
        } 
        else if (i == 1){
            alert(`Você não acertou, o número era ${num}`)
        }
        console.log(i)
    }
}