// index.js
import { home } from './pages/home.js';
import { form } from './pages/form.js';
import { result } from './pages/result.js';
export 

// index.js
const pages = {
    home: home,
    form: form,
    result: result
}

// Navegação entre páginas
export async function Navegar(pageName) {
    // Limpa o conteúdo atual da página
    const root = document.getElementById('root')
    root.innerHTML = ''
    await new Promise(resolve => setTimeout(resolve, 500)) // Espera meio segundo para carregar a página
    // Chama a função da página correspondente para criar o novo conteúdo
    pages[pageName](Navegar)
}

// Verifica se o usuário já preencheu o formulário se sim, vai para a página de calculo, se não, vai para a página de formulário

if (localStorage.getItem('name') == null) {
    Navegar('form')
} else {
    Navegar('home')
}




// AS PARTES COMENTADAS ERAM PARA SEREM FEITAS EM POO, MAS ACABEI DESISTINDO

// import App from "./app.js"

// const root = document.querySelector("#root")
// const app = new App()
// root.appendChild(app.getElement())

// class Element {
//     #element
//     constructor(tagName, propriedades) {
//         const { ClassLists, innerHTML } = propriedades
//         this.#element = document.createElement(tagName)
        
//         ClassLists?.forEach(styleClass => {
//             this.#element.classList.add(styleClass)
//         });

//         if (innerHTML) {
//             this.#element.innerHTML = innerHTML
//         }
    
//     }
//     getElement() {
//         return this.#element
//     }
//     addChild(elementChild) {
//         this.#element.appendChild(elementChild.getElement())
//     }
// }

// export default Element

// import Element from "./element.js";
// class Header extends Element{
//     constructor(tamanho, titulo) {
//         const propriedades = {
//             innerHTML: titulo
//         }
//         super(`h${tamanho}`, propriedades)
//     }

// }

// export default Header


// AS PARTES COMENTADAS ERAM PARA SEREM FEITAS EM POO, MAS ACABEI DESISTINDO


// import Element from "./element.js"
// import Header from "./header.js"
// class App extends Element {
//     constructor() {
//         const propriedades = {
//             ClassLists: ["container"]
//         }
//         super("div", propriedades)
//         const header = new Header(1, "Churrascômetro")
//         this.addChild(header)

//         const calculator = new Element("div", { ClassLists: ["calculator"] });
//         const message = new Header(3, "Precisa de uma ajudinha com o churrasco? :) <br><br> Quantas pessoas vão participar?")
//         calculator.addChild(message)
//         this.addChild(calculator)
//     }
// }

// export default App