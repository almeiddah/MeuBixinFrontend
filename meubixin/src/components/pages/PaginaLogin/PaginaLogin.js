import "./PaginaLogin.css";
import logo from './logo.svg';
import img from './img.png';
import {useForm} from "react-hook-form";
import axios from "axios";
import { Link} from "react-router-dom";
import { useHistory } from "react-router-dom";



export function FormularioLogin(){
    
    const {register,handleSubmit} = useForm();
    let history = useHistory();

    const submeter = (login) =>{
       axios({
            method: "POST",
            url:"http://localhost:8393/usuarios/signin",
            data: login,
        }).then((response)=>{
            console.log(response);
            history.push("/home");
        }).catch((error)=>{
                console.log(error);
        })
    };
    return (


        <form onSubmit={handleSubmit(submeter)}>
         <input {...register("email")} placeholder="Digite seu email" />
           <input {...register("senha")} placeholder="Digite sua senha" type="password" className="senha"/>
            <h2 className="esqueceu_senha">Esqueceu sua senha?</h2>
            <button className="entrar">Entrar</button>
            <div className="conta">
                <span className="conta_texto">Não tem conta? </span><Link to="/cadastrar" className="link"> Clique aqui</Link>
            </div>
        </form>
    )
}


export function PaginaLogin(){
    return <div className="login">
        
            <div className="esquerdo">
            <img src={img} className="img_esquerda"/>
            </div>
            <div className="direito">
                <img src={logo} className="img_logo"/>
                <div className="formulario">
                    <h1 className="titulo">Login</h1>
                    <h2 className="sub">Não perca a possibilidade de ter um novo<br></br> amiguinho ou de alegrar a vida dos que já tem!</h2>
                    <div className="campos">
                        <FormularioLogin></FormularioLogin>
                    </div>
                </div>
                
            </div>
    </div>
}