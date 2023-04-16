import Logo from "./assets/img/logo.png"

function Icons(props) {
    return (
        <ion-icon name={props.icon}></ion-icon>
    )
}

export default function Navibar() {
    const icone = [
        { icon: "paper-plane-outline" },
        { icon: "compass-outline" },
        { icon: "heart-outline" },
        { icon: "person-outline" }
    ]

    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src={Logo} />
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src={Logo} />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    {icone.map((i) => <Icons icon={i.icon} />)}

                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}