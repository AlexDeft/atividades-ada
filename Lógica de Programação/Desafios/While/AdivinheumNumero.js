// Crie um programa que gere um número aleatório entre 1 e 100. Em seguida, peça ao usuário para adivinhar o número. Use um loop while para continuar pedindo ao usuário que adivinhe até que ele acerte o número. Forneça dicas informando se o número é maior ou menor.
const random = parseInt(Math.random() * 101 - 1) + 1;

while (true) {
    
    const AdivinheumNumero = Number(prompt('Digite um numero de 1 a 100'))
    alert(random)
    
    if (random === AdivinheumNumero) {
        alert(`voce acertou, o numero era ${random}`)
        break;
    }
    else if(random > AdivinheumNumero){
       alert(`Digite um numero maior do que ${AdivinheumNumero}`)
    }
    else if(random < AdivinheumNumero){
        alert(`Digite um numero menor do que ${AdivinheumNumero}`)
    }
    
    if(AdivinheumNumero === 0) {
        break;
      }
  
}

