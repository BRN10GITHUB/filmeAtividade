import Filme from "../filmes/filmes"
import Transformers from '../imagem/Transformers2022.jpg'
import Fera from '../imagem/A fera.png'
import Freira from '../imagem/TheNum2_2023.jpg'
import Dois from '../imagem/DoisIrmãos2020.jpg'
import Liberdade from '../imagem/SomDaLiberdade.jpg'
import Rei from '../imagem/FilhaDoRei2023.jpg'
import EquipeFilme from "../EquipeFilme/EquipeFilme"

import Sintonia from '../imagem/Sintonia.webp'
import Marvel from '../imagem/Marvel_filme.jpg'
import Musica from '../imagem/Musical-serie.webp'
import Jury from '../imagem/jury-duty-poster.webp'
import You from '../imagem/You_serie.jpg'
import Braves from '../imagem/TheBraveOnes_series.jpg'


function Main(){
    const filme = [
        {nome:"Transformers", ano:"2023", img:Transformers, dest:"Destacado"},
        {nome:"A fera", ano:"2023", img:Fera},
        {nome:"The Nun2", ano:"2023", img:Freira},
        {nome:"Dois Irmãos", ano:"2020", img:Dois},
        {nome:"Som da Liberdadde", ano:"2023", img:Liberdade},
        {nome:"Filha do Rei", ano:"2022", img:Rei},
    ]
    const serie = [
        {nome:"Sintonia", ano:"2019", img:Sintonia},
        {nome:"Agents of S.H.E.L.D", ano:"2023", img:Marvel},
        {nome:"School Musical", ano:"2019", img:Musica},
        {nome:"Jury Duty Poster", ano:"2022", img:Jury},
        {nome:"You", ano:"2019", img:You},
        {nome:"The Brave Ones", ano:"2023", img:Braves},

    ]
    return(
        <main>
            <EquipeFilme lista={filme} titulo="Destaques" titulo2={"Netflix"}/>
            <EquipeFilme lista={serie} titulo="Séries"/>
        </main>

    )
}

export default Main;