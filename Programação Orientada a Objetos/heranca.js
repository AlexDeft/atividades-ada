//Desafio 04
//Recriar as classes de figuras geométricas utilizando herança e polimorfismo.

class FormasGeometricas {
    constructor(cor) {
        this.cor = cor
    }
}

class FigurasComArestas extends FormasGeometricas {
    constructor(cor, base, altura) {
        super(cor)
        this.base = base
        this.altura = altura
    }

    calcularArea() {

    }
}

class Quadrado extends FigurasComArestas {
    constructor(cor, lado) {
        super(cor, lado, lado)
        this.lados = 4
    }

    calcularArea() {
        return this.base * this.altura
    }
}

const q1 = new Quadrado("red", 15)
console.log(q1)
console.log(q1.calcularArea())

class Triangulo extends FigurasComArestas {
    constructor(cor, base, altura) {
        super(cor, base, altura)
        this.lados = 3
    }

    calcularArea() {
        return (this.base * this.altura) / 2
    }
}

const t1 = new Triangulo("red", 5, 5)
console.log(t1)
console.log(t1.calcularArea())

class FigurasCilindricas extends FormasGeometricas {
    constructor(cor, raio) {
        super(cor)
        this.raio = raio
    }
}

class Circulo extends FigurasCilindricas {
    constructor(cor, raio) {
        super(cor, raio)
    }

    calcularArea() {
        return Math.PI * this.raio ** 2
    }
}

const c1 = new Circulo("red", 10)
console.log(c1)
console.log(c1.calcularArea())

//#########################################################################################################################################

class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome
        this.idade = idade
        this.especie = especie
    }
    imprimirDados() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Especie: ${this.especie}`
    }

    emitirSom() {
        console.log("sim")
    }
}

class Gato extends Animal {
    constructor(nome, idade, especie, cor) {
        super(nome, idade, especie)
        this.cor = cor
    }

    imprimirDados() {
        return super.imprimirDados() + `, Cor: ${this.cor}`
    }

    emitirSom() {
        console.log("Au Au")
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, especie, tamanho) {
        super(nome, idade, especie)
        this.tamanho = tamanho
    }

    imprimirDados() {
        return super.imprimirDados() + `, Cor: ${this.cor}`
    }

    emitirSom() {
        console.log("Miau")
    }
}

const cachorro1 = new Cachorro("fabio", 12, "caramelo", "medio")
const gato1 = new Gato("Marcelo", 12, "Gato", "Laranja")


console.log(cachorro1.imprimirDados())
console.log(cachorro1.emitirSom())
console.log(gato1.imprimirDados())
console.log(gato1.emitirSom())



