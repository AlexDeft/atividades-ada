import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div>
        <h1>Home</h1>
        <Link to="/login"><button>Fazer Login</button></Link>
        <Link to="/cadastrar"><button>Sou novo aqui</button></Link>
        </div>
    )
}

export default Home