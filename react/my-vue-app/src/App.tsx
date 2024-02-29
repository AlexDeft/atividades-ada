
import './components/manchete/Manchete.scss'
import './components/header/Header.scss'
import './components/noticiasPrincipais/NoticiasPrincipais.scss'
import Header from './components/header/Header'
import ListaManchete from './components/listaManchete/ListaManchete'
import NoticiasPrincipais from './components/noticiasPrincipais/NoticiasPrincipais'


function App() {
  return (
    <div>
      <Header />
      <div className='Container'>
        <div>
          <NoticiasPrincipais />
        </div>
        <div>
          <ListaManchete />
        </div>
        <div>
          <NoticiasPrincipais />
        </div>
      </div>
    </div>
  )
}
export default App
 