import { Produtos } from "./Produtos.js";

export class Cafe extends Produtos {

    constructor(id, nome, preco, ingredientes) {
        super(id, nome, preco)
        this.ingredientes = ingredientes
    }
}