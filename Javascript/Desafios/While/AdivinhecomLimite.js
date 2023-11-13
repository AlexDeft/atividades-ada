// Modifique o jogo de adivinhação do Exercício 2 para limitar o número de tentativas. Se o usuário não adivinhar o número dentro de um determinado número de tentativas (por exemplo, 5 tentativas), o programa deve encerrar e informar o número correto.

const random = parseInt(Math.random() * 101 - 1) + 1;
let tentativas = 0
while (tentativas < 5) {

    const AdivinheumNumero = Number(prompt('Digite um numero de 1 a 100'))
    alert(random)

    if (random === AdivinheumNumero) {
        alert(`voce acertou, o numero era ${random}`)
        break;
    }
    else if (random > AdivinheumNumero) {
        alert(`Digite um numero maior do que ${AdivinheumNumero}`)
    }
    else if (random < AdivinheumNumero) {
        alert(`Digite um numero menor do que ${AdivinheumNumero}`)
    }

    if (AdivinheumNumero === 0) {
        break;
    }

    tentativas++
    tentativas === 5 ? alert(`Voce atingiu o numero maximo de tentativas, o numero correto era ${random}`) :null 
  
}