
import './App.css'
import Contador from './components/contador/Contador'

function App() {
    return (
        <div className='App'>
            <Contador
                titulo={'Homens'}
                gramasPorPesssoa={200}
                paoDeAlhoPorPessoa={2}
                carvaoPorPessoa={2}
                salPorPessoa={200}
                refrigerantePorPessoa={2}
                aguaPorPessoa={2}

            />
            <Contador
                titulo={'Mulheres'}
                gramasPorPesssoa={100}
                paoDeAlhoPorPessoa={2}
                carvaoPorPessoa={2}
                salPorPessoa={250}
                refrigerantePorPessoa={2}
                aguaPorPessoa={2}
            />
            <Contador
            titulo={'Crianças'}
            gramasPorPesssoa={90}
            paoDeAlhoPorPessoa={3}
            carvaoPorPessoa={2}
            salPorPessoa={500}
            refrigerantePorPessoa={2}
            aguaPorPessoa={2}/>
        </div>
    )
}

export default App