import React from "react"
import Meowed from './assets/img/meowed.svg'
import Gatotelefone from './assets/img/gato-telefone.svg'
import Respondeai from './assets/img/respondeai.svg'
import Barked from './assets/img/barked.svg'
import Dog from './assets/img/dog.svg'
import Adorableanimals from './assets/img/adorable_animals.svg'

export default function Posts() {
    const [like, setLike] = React.useState('heart-outline')
    const [foiSalvo, setFoiSalvo] = React.useState(true)

    function deuLike() {
        const likeClicado = 'heart'
        setLike(likeClicado)
    }

    function mudaSalvo() {
        setFoiSalvo(!foiSalvo)
    }

    function Post(props) {
        const {
            imgIcon,
                textIcon,
                imgPost,
                imgCurtidas,
                curtidasPagina,
                curtidas,
                isSaved,
                isLiked
        } = props


        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={imgIcon} />
                        {textIcon}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div onClick={deuLike} class="conteudo">
                    <img src={imgPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name={like} onClick={deuLike}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            {foiSalvo ? (
                                <ion-icon onClick={mudaSalvo} name="bookmark-outline"></ion-icon>
                            ) : (
                                <ion-icon onClick={mudaSalvo} name="bookmark"></ion-icon>
                            )}

                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={imgCurtidas} />
                        <div class="texto">
                            Curtido por <strong>{curtidasPagina}</strong> e <strong>outras {curtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const postagem = [
        {
            imgIcon: Meowed,
            textIcon: 'meowed',
            imgPost: Gatotelefone,
            imgCurtidas: Respondeai,
            curtidasPagina: 'respondeai',
            curtidas: '101523',
            isSaved: (false),
            isLiked: true
        },
        {
            imgIcon: Barked,
            textIcon: 'barked',
            imgPost: Dog,
            imgCurtidas: Adorableanimals,
            curtidasPagina: 'adorable_animals',
            curtidas: '99159',
            isSaved: (true),
            isLiked: false
        }
    ]

    return (
        <div class="posts">
            {postagem.map((i) =>
                <Post
                    imgIcon={i.imgIcon}
                    textIcon={i.textIcon}
                    imgPost={i.imgPost}
                    imgCurtidas={i.imgCurtidas}
                    curtidasPagina={i.curtidasPagina}
                    curtidas={i.curtidas}
                    isSaved={i.isSaved}
                    isLiked={i.isLiked}
                />)}
        </div>
    )
}