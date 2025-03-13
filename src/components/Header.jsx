import "../Styles/Header.css"
import Logo from "../assets/Logo/Logo.webp"

export default function Header() {

    return (
        <header>
            <div className="header">
                <a href="/" > <img className="ImagemLogo BotaoAnimacao" src={Logo} /> </a>

                <div className="EmilyArmstrong">
                    <a className="LinkStyle BotaoAnimacao" href="/"> Home </a>
                    <a className="LinkStyle BotaoAnimacao" href="/"> sobre </a>
                    <a className="LinkStyle BotaoAnimacao" href="/"> contato </a>
                    <a className="LinkStyle BotaoAnimacao" href="/"> suporte </a>

                </div>

                <div className="ChesterBennington">
                    <a className="LinkStyle BotaoAnimacao" href="/Login"> Sign In </a>
                    <a className="LinkStyle BotaoBordaBrancoStyle BotaoAnimacao" href="/Login"> Sign Up </a>

                </div>
            </div>

        </header>
    )
}