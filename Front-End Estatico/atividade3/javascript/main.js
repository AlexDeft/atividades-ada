import { Cafe } from "./Cafe.js";
import { Estoque } from "./Estoque.js";
import { Produtos } from "./Produtos.js";
import { Carrinho } from "./carrinho.js";

console.log(new Cafe(1, "Espresso", 1.99, 1, ["café, agua"]))
console.log(new Cafe(2, "Cappuccino", 2.99, 1, ["café, agua, canela"]))
Estoque.cadastrarProdutos(" ", 'produto 1', 1, 2, 11)
Estoque.cadastrarProdutos(" ", 'produto 2', 2, 3, 22)
Estoque.cadastrarProdutos(" ", 'produto 3', 3, 3, 33)

console.log(Estoque.produtos)
Estoque.deletarProduto(3)
console.log(Estoque.produtos)
Estoque.cadastrarProdutos(" ", 'produto 4', 4, 44)


const p1 = new Produtos(" ", 'produto 100', 100, 100)
p1.id = 1

Estoque.atualizarProduto(p1)

console.log(p1)




const carrinho = new Carrinho()
carrinho.adicionarItem(1, 2.00,3)
carrinho.adicionarItem(2, 2.00, 2)
carrinho.adicionarItem(2, 2.00, 2)
carrinho.removerItem(3)
console.log(carrinho.itens)

const total = carrinho.calcularTotal()
console.log("valor total do carrinho: ", total)
