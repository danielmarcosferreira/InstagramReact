import React from "react"

export default function Usuario(props) {
    const [imagem, setImagem] = React.useState(props.image)
    const [nomeDoUsuario, setnomeDoUsuario] = React.useState(props.nome)

    function trocarImagem() {
        const fotoPrompt = prompt("Cole aqui o link da nova imagem")
        if (!fotoPrompt) {
            alert('Cole um link valido')
        } else {
            setImagem(fotoPrompt)
        }
}

function alterarUsuario () {
        const usuarioPrompt = prompt('Qual seu nome de usuario?')
        if (!usuarioPrompt) {
            alert('Escreva um nome valido')
        } else {
            setnomeDoUsuario(usuarioPrompt)
        }
}

    return (
        <div class="usuario">
            <img onClick={trocarImagem} src={imagem} />
            <div class="texto">
                <strong>{props.arroba}</strong>
                <span>
                    {nomeDoUsuario}
                    <ion-icon name="pencil" onClick={alterarUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}