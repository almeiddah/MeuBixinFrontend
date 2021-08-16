import "./Card.css";
import img from './imagem_racao.png';
import img2 from './imagem_coleira.png';
import avaliacao_img from './avaliacao.svg';
import {FiHeart} from "react-icons/fi";

export function Card({post, decisor}){
    let imagem_usada;
    if(decisor == 1){
        imagem_usada = img;
        console.log("Acessórios");
    }else{
        imagem_usada = img2;
        
        
    }
    let fornecedor = post.usuario;

    return (
        <div className = "card">
             
                <div className="area_produto">
                    <img src={imagem_usada} className="img_produto"/>
                   <FiHeart className="add_lista"/>
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
                        {post.valor_produto}
                        </div>
                            
                    </div>
                </div>

        </div>
    )
}