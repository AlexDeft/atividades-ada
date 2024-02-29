import { usuarioType } from "../../types/usuario.type";
import { useState } from "react";

const Cadastrar = () => {
    const cadastrarUsuario = (usuario: usuarioType) => {
        const listaAtual = localStorage.getItem('listaUsuarios')
        let listaUsuarios = []
        if (listaAtual) {
            listaUsuarios = JSON.parse(listaAtual)
        }
        localStorage.setItem('listaUsuarios', JSON.stringify([...listaUsuarios, usuario]))
    }
    const submitHandler = (e: any) => {
        e.preventDefault()
        const novoUsuario: usuarioType = {
            nome: e.target[0].value,
            email: e.target[1].value,
            senha: e.target[2].value,
            dataNascimento: e.target[3].value,
            estado: e.target[4].value,
            pais: e.target[5].value 
        }
        cadastrarUsuario(novoUsuario)
    }

    return (
        <div>
            <h1>Cadastrar</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="date" placeholder="Data de Nascimento" />
                <input type="text" placeholder="Estado" />
                <input type="text" placeholder="País" />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
export default Cadastrar;