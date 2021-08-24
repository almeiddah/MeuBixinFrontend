import "./Card.css";
import img from './imagem_racao.png';
import img2 from './imagem_coleira.png';
import avaliacao_img from './avaliacao.svg';
import {FiHeart} from "react-icons/fi";
import { inserirProdutoCarrinho } from "../../../api/carrinhoAPI";
import { useContext} from "react";
import { AuthContext } from "../../../App";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";




function Favoritar({produto_info}){
    let history = useHistory();
    const {auth} = useContext(AuthContext);
    let token_id = auth.token;

    const {register,handleSubmit} = useForm();
    const submeter = (produto_info) =>{
    
        inserirProdutoCarrinho(token_id, produto_info).then((response)=>{
            history.push("/home");
            console.log("produto favoritado", response.data);
            
        }).catch((error)=>{
                console.log("erro que da:",error);
        })
    };
     
    return <form onSubmit={handleSubmit(submeter)}>
        <input {...register("produto_favoritado")} value={produto_info} className="none" />
        <button className="botao_favoritar"><FiHeart className="add_lista"/></button> 
    </form>
}



export function Card({post, decisor}){
    let history = useHistory();

    function detalhe(){
        console.log(post._id)
        return history.push("/home/produtos/" + post._id);
    }
    
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
                    <img src={imagem_usada} className="img_produto" onClick={detalhe}/>
                    <Favoritar produto_info={post._id} ></Favoritar>
                </div>
                <div className="avaliacao_e_ofertante"  >
                <div className="avaliacao">
                        <img src={avaliacao_img} className="avaliacao"/>
                    </div>
                    <div className="ofertante">
                       {fornecedor.nome_completo}
                    </div>
                </div>
                <div className="dados_produto" onClick={detalhe}>
                <div className="nome">
                        {post.nome_produto}
                    </div>
                    <div className="preco">
                        <div className="cifrao">
                        R$
                        </div>
                        <div className="preco_numero favoritado_n">
                        {new Intl.NumberFormat('pt-BR').format(numero)}
                        </div>
                            
                    </div>
                </div>

        </div>
    )
}

export function Card_favoritado({post, decisor}){
    let history = useHistory();

    function detalhe(){
        console.log(post._id)
        return history.push("/home/produtos/" + post._id);
    }

    var numero = post.valor_produto_favoritado;

    return (
        <div className = "card_favoritado">
                <div className="avaliacao_e_ofertante"  >
                </div>
                <div className="dados_produto" onClick={detalhe}>
                <div className="nome">
                        {post.nome_produto}
                    </div>
                    <div className="preco n">
                        <div className="cifrao">
                        R$
                        </div>
                        <div className="preco_numero favoritado_n">
                        {new Intl.NumberFormat('pt-BR').format(numero)}
                        </div>
                            
                    </div>
                </div>

        </div>
    )
}