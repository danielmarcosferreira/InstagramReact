import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"
import Catanacomics from './assets/img/catanacomics.svg'

export default function Sidebar() {



    return (
        <div class="sidebar">
            <Usuario image={Catanacomics} arroba={'catanacomics'} nome={'Catana'} />

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}