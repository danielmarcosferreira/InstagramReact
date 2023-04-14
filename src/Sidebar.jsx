import React from "react"
import Sugestoes from "./Sugestoes"
import Catanacomics from './assets/img/catanacomics.svg'

// let imagem;
// let usuario;
// const [nome, setNome] = React.useState("Catana")

export default function Sidebar() {
    const [imagem, setImagem] = React.useState(Catanacomics)
    const [usuario, setUsuario] = React.useState('Catana')

    function trocarImagem() {
        const fotoPrompt = prompt("Cole aqui o link da nova imagem")
        setImagem(fotoPrompt)
}

function alterarUsuario () {
        const usuarioPrompt = prompt('Qual seu nome de usuario?')
        setUsuario(usuarioPrompt)
}

function Usuario(props) {
    return (
        <div class="usuario">
            <img onClick={trocarImagem} src={props.image} />
            <div class="texto">
                <strong>{props.arroba}</strong>
                <span>
                    {props.nome}
                    <ion-icon name="pencil" onClick={alterarUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}

    return (
        <div class="sidebar">
            <Usuario image={imagem} arroba={'catanacomics'} nome={usuario} />

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