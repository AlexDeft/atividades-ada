import { LoginType } from "../../types/login.type";

const Login = () => {
    const realizarLogin = (login: LoginType) => {
        // const listaDeUsuariosCadastrado = localStorage.getItem('listaUsuarios')

        // const usuarioExiste = listaDeUsuariosCadastrado.find((usuario: LoginType) => usuario.email === login.email && usuario.senha === login.senha)

    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log(e)
        const loginUsuario: LoginType = {
            email: e.target[0].value,
            senha: e.target[1].value
        }
        realizarLogin(loginUsuario)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}
export default Login;