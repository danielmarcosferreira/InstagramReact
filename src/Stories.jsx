import Gag from './assets/img/9gag.svg'
import Meowed from './assets/img/meowed.svg'
import Barked from './assets/img/barked.svg'
import Nathanwpylestrangeplanet from './assets/img/nathanwpylestrangeplanet.svg'
import Wawawicomics from './assets/img/wawawicomics.svg'
import Respondeai from './assets/img/respondeai.svg'
import Filomoderna from './assets/img/filomoderna.svg'
import Memeriagourmet from './assets/img/memeriagourmet.svg'

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.text}
            </div>
        </div>
    )
}

export default function Stories() {
    const storiesLista = [
        { image: Gag, text: '9gag' },
        { image: Meowed, text: 'meowed' },
        { image: Barked, text: 'barked' },
        { image: Nathanwpylestrangeplanet, text: 'nathanwpylestrangeplanet' },
        { image: Wawawicomics, text: 'wawawicomics' },
        { image: Respondeai, text: 'respondeai' },
        { image: Filomoderna, text: 'filomoderna' },
        { image: Memeriagourmet, text: 'memeriagourmet' }
    ]

    return (
        <div class="stories">
            {storiesLista.map((i) => <Story image={i.image} text={i.text} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

        </div>
    )
}