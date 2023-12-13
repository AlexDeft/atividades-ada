import { Produtos } from "./Produtos.js";

export class Estoque {
    static #produtos = []
    static ids = 0
    constructor() { }
    static cadastrarProdutos(nome, preco, qtd) {
        const p = new Produtos(
            nome,
            preco,
            qtd);
        p.id = ++Estoque.ids
        Estoque.produtos.push(p)
    }

    //Utiliza o método filter para criar um novo array de produtos, excluindo o produto com o ID fornecido
    static deletarProduto(produtoId) {
        this.#produtos = Estoque.produtos.filter(
            (produto) => produto.id != produtoId
            );
    }
    static atualizarProduto(novoProduto) {
        this.#produtos.slice(novoProduto.id-1, 1)
        this.#produtos[novoProduto.id-1] = novoProduto
    }
    static get produtos() {
        return this.#produtos
    }

    static findProduto(id){
        return this.#produtos.find(
            produto => produto.id == id
            )
    }
}
