import "./PaginaLogin.css";
import logo from './logo.svg';
import img from './img.png';

export function PaginaLogin(){
    return <div className="login">
            <div className="esquerdo">
            <img src={img} className="img_esquerda"/>
            </div>
            <div className="direito">
                <img src={logo} className="img_logo"/>
                <div className="formulario">
                    <h1>Login</h1>
                    <h2>Não perca a possibilidade de ter um novo<br></br> amiguinho ou de alegrar a vida dos que já tem!</h2>
                    <div className="campos">
                        <input placeholder="Digite seu email"></input>
                        <input placeholder="Digite sua senha" type="password" className="senha"></input>               
                        <h2>Esqueceu sua senha?</h2>
                    </div>
                    <button className="entrar">Entrar</button>
                   
                </div>
                
            </div>
    </div>
}