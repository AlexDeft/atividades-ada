import { createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home/Home"
import Jogos from "./pages/Jogos/Jogos"
import Cadastrar from "./pages/Cadastrar/Cadastrar"
import Login from "./pages/Login/Login"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastrar",
        element: <Cadastrar />
    },
    {
        path: "/jogos",
        element: <Jogos />
    }

])

export default router