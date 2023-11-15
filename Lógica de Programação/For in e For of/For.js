//01 - Utilizando um loop for, calcule a soma dos números de 1 a 10 e imprima o resultado. (1+2=3+3=6+4=10+5=15)

// soma = 0
// for (let i = 0; i < 11; i++) {
//     soma += i
//     console.log(soma)
// }
//################################################################################################################################//

//03- Crie um array com pelo menos 5 nomes de frutas.  Utilize um loop for-of para imprimir no console cada nome de fruta.

// const frutas = ["banana", "maça,banana,banana,banana"]
// for (let nome of frutas) {
//     console.log(nome)
// }

//################################################################################################################################//

//04 - Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop for. Saida: N X 1 = 10

// soma = 6
// for (let i = 0; i < 11; i++) {
// console.log( `${soma} x ${i} = ${soma * i}`)
// }
 
//################################################################################################################################//

// 07 - Achei a logica: 1 1 2 3 5 8 13
//Agora, sua tarefa é criar um programa que recebe um número inteiro N como entrada e retorna os primeiros N termos da sequência
//Exemplo: Entrada: 6 Saída: [1 , 1, 2, 3, 5, 8]
//Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, …, 377]

// var numeros = [1, 2, 3]
// numeros.push(i)

// const numerosArray = []
// const resultado = []

// for (let i = 0; i < 6; i++) {
//   const numero = prompt("Digite")
//   numerosArray.push(numero)
// }

// for (let i = 1; i < numerosArray.length; i++) {
//   const soma = numerosArray[i] + numerosArray[i - 1]
//   resultado.push(soma)
// }

// console.log(resultado)

//################################################################################################################################//

//08 - Crie um programa que pede ao usuário para inserir uma palavra e conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for e estruturas condicionais if para realizar a contagem.
//const palavra = prompt("Digite uma palavra").toLowerCase
// vogal = 0
// for (let i = 0; i < palavra.length; i++) {
//     if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') {
//         vogal++
//     }
    
// }
// console.log(vogal)

//################################################################################################################################//

//Criar um algoritmo de ordenação de arrays;
// metodo bubble sort
//  const lista = [11, 37, 33, 121, 7, 3]


//  for (let i = 0; i < lista.length; i++) {
//    for (let a = 0; a < lista.length; a++) {
//      if (lista[a] > lista[a + 1]) {
      
//        [lista[a], lista[a + 1]] = [lista[a + 1], lista[a]]
//      }
//    }
//  }

//  console.log(lista)

//Método que faz isso (Achar o método que ordena os arrays)

// const lista = [11, 37, 33, 121, 7, 3]
// lista.sort(function (a, b) {
//   return a - b
// })
// console.log(lista)

//################################################################################################################################//

// 10 - Fazer um simulador de rolagem de dados, que receba como input N dados de 6 lados e mostre as rolagens individuais e a soma dos valores?
// const quantidadeDado= Number(prompt("Digite quantos lados tem o dado"))
// let soma = 0

// console.log("Rolagens Individuais:")

// for (let i = 1; i <= quantidadeDado; i++) {
//   const resultadoDado = parseInt(Math.random() * 6) + 1
//   soma += resultadoDado
  
//   console.log(`Dado ${i}: ${resultadoDado}`)
// }


// console.log(`Soma dos Valores: ${soma}`)
//################################################################################################################################//