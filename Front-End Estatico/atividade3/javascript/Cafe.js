import { Produtos } from "./Produtos.js";

export class Cafe extends Produtos {

    constructor(id, nome, preco,quantidade, ingredientes) {
        super(id, nome, preco,quantidade)
        this.ingredientes = ingredientes
    }
}