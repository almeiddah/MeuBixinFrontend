import "./Card_servico.css";
import img from './servico.png';
import avaliacao_img from './avaliacao.svg';
import {FiHeart} from "react-icons/fi";

export function Card_servico({post}){
    let fornecedor = post.usuario.nome_completo;
    let numero = post.valor_servico;
    return (
        <div className = "card2">
            <div className="conteudo_texto">
            <div className="nome2">
                        {post.nome_servico}
            </div>       
            <div className="ofertante2">
                            {fornecedor}
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
                <img src={img} className="img_produto2"/>
            </div>

        </div>
    )
}