import "./Card.css";
import img from './imagem_racao.png';
import img2 from './imagem_coleira.png';
import avaliacao_img from './avaliacao.svg';
import {FiTrash} from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../App";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { removerProduto } from "../../../api/produtosAPI";



function Excluir({produto_info}){
    let history = useHistory();
    const {auth} = useContext(AuthContext);
    let token_id = auth.token;

    const {register,handleSubmit} = useForm();
    const submeter = (produto_info) =>{
        console.log(produto_info);
        removerProduto( produto_info,token_id).then((response)=>{
            console.log("produto removido", response.data);
            history.push("/meu_perfil");
            
            
        }).catch((error)=>{
                console.log("erro que da:",error);
        })
    };
     
    return <form onSubmit={handleSubmit(submeter)}>
        <input {...register("id")} value={produto_info} className="none" />
        <button className="botao_favoritar"><FiTrash className="add_lista"/></button> 
    </form>
}



export function Card_meu_perfil({post, decisor}){
    let imagem_usada;
    if(decisor == 1){
        imagem_usada = img;
        console.log("Acessórios");
    }else{
        imagem_usada = img2;
        
        
    }
    let fornecedor = post.usuario;

    var numero = post.valor_produto;
    return (
        <div className = "card">
             
                <div className="area_produto">
                    <img src={imagem_usada} className="img_produto"/>
                    <Excluir produto_info={post._id} ></Excluir>
                </div>
                <div className="avaliacao_e_ofertante">
                <div className="avaliacao">
                        <img src={avaliacao_img} className="avaliacao"/>
                    </div>
                    <div className="ofertante">
                       {fornecedor.nome_completo}
                    </div>
                </div>
                <div className="dados_produto">
                <div className="nome">
                        {post.nome_produto}
                    </div>
                    <div className="preco">
                        <div className="cifrao">
                        R$
                        </div>
                        <div className="preco_numero">
                        {new Intl.NumberFormat('pt-BR').format(numero)}
                        </div>
                            
                    </div>
                </div>

        </div>
    )
}