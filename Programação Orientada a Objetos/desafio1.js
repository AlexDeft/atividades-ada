class MathUtils {
    static sum(n1, n2) {
        return n1 + n2
    }

    static sub(n1, n2) {
        return n1 - n2
    }

    static mul(n1, n2) {
        return n1 * n2
    }

    static div(n1, n2) {
        return n1 / n2
    }
}

console.log(MathUtils.sum(5, 5))
console.log(MathUtils.sub(5, 5))
console.log(MathUtils.mul(5, 5))
console.log(MathUtils.div(5, 5))

//###########################################################################################################################################################################

class Circulo {
   
    static calcularArea(raio) {
        return Math.PI * raio ** 2
    }
    

    static calcularCircuferencia(raio) {
        return 2 * Math.PI * raio 
    }
}

console.log(`A area do circulo é: ${Circulo.calcularArea(5)}`)
console.log(`A circuferencia do circulo é: ${Circulo.calcularCircuferencia(5)}`)
//###########################################################################################################################################################################

class Conta {
    #numeroConta
    #nomeTitular
    #saldo

    constructor(numeroConta, nomeTitular, saldo = 0) {
        this.#numeroConta = numeroConta
        this.#nomeTitular = nomeTitular
        this.#saldo = saldo
    }

    depositar(valor) {
        this.#saldo += valor
        console.log(`depósito de ${valor} realizado, novo saldo: R$${this.#saldo}`)
    }

    sacar(valor) {
        if (this.#validarSaldo(valor)) {
            this.#saldo -= valor
            console.log(`saque de ${valor} realizado. Novo saldo: R$${this.#saldo}`)
        } else {
            console.log('saque não permitido.')
        }
    }

    #validarSaldo(valor) {
        return this.#saldo >= valor
    }
}

const conta = new Conta('123', 'asd', 1000)
conta.depositar(500)
conta.sacar(2000)
conta.sacar(800)