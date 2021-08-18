import "./Card_servico_evento.css";
import  img from './foto_evento.png';


export function CardServicoEvento({post}){
    return <div className="card_area">
        <div className="parte_texto">
            <div className="palestra">Palestra</div>
            <div className="titulo_evento">
                {post.nome_servico}
            </div>
            <div className="ofertante">
                Por {post.usuario.nome_completo}
            </div>
            
        </div>
        <div className="imagem">
        <img src={img} className="foto"/>
        </div>
    </div>
}