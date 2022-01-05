import React, {useEffect, useRef} from "react";
import LottieWeb from "lottie-web"
import Lottie from "../lottie/52102-searching.json"
import Mcdonalds from "../imgs/mcdonalds.png"
import Itamaraty from "../imgs/itamaraty.png"
import Warren from "../imgs/warren.png"
import Zeiss from "../imgs/zeiss.svg"
import "../css/Main.css"

function Main (props) {

    const container = useRef()
    const paragrafo = useRef()
    const divisor = useRef()

    const email = useRef()
    const celular = useRef()
    const nome = useRef()

    const labelemail = useRef()
    const labelnome = useRef()
    const labelcelular = useRef()

    useEffect(() => {
        LottieWeb.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: Lottie
       })
    }, [])


    useEffect(() => {
         const current = paragrafo.current
         current.style.marginLeft = "160px"
    }, [])

    useEffect(() => {
        const current = divisor.current
        current.style.marginLeft = "200px"
    })



    return (
        <main className="main">
            <div className="menu">
                <div className="content" ref={paragrafo}>
                    As melhores empresas escolheram o Hublocal
                </div>

                <div className="lottie" ref={container}>
                    
                </div>
            </div>

            <div className="imgs">
                <img src={Mcdonalds} alt="mcdonalds"/>
                <img src={Zeiss} alt="mcdonalds"/>
                <img src={Warren} alt="mcdonalds"/>
                <img src={Itamaraty} alt="mcdonalds"/>
            </div>

            <div className="divisor">
                <div className="background" ref={divisor}>
                    <strong>Hub</strong>local é o melhor lugar para você <br/>
                </div>
            </div>

            <div className="conteudo">
                <h1>O quê o <strong className="strong">Hub</strong>local faz por você?</h1>
                <p className="otimizar"> 1 - Verifica se sua empresa está otimizada</p>
                <p className="atualizar"> 2 - Sempre matendo o cliente atualizado</p>
                <p className="resultado"> 3 - Sempre se preocupando com a satisfação e resultado do cliente</p>
            </div>

            <div className="contato">
                <h1>Ainda com <strong>Dúvidas?</strong></h1>
                <p>Contate-nos!</p>
                <form action="" className="formulario">
                    <p>Preencha os seus dados</p>

                    <label htmlFor="email" className="labelemail" ref={labelemail}>E-mail</label>
                    <br />
                    <input type="text" 
                    placeholder="Digite seu melhor e-mail..."
                    className="email"
                    ref={email}
                    />
                    <br />

                    <label htmlFor="nome"  ref={labelnome}>Nome</label>
                    <br />
                    <input type="text"
                    placeholder="Digite seu nome..."
                    className="nome"
                    ref={nome}
                    />
                    <br />

                    <label htmlFor="celular" ref={labelcelular}>Telefone(celular)</label>
                    <br />
                    <input type="text"
                    placeholder="Digite seu número de celular..."
                    className="celular"
                    ref={celular}
                    />
                    <br />

                    <button className="button" onClick={(e) => {
                        e.preventDefault()

                        const emailElement = email.current
                        const emailValue = emailElement.value

                        const nomeElement = nome.current
                        const nomevalue = nomeElement.value

                        const celularElement = celular.current
                        const celularvalue = celularElement.value

                        const emaillabel = labelemail.current
                        const nomelabel = labelnome.current
                        const celularlabel = labelcelular.current

                        const red = "solid 3px red"

                        if(emailValue === "" || emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1 || emailValue.indexOf("@") - emailValue.indexOf(".") == 1) {
                            emailElement.style.border = red
                            emaillabel.innerHTML = "Digite um usuário válido"
                            emaillabel.style.color = "red"
                        } else {
                            emailElement.style.border = ""
                            emaillabel.innerHTML = "E-mail"
                            emaillabel.style.color = "green"
                        }

                        if(nomevalue === "" || nomevalue.length <= 2 || nomevalue.length >= 50) {
                            nomeElement.style.border = red
                            nomelabel.innerHTML = "Digite um Nome válido"
                            nomelabel.style.color = "red"
                        } else {
                            nomeElement.style.border = ""
                            nomelabel.innerHTML = "Nome"
                            nomelabel.style.color = "green"
                        }

                        if(celularvalue == "" || celularvalue.length > 11) {
                            celularElement.style.border = red
                            celularlabel.innerHTML = "Digite um número válido"
                            celularlabel.style.color = "red"
                        } else {
                            celularElement.style.border = ""
                            celularlabel.innerHTML = "Telefone(celular)"
                            celularlabel.style.color = "green"
                        }
                        
                    }}>Enviar</button>
                </form>
            </div>

        </main>
    )
}

export default Main