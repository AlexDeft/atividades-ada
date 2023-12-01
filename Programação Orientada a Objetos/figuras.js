class Triangulo {
    base
    altura
    cor
    a
    constructor(base, altura, cor) {
        this.base = base
        this.altura = altura
        this.cor = cor
    }
    calcularArea() {
        return this.base * this.altura / 2
    }

    imprimir() {
        return `<div style='width:${this.base}px; height:${this.altura}px;
                  background-color:${this.cor}'></div>`
    }

}
const tr = new Triangulo(50, 100, "red")
console.log(tr)
console.log(tr.calcularArea())


class Circulo {
    pi
    raio
    cor
    constructor(pi, raio, cor) {
        this.pi = pi || Math.PI
        this.raio = raio
        this.cor = cor
    }
    calcularArea() {
        return this.pi * this.raio ** 2
    }

}
const cir = new Circulo("", 2, "blue")
console.log(cir)
console.log(cir.calcularArea())


