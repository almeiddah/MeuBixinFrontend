import { Link} from "react-router-dom";
import { Navbar } from "../../commom/Navbar/Navbar";
import { useForm } from 'react-hook-form';
import "./PaginaInserirOferta.css"
import { FiChevronRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../App";

import img from "./img_pet.svg";
import { inserirPet } from "../../../api/petAPI";

function FormCadastroPet(){ 
    const {auth} = useContext(AuthContext);
    let history = useHistory();
    const {register, handleSubmit} = useForm();
    const submeter = (pet_info)=>{
        console.log(pet_info, auth.token);
       inserirPet(pet_info, auth.token).then((response)=>{
            console.log(response);
            history.push("/meuperfil");

        }).catch((error)=>{
            console.log(error);
        })
    }; 

    return (
        <form onSubmit={handleSubmit(submeter)}>
            {/* Nome pet: */}
                <input type="text" placeholder="Nome do bichinho" name="nome_pet" {...register("nome_pet")}></input> <br></br>
            {/* preco:  */}
                <input  placeholder="Digite a raça do bichinho"   name="raca" {...register("raca")}></input><br></br>
            {/* tipo do animal:  */}
                <select name="especie" type="text"  id="" {...register("especie")}>
                        <option selected disabled>Selecione o tipo de animal</option>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Gato">Gato</option>
                        <option value="Coelho">Coelho</option>
                        <option value="Hamster">Hamster</option>
                </select>
                 {/* sexo:  */}
                 <select name="sexo" type="text"  id="" {...register("sexo")}>
                        <option selected disabled >Selecione o sexo do animal</option>
                        <option value="Macho">Macho</option>
                        <option value="Femea">Femêa</option>
                </select>
                <input type="text" placeholder="Qual o peso do animal" name="peso" {...register("peso")}></input> <br></br>
                <input type="text" placeholder="Idade em meses" name="nome_pet" {...register("idade")}></input> <br></br>
            {/* Descricao:  */}
                <input type="text" placeholder="Descreva o pet. obs: Detalhe em tópicos " name="descricao_servico" {...register("descricao_pet")}></input><br></br>
                {/* Usuario:  */}
                <input type="text" value={auth._id} name="usuario" {...register("usuario")} className="none"></input><br></br>
                <Link className="botao_2" to="/meuperfil">Cancelar</Link> <button className="botao">Cadastrar</button>
        </form>
    )
}

export function PaginaInserirOferta_Pet(){
    
    return <div className="body">
        <Navbar></Navbar>
        <br></br>
        <div className="partes"> 
        <div className="parte1">

       
        <div className="pagina_form">

        <div className="navegador_migalha"> <Link exact to="/meuperfil" className="Link">Meu perfil</Link> <FiChevronRight></FiChevronRight> Adicionar pet </div>
        
        <div className="area_form">
        <h1 className="titulo_form">Adicionar pet</h1>
        <h2 className="subtitulo_form">Você pode doar um bichinho, basta preenher o<br></br> formulário a baixo, fácil né? </h2>
        </div>

        </div>
        <div className="abc">
        <div className="direito2">
        <div className="campos2">
        <FormCadastroPet></FormCadastroPet>
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