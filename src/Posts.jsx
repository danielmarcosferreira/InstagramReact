import Meowed from './assets/img/meowed.svg'
import Gatotelefone from './assets/img/gato-telefone.svg'
import Respondeai from './assets/img/respondeai.svg'
import Barked from './assets/img/barked.svg'
import Dog from './assets/img/dog.svg'
import Adorableanimals from './assets/img/adorable_animals.svg'

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.image} />
                {props.texto}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Fundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.image} />
                <div class="texto">
                    {props.texto}
                </div>
            </div>
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <Topo image={props} texto="meowed" />

            <div class="conteudo">
                <img src={Gatotelefone} />
            </div>

            <Fundo image={Respondeai} texto='Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>' />

        </div>
    )
}

export default function Posts() {
    return (
        <div class="posts">
            {/* <Post Topo:image={Meowed} /> djkahkjdhkjahkhdaks */}
            <Post Topo:image />
            <div class="post">
                <Topo image={Meowed} texto="meowed" />

                <div class="conteudo">
                    <img src={Gatotelefone} />
                </div>

                <Fundo image={Respondeai} texto='Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>' />

            </div>

            <div class="post">
                <Topo image={Barked} texto='barked' />

                <div class="conteudo">
                    <img src={Dog} />
                </div>

                <Fundo image={Adorableanimals} texto='Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>' />

            </div>
        </div>
    )
}