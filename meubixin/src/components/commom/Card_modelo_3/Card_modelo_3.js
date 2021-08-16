import "./Card_modelo_3.css";
import img from './caricatura.png';
import avaliacao_img from './avaliacao.svg';


export function Card_modelo_3({post}){
    console.log(post);
    let fornecedor = post.usuario;
    return (
        <div className = "card3">
            <div className="conteudo_texto">
            <div className="nome3">
                        {post.nome_produto}
            </div>       
            <div className="ofertante3">
                            Por {fornecedor.nome_completo}
            </div>
            <img src={avaliacao_img} className="avaliacao3"/>
                <div className="preco3">
                   Ver detalhes
                </div>        
            </div>
            <div className="area_produto3">
                <img src={img} className="img_produto3"/>
            </div>

        </div>
    )
}