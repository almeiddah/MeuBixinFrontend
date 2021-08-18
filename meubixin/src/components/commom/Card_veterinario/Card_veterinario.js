import "./Card_veterinario.css";
import avaliacao_img from './avaliacao.svg';
import veterinario from './veterinario.png';

export function CardVeterinario({post}){
    return <div className="card_veterinario">
            <div className="imagem_veterinario">
            <img src={veterinario} className="veterinario"/>
            </div>
            <div className="texto_veterinario">
                <img src={avaliacao_img} className="avaliacao"/>
                <div className="nome_completo">
                    {post.nome_completo}
                </div>
            </div>
    </div>
}