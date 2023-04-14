import Meowed from './assets/img/meowed.svg'
import Gatotelefone from './assets/img/gato-telefone.svg'
import Respondeai from './assets/img/respondeai.svg'
import Barked from './assets/img/barked.svg'
import Dog from './assets/img/dog.svg'
import Adorableanimals from './assets/img/adorable_animals.svg'

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgIcon} />
                    {props.textIcon}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} />
            </div>

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
                    <img src={props.imgCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidasPagina}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    return (
        <div class="posts">
            <Post
                imgIcon={Meowed}
                textIcon='meowed'
                imgPost={Gatotelefone}
                imgCurtidas={Respondeai}
                curtidasPagina='respondeai'
                curtidas='101.523'
            />

            <Post
                imgIcon={Barked}
                textIcon='barked'
                imgPost={Dog}
                imgCurtidas={Adorableanimals}
                curtidasPagina='adorable_animals'
                curtidas='99.159'
            />
        </div>
    )
}