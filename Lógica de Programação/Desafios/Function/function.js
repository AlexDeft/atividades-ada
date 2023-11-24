//01 - Crie uma função que recebe dois números e um operador (+, -, *, /) como parâmetros e retorna o resultado da operação.

// function operacao(num1, num2, operador) {
//     if (operador === '+') {
//         return num1 + num2
//     } else if (operador === '-') {
//         return num1 - num2
//     } else if (operador === '*') {
//         return num1 * num2
//     } else if (operador === '/') {
//         return num1 / num2
//     }
// }

// resultadoSoma = operacao(11, 11, '+')
// console.log("soma:", resultadoSoma)

// resultadoSubtracao = operacao(11, 11, '-')
// console.log("subtraçao", resultadoSubtracao)

// resultadoMultiplicacao = operacao(11, 11, '*')
// console.log("multiplicaçao", resultadoMultiplicacao)

// resultadoDivisao = operacao(11, 11, '/')
// console.log("divisao", resultadoDivisao)

//##################################################################################################################################################################################################################################################################################################################################################################

//02 - Detalhe da escada: Esta é uma escada de tamanho n=4

// let lista = [1, 3, 5, 6, 9]

// let = listaOrganizada = lista.sort(function (a, b) {
//     return a - b
// })
// let minimo = 0
// let maximo = 0

// for (let i = 0; i < listaOrganizada.length - 1; i++) {
//     minimo += listaOrganizada[i]

// }

// for (let i = 1; i < listaOrganizada.length; i++) {
//     maximo += listaOrganizada[i]
// }

//     console.log([minimo, maximo])

//     console.log(lista)


// function escada(numero) {
//   for (let i = 1; i <= numero; i++) {
//     let espaco = ''
//     let bloco = ''

//     for (let espacos = 1; espacos <= numero-i; espacos++) {
//       espaco += ' '
//     }

//     for (let contHast = 1; contHast <= i; contHast++) {
//       bloco += '#'
//     }

//     console.log(espaco + bloco)
//   }
// }

// escada(6)

//##################################################################################################################################################################################################################################################################################################################################################################

//02- Crie uma aplicação que simula operações bancárias simples, como depósito, saque e consulta de saldo. Utilize funções para realizar essas operações e um loop para permitir que o usuário execute várias transações.


// let saldo = 0


// while (true) {
//   let contaBancaria = prompt("Digite 1 - Deposito, 2 - Ver Saldo, 3 - Fazer Saque")

//   switch (contaBancaria) {
//     case '1':
//       depositar()
//       break

//     case '2':
//       verSaldo()
//       break

//     case '3':
//       saque()
//       break

//     default:
//       alert("digite um dos numero de 1 a 3")
//       break
//   }

//   if (contaBancaria === '0') {
//     break
//   }


//   function depositar() {
//     let deposito = Number(prompt("Quanto deseja depositar?"));
//     saldo += deposito

//     console.log(`Você depositou: ${deposito}`)

//   }

//   function verSaldo() {
//     alert(`seu saldo é ${saldo}`)
//   }

//   function saque() {
//     let sacar = Number(prompt("Quanto quer sacar"))

//     if (sacar > saldo) {
//       alert("voce nao pode sacar")
//     }
//     else {
//       saldo -= sacar
//     }
//     alert(`seu saldo atual é ${saldo}`)


//   }
// }

//##################################################################################################################################################################################################################################################################################################################################################################

//03- Jogo da Velha: implemente o clássico jogo da velha em JavaScript. Permita que dois jogadores se alternem para fazer suas jogadas e determine o vencedor.


// let matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// let jogador = true


// while (true) {
//     const linha = Number(prompt('digite a linha'))
//     const coluna = Number(prompt('digite a coluna'))

//     const valorJogador = jogador ?'X' : 'O'

//     if (matriz[linha][coluna] !== 'X' && matriz[linha][coluna] !== 'O') {
//         if (jogador) {
//             matriz[linha][coluna] = 'X'
//         } else {
//             matriz[linha][coluna] = 'O'
//         }
//     }

//     if (
//         (matriz[0][0] === valorJogador && matriz[0][1] === valorJogador && matriz[0][2] === valorJogador) || (matriz[1][0] === valorJogador && matriz[1][1] === valorJogador && matriz[1][2] === valorJogador) || (matriz[2][0] === valorJogador && matriz[2][1] === valorJogador && matriz[2][2] === valorJogador) || (matriz[0][0] === valorJogador && matriz[1][0] === valorJogador && matriz[2][0] === valorJogador) || (matriz[0][1] === valorJogador && matriz[1][1] === valorJogador && matriz[2][1] === valorJogador) || (matriz[0][2] === valorJogador && matriz[1][2] === valorJogador && matriz[2][2] === valorJogador) || (matriz[0][0] === valorJogador && matriz[1][1] === valorJogador && matriz[2][2] === valorJogador) || (matriz[0][2] === valorJogador && matriz[1][1] === valorJogador && matriz[2][0] === valorJogador)
//     ) {
//         alert(`Jogador ${valorJogador} ganhou!`)
//         break
//     }

//     alert(
//         `${matriz[0][0]} | ${matriz[0][1]} | ${matriz[0][2]}\n` + 
//         `${matriz[1][0]} | ${matriz[1][1]} | ${matriz[1][2]}\n` +
//         `${matriz[2][0]} | ${matriz[2][1]} | ${matriz[2][2]}\n`
//     )

//     jogador = !jogador
// }

//##################################################################################################################################################################################################################################################################################################################################################################