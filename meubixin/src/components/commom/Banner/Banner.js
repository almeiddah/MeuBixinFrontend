import "./Banner.css";
import banner_arte from "./banner_arte.png";
import ilustra from "./ilustration.svg"
export function Banner(){
    
    return <div className="banner_home">
        <div className="conteudo">
            <div className="banner_img">
                <img src={banner_arte} className="banner_arte"/>
            </div>
            <div className="banner_doar">
                <div className="texto_botao">
                    <h1>
                        Para todos!
                    </h1>
                    <h2>
                    Permita esse projeto<br></br> continuar vivo.
                    </h2>
                    <button >Faça uma doação</button>
                </div>
                <div className="ilustration">
                    <img src={ilustra}/>
                </div>
            </div>
        </div>
    </div>
}