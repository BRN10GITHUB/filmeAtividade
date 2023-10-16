import Filme from "../filmes/filmes";
import './Filme.css'

function EquipeFilme({lista, titulo, titulo2, dest}){
    return(
        <>
            <div className="div-neflix">
                <h1 className="titulo">{titulo}</h1>
                <h1 className="netflix">{titulo2}</h1>
            </div>
        <div className="div-filme">
            {lista.map((f) => 
                <Filme nome={f.nome} img={f.img} ano={f.ano} dest={f.dest}/>
            )}
        </div>
        </>
    )
}

export default EquipeFilme;