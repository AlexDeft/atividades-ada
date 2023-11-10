// 01 - Verificação de Números Pares e Ímpares

// Escreva um programa que recebe um número como entrada e verifica se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for ímpar.

const numero = Number(prompt("Insira um numero"))

if (numero % 2 == 0) {
    console.log("O numero é par")
} else {
    console.log("O numero é impar")
}

// ternario
numero % 2 == 0 ? console.log("É par") : console.log("Não é par")

//##############################################################################################################################################################################################################################################################################################################################################################//

// 02 - Verificação de Nota

// Crie um programa que recebe uma nota como entrada e atribui uma mensagem com base na nota. Use as seguintes regras:

// Se a nota for maior ou igual a 90, imprima "Aprovado com mérito".
// Se a nota for maior ou igual a 70 e menor que 90, imprima "Aprovado".
// Se a nota for menor que 70, imprima "Reprovado".

const nota = Number(prompt("Digite sua nota"))

if (nota >= 90) {
    console.log("Aprovado com mérito")
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado")
} else if (nota < 70) {
    console.log("Reprovado")
}

//##############################################################################################################################################################################################################################################################################################################################################################//

// Determinação do Maior Número

//  Escreva um programa que receba três números como entrada e determina o maior deles. Imprima o número mais alto

numero1 = 6
numero2 = 18
numero3 = 1

if (numero1 > numero2 && numero3) {
    console.log(`${numero1} é maior que ${numero2} e ${numero3}`)
}
else if (numero2 > numero3 && numero1) {
    console.log(`${numero2} é maior que ${numero3} e ${numero1}`)
}
else if (numero3 > numero2 && numero1) {
    console.log(`${numero3} é maior que ${numero2} e ${numero1}`)
}
//Ternario
numero1 > numero2 && numero3 ? console.log(`${numero1} é maior que ${numero2} e ${numero3}`) : numero2 > numero3 && numero1 ? console.log(`${numero2} é maior que ${numero3} e ${numero1}`) : numero3 > numero2 && numero1 ? console.log(`${numero3} é maior que ${numero2} e ${numero1}`): null

//##############################################################################################################################################################################################################################################################################################################################################################//


// 04 - Verificação de Triângulo

// Crie um programa que recebe três comprimentos de lados de um triângulo como entrada e determina se eles formam um triângulo equilátero (Todos os lados são iguais), isósceles (Dois lados são iguais) ou escaleno (Se nada é igual). Imprima a classificação do triângulo.

lado1 = 123
lado2 = 123
lado3 = 123

if (lado1 === lado2 && lado2 === lado3) {
    console.log("É triangulo equilatero")
}

else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("É triangulo Isoceeles")
}

else {
    console.log("É triangulo Escaleno")
}

lado1 === lado2 && lado2 === lado3 ? console.log("É triangulo equilatero") : lado1 === lado2 || lado2 === lado3 || lado1 === lado3 ? console.log("É triangulo Isoceeles") : console.log("É triangulo Escaleno")

//##############################################################################################################################################################################################################################################################################################################################################################//
// 05 - Verificação de Ano Bissexto

// Desenvolva um programa que receba um ano como entrada e verifica se ele é bissexto ou não. Um ano bissexto é aquele que é divisível por 4, exceto por anos que são divisíveis por 100, a menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou "Não é um ano bissexto" com base na entrada. (2000, 1996)

const ano = 2000

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("Ano bissexto")
} else {
    console.log("Não é um ano bissexto")
}

//##############################################################################################################################################################################################################################################################################################################################################################//

// 06 - Verificação de Idade para Compra de Bebida Alcoólica (If e Ternário)
// Crie um programa que verifica a idade de uma pessoa e determina se ela pode comprar bebidas alcoólicas ou não. Se a pessoa tiver 18 anos ou mais, ela pode comprar bebidas alcoólicas; caso contrário, não pode.

const idade = Number(prompt("Digite sua idade"))

if (idade >= 18) {
    console.log("Pode tomar uma")
}
else {
    console.log("Não pode")
}

//Ternario
idade >= 18 ? console.log("Pode") : console.log("nao pode")

//##############################################################################################################################################################################################################################################################################################################################################################//

//SWITCH//

const numeroParouImpar = Number(prompt("Digite um numero"));

switch (numeroParouImpar % 2) {
    case 0:
        console.log("É par")
        break;
    case 1:
        console.log("É impar")
        break;
}
//##############################################################################################################################################################################################################################################################################################################################################################//

// 09 - Conversão de Notas em Conceitos

// Faça um programa que peça ao usuário para digitar uma letra e verifique se é uma vogal ou uma consoante utilizando o comando switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o programa deve exibir a mensagem "É uma vogal". Se o usuário digitar uma consoante, o programa deve exibir a mensagem "É uma consoante".
const letra = prompt("Digite uma letra")

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("é vogal")
        break;
    default:
        console.log("é consoante")
        break;
}

//##############################################################################################################################################################################################################################################################################################################################################################//


// 10 - Determinação de Estação do Ano

// Escreva um programa que recebe o nome de um mês como entrada e utiliza um switch case para determinar a estação do ano correspondente. Use a seguinte correspondência de meses:

// Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio: "Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro, Novembro: "Outono"

const mes = prompt("Digite uma mes").toLowerCase()

switch (mes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        console.log("É inverno")
        break;

    case "março":
    case "abril":
    case "maio":
        console.log("É primavera")
        break;

    case "junho":
    case "julho":
    case "agosto":
        console.log("É verão")
        break;

    case "setembro":
    case "outubro":
    case "novembro":
        console.log("É outono")
        break;
}