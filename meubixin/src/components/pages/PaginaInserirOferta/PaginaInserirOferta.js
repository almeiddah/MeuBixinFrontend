import { Link} from "react-router-dom";
import { Navbar } from "../../commom/Navbar/Navbar";
import { useForm } from 'react-hook-form';
import "./PaginaInserirOferta.css"
import { FiChevronRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { inserirProduto } from "../../../api/produtosAPI";
import { useContext } from "react";
import { AuthContext } from "../../../App";

import img from "./img_produtos.svg";

function FormCadastroProduto(){ 
    const {auth} = useContext(AuthContext);
    let history = useHistory();
    const {register, handleSubmit} = useForm();
    const submeter = (produto_info)=>{
        console.log("entrou")
        console.log(auth._id);
       inserirProduto(produto_info, auth.token).then((response)=>{
            console.log(response);
            history.push("/meuperfil");

        }).catch((error)=>{
            console.log(error);
        })
    }; 

    return (
        <form onSubmit={handleSubmit(submeter)}>
            {/* Nome produto: */}
                <input type="text" placeholder="Nome do produto" name="nome_produto" {...register("nome_produto")}></input> <br></br>
            {/* preco:  */}
                <input  placeholder="Preço do produto"   name="valor_produto" {...register("valor_produto")}></input><br></br>
            {/* tipo de produto:  */}
                <select name="tipo_pessoa" type="text"  id="" {...register("tipo_produto")}>
                        <option>Categoria do produto</option>
                        <option value="Gerais">Gerais</option>
                        <option value="higiene">Higiene e acessórios</option>
                        <option value="brinquedo">Diversão</option>
                        <option value="arte">Arte</option>
                </select>
            {/* Descricao:  */}
                <input type="text" placeholder="Descrição do produto. obs: Detalhe em tópicos " name="descricao_produto" {...register("descricao_produto")}></input><br></br>
                {/* Usuario:  */}
                <input type="text" value={auth._id} name="usuario" {...register("usuario")} className="none"></input><br></br>
                <Link className="botao_2" to="/meuperfil">Cancelar</Link> <button className="botao">Cadastrar</button>
        </form>
    )
}

export function PaginaInserirOferta(){
    
    return <div className="body">
        <Navbar></Navbar>
        <br></br>
        <div className="partes"> 
        <div className="parte1">

       
        <div className="pagina_form">

        <div className="navegador_migalha"> <Link exact to="/meuperfil" className="Link">Meu perfil</Link> <FiChevronRight></FiChevronRight> Adicionar produto </div>
        
        <div className="area_form">
        <h1 className="titulo_form">Adicionar produto</h1>
        <h2 className="subtitulo_form">Você pode vender seus produtos, basta preenher o<br></br> formulário a baixo, fácil né? </h2>
        </div>

        </div>
        <div className="abc">
        <div className="direito2">
        <div className="campos2">
        <FormCadastroProduto></FormCadastroProduto>
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