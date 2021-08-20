import "./PaginaCadastrarUser.css";
import { useForm } from 'react-hook-form';
import axios from "axios";
import logo from './logo.svg';
import img from './img.png';
import { useHistory } from "react-router-dom";
import { cadastrar } from '../../../api/auth';


function FormCadastro(){ 
    let history = useHistory();
    const {register, handleSubmit} = useForm();
    const submeter = (usuario)=>{
       cadastrar(usuario).then((response)=>{
            console.log(response);
            history.push("/");

        }).catch((error)=>{
            console.log(error);
        })
    }; 

    return (
        <form onSubmit={handleSubmit(submeter)}>
            {/* Nome completo: */}
                <input type="text" placeholder="Qual é o seu nome?" name="nome_completo" {...register("nome_completo")}></input> <br></br>
            {/* Email:  */}
                <input type="text" placeholder="Qual é seu email?" name="email" {...register("email")}></input><br></br>
            {/* Senha:  */}
                <input type="password" name="senha" placeholder="Digite uma senha" {...register("senha")}></input><br></br>
            {/* Tipo pessoa:  */}
                <select name="tipo_pessoa"  id="" {...register("tipo_pessoa")}>
                        <option>Cadastrar como?</option>
                        <option value="Pessoa Física">Pessoa Física</option>
                        <option value="Pessoa Jurídica">Pessoa Juridica</option>
                </select>
            {/* Descricao:  */}
                <input type="text" placeholder="Digite uma descrição para você " name="descricao_pessoa" {...register("descricao_pessoa")}></input><br></br>
            {/* Cidade:  */}
                <input type="text" name="cidade" {...register("cidade")} placeholder="Qual a sua cidade? "></input><br></br>
            {/* Endereco:  */}
                <input type="text" name="endereco" {...register("endereco")} placeholder="Qual o seu endereço?"></input><br></br>
            {/* Telefone: */}
                <input type="text" name="telefone" {...register("telefone")} placeholder=" Qual seu número de telefône? "></input><br></br>

            <button className="cadastrar">Cadastrar</button>
        </form>
    )
}

export function PaginaCadastro(){
    return(
        <div className="cadastro_tela">
            <div className="esquerdo2">
                <img src={img} className="img_esquerda2"/>
            </div>
            <div className="direito2">
                <img src={logo} className="img_logo2"/>
                <div className="formulario2">
                    <h1 className="titulo2">Cadastro</h1>
                    <div className="campos2">
                        <FormCadastro></FormCadastro>
                    </div>
                </div>
                
            </div>

        </div>
    );
}