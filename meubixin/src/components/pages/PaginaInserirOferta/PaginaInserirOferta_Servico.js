import { Link} from "react-router-dom";
import { Navbar } from "../../commom/Navbar/Navbar";
import { useForm } from 'react-hook-form';
import "./PaginaInserirOferta.css"
import { FiChevronRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../App";

import img from "./img_servico.svg";
import { inserirServico } from "../../../api/servicosAPI";

function FormCadastroServico(){ 
    const {auth} = useContext(AuthContext);
    let history = useHistory();
    const {register, handleSubmit} = useForm();
    const submeter = (servico_info)=>{
        console.log(servico_info, auth.token);
       inserirServico(servico_info, auth.token).then((response)=>{
            console.log(response);
            history.push("/meuperfil");

        }).catch((error)=>{
            console.log(error);
        })
    }; 

    return (
        <form onSubmit={handleSubmit(submeter)}>
            {/* Nome servoço: */}
                <input type="text" placeholder="Nome do serviço" name="nome_servico" {...register("nome_servico")}></input> <br></br>
            {/* preco:  */}
                <input  placeholder="Preço do serviço"   name="valor_servico" {...register("valor_servico")}></input><br></br>
            {/* tipo de serviço:  */}
                <select name="tipo_pessoa" type="text"  id="" {...register("tipo_servico")}>
                        <option selected disabled>Categoria do serviço</option>
                        <option value="Gerais">Serviços casuais</option>
                        <option value="evento">Evento</option>
                        <option value="evento"> Workshop / Minicurso</option>
                </select>
            {/* Descricao:  */}
                <input type="text" placeholder="Descrição do serviço. obs: Detalhe em tópicos " name="descricao_servico" {...register("descricao_servico")}></input><br></br>
                {/* Usuario:  */}
                <input type="text" value={auth._id} name="usuario" {...register("usuario")} className="none"></input><br></br>
                <Link className="botao_2" to="/meuperfil">Cancelar</Link> <button className="botao">Cadastrar</button>
        </form>
    )
}

export function PaginaInserirOferta_Servico(){
    
    return <div className="body">
        <Navbar></Navbar>
        <br></br>
        <div className="partes"> 
        <div className="parte1">

       
        <div className="pagina_form">

        <div className="navegador_migalha"> <Link exact to="/meuperfil" className="Link">Meu perfil</Link> <FiChevronRight></FiChevronRight> Adicionar serviço </div>
        
        <div className="area_form">
        <h1 className="titulo_form">Adicionar serviço</h1>
        <h2 className="subtitulo_form">Você pode vender seus serviços, basta preenher o<br></br> formulário a baixo, fácil né? </h2>
        </div>

        </div>
        <div className="abc">
        <div className="direito2">
        <div className="campos2">
        <FormCadastroServico></FormCadastroServico>
        </div>
        </div>
        </div>
        </div>
        <div className="parte2">
        <img src={img} />
        </div>
        </div>
       
    </div>
}