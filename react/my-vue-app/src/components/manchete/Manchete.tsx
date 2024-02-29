import "./Manchete.scss";

type MancheteProps = {
    titulo: string;
    subtitulo: string;
    imagem: string;
}

const Manchete = (props: MancheteProps) => {
    return (

        <section className="Manchete">
            <div className="Manchete__descricao">
                <h2 className="Manchete__titulo" >{props.titulo}</h2>
                <span className="Manchete__subtitulo">{props.subtitulo}</span>
            </div>
                <img className="Manchete__imagem" src={props.imagem} alt={props.imagem} />
        </section>
        

    )
}

export default Manchete;