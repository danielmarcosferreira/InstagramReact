function ExibeIcone(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}

export default function FundoMobile() {
    const iconsMobile = [
        { nome: "home" },
        { nome: "search-outline" },
        { nome: "add-circle-outline" },
        { nome: "heart-outline" },
        { nome: "person-outline" }
    ]

    return (
        <div class="fundo-mobile">

            {iconsMobile.map((i) => <ExibeIcone name={i.nome} />)}
        </div>
    )
}