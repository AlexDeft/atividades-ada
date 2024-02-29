import { noticiasConstants } from "../../constants/noticiasConstants";
import Manchete from "../manchete/Manchete";

const ListaManchete = () => {
    const naoHaNoticias = <span>Não há notícias</span>;

    return (
        <div>
            {noticiasConstants.length > 0 ? noticiasConstants.map((noticia) => {
                return <Manchete titulo={noticia.titulo} subtitulo={noticia.subtitulo} imagem={noticia.imagem} />;
            }) : naoHaNoticias}
        </div>
    );
}

export default ListaManchete;
