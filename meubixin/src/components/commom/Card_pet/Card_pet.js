import "./Card_pet.css";
import img from "./cachorro.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Botao(){
    return <Link className="botao_pet">Conhecer pet</Link>
}
export function Card_pet({post}){
    console.log(post);
    let history = useHistory();
    function detalhe(){
        console.log(post._id)
        return history.push("/home/pets/" + post._id);
    }
    
    return (
        <div className = "card2" onClick={detalhe}>
            <div className="conteudo_texto">
            <div className="nome2">
                        {post.nome_pet}
            </div>       
            <div className="dados">
                           {post.raca} - {post.sexo}
            </div>     
            <div className="endereco_pet">
                <h1>{post.id_usuario.cidade}</h1>
                <h2>{post.id_usuario.endereco}</h2>
            </div>
            <Botao></Botao>
            </div>

            <div className="area_produto2">
                <img src={img} className="img_produto_2"/>

            </div>
            


        </div>
    )
}