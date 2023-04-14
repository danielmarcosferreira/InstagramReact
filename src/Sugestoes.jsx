import Badvibesmemes from './assets/img/badvibesmemes.svg'
import Chibirdart from './assets/img/chibirdart.svg'
import Razoesparaacreditar from './assets/img/razoesparaacreditar.svg'
import Adorableanimals from './assets/img/adorable_animals.svg'
import Smallcutecats from './assets/img/smallcutecats.svg'

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.ImgIcon} />
                <div class="texto">
                    <div class="nome">{props.TextoNome}</div>
                    <div class="razao">{props.TextoRazao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao ImgIcon={Badvibesmemes} TextoNome='bad.vibes.memes' TextoRazao='Segue você'/>

            <Sugestao ImgIcon={Chibirdart} TextoNome='chibirdart' TextoRazao='Segue você'/>

            <Sugestao ImgIcon={Razoesparaacreditar} TextoNome='razoesparaacreditar' TextoRazao='Novo no Instagram'/>

            <Sugestao ImgIcon={Adorableanimals} TextoNome='adorable_animals' TextoRazao='Segue você'/>

            <Sugestao ImgIcon={Smallcutecats} TextoNome='smallcutecats' TextoRazao='Segue você'/>

        </div>
    )
}