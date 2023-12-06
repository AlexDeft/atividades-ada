export class Produtos {
    #id
    constructor(id, nome, preco) {
      this.#id = id;
      this.nome = nome;
      this.preco = preco;
    }
    get id() {
      return this.#id;
    }
  
    set id(id) {
      this.#id = id;
    }
  }