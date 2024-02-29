import { useState } from "react"
import "./Contador.scss"



type ContadorProps = {
    titulo: string
    gramasPorPesssoa: number
    paoDeAlhoPorPessoa: number
    carvaoPorPessoa: number
    salPorPessoa: number
    refrigerantePorPessoa: number
    aguaPorPessoa: number
}


const Contador = (props: ContadorProps) => {
    const { titulo, gramasPorPesssoa, paoDeAlhoPorPessoa, carvaoPorPessoa, salPorPessoa, refrigerantePorPessoa, aguaPorPessoa } = props

    // let numero = 0
    const [pessoas, setPessoas] = useState(0)

    const incrementarPessoa = () => setPessoas(prev => prev + 1)
    const decrementarPessoa = () => { pessoas > 0 ? setPessoas(prev => prev - 1) : setPessoas(0)}
    const resetarCarne = (novoNumero:number) => setPessoas(novoNumero)
    return (
        <div className="Contador">
            <span>{titulo} : { pessoas}</span>
            <span className="Contador__valor"> {(pessoas*gramasPorPesssoa)/1000} KG</span>
            <span className="Contador__valor"> {pessoas * paoDeAlhoPorPessoa} U</span>
            <span className="Contador__valor"> {(pessoas * carvaoPorPessoa) / 1000} KG</span>
            <span className="Contador__valor"> {(pessoas * salPorPessoa) / 1000} KG</span>
            <span className="Contador__valor"> {(pessoas * refrigerantePorPessoa) / 1000} KG</span>
            <span className="Contador__valor"> {(pessoas * aguaPorPessoa) / 1000} KG</span>
            
            <div className="Contador__acoes">
                <button className="Contador__botao" type="button" onClick={() => incrementarPessoa()}>Incrementar</button>
                <button className="Contador__botao" type="button" onClick={() => decrementarPessoa()} disabled ={pessoas === 0 } >Decrementar</button>
            </div>
            <div>
                <button className="Contador__botao" type="button" onClick={() => resetarCarne(0)}>Resetar NUMERO</button>
            </div>
        </div>
    )
}
export default Contador