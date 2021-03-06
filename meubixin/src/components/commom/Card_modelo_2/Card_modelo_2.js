import "./Card_modelo_2.css";
import img from './imagem_cao.png';
import avaliacao_img from './avaliacao.svg';
import {FiHeart} from "react-icons/fi";

export function Card_modelo_2({post}){
    let fornecedor = post.usuario;
    var numero = post.valor_produto;
    return (
        <div className = "card2">
            <div className="conteudo_texto">
            <div className="nome2">
                        {post.nome_produto}
            </div>       
            <div className="ofertante2">
                            {fornecedor.nome_completo}
            </div>
            <img src={avaliacao_img} className="avaliacao2"/>

                <div className="preco2">
                    <div className="cifrao2">
                    R$
                    </div>
                    <div className="preco_numero2">
                    {new Intl.NumberFormat('pt-BR').format(numero)}
                    </div>
                </div>        
            </div>
            <div className="area_produto2">
                <img src={img} className="img_produto_2"/>
                <FiHeart className="add_lista2"/>
            </div>

        </div>
    )
}