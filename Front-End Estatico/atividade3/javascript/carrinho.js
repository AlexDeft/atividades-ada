
import { Estoque } from "./Estoque.js"
export class Carrinho {
    itens = []

    adicionarItem(produtoId, preco, quantidade) {
        const produto = Estoque.produtos.find(item => item.id === produtoId)
    
        if (produto) {
            this.itens.push({ produto,preco, quantidade })
        } else {
            console.log("Produto não encontrado")
        }
    }
    //Remove pelo ID
    removerItem(produtoId) {
        this.itens = this.itens.filter(item => item.produto.id !== produtoId)
    }

    calcularTotal() {
        let total = 0

        for (const item of this.itens) {
            total += item.preco * item.quantidade
        }

        return total
    }
}