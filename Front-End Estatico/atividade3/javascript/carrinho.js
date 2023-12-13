import { Estoque } from "./Estoque.js"
export class Carrinho {

    produtos = []
    constructor(nomeCliente) {
        this.nomeCliente = nomeCliente
    }

    adicionarItem(id, quantidade) {
        let novoProduto = Estoque.findProduto(id)

        if (novoProduto) {
            const produtoEstoque = Object.assign({}, novoProduto)
            produtoEstoque.id = id
            produtoEstoque.quantidade = produtoEstoque.quantidade - quantidade
            Estoque.atualizarProduto(produtoEstoque)
            novoProduto.quantidade = quantidade
            this.produtos.push(novoProduto)
        } else {
            console.log("Produto não encontrado")
        }


    }

    removerItem(id) {
        this.produtos = this.produtos.filter(item => item.id !== id)
    }

    calcularTotal() {
        let total = 0

        for (const item of this.produtos) {
            total += item.preco * item.quantidade
        }

        return total
    }

    
}

Carrinho.prototype.exibirProdutos = function () {
    console.log(`Produtos no Carrinho do ${this.nomeCliente}:`)
    this.produtos.forEach(produto => {
        console.log(`- ${produto.nome} (Quantidade: ${produto.quantidade})`)
    })
}