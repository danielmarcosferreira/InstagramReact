import Gag from './assets/img/9gag.svg'
import Meowed from './assets/img/meowed.svg'
import Barked from './assets/img/barked.svg'
import Nathanwpylestrangeplanet from './assets/img/nathanwpylestrangeplanet.svg'
import Wawawicomics from './assets/img/wawawicomics.svg'
import Respondeai from './assets/img/respondeai.svg'
import Filomoderna from './assets/img/filomoderna.svg'
import Memeriagourmet from './assets/img/memeriagourmet.svg'

function Storie(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.texto}
            </div>
        </div>
    )
}

export default function Stories() {
    return (

        
        <div class="stories">
            <Storie image={Gag} texto='9gag'/>
            <Storie image={Meowed} texto='meowed'/>
            <Storie image={Barked} texto='barked'/>
            <Storie image={Nathanwpylestrangeplanet} texto='nathanwpylestrangeplanet'/>
            <Storie image={Wawawicomics} texto='wawawicomics'/>
            <Storie image={Respondeai} texto='respondeai'/>
            <Storie image={Filomoderna} texto='filomoderna'/>
            <Storie image={Memeriagourmet} texto='memeriagourmet'/>
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}