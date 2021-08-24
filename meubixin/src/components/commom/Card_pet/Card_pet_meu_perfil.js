import "./Card_pet.css";
import img from "./cachorro.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../App"
import { removerPet } from "../../../api/petAPI";
import { useForm } from "react-hook-form";


function Botao({id_pet_remover}){
    const {auth} = useContext(AuthContext);
    let history = useHistory();
    const {register, handleSubmit} = useForm();
    const submeter = (id_pet)=>{
        console.log("entrou")
        console.log(id_pet.id_pet);
       removerPet(id_pet.id_pet, auth.token).then((response)=>{
            console.log(response);
            history.push("/meu_perfil");

        }).catch((error)=>{
            console.log(error);
        })
    }; 

    return <form onSubmit={handleSubmit(submeter)}>
        {/* pet:  */}
        <input type="text" value={id_pet_remover} name="id_pet" {...register("id_pet")} className="none"></input><br></br>
        <button className="botao_pet_r">Remover pet</button>
</form>

}
export function Card_pet_meu_perfil({post}){
    console.log("card animal: ", post);
    return (
        <div className = "card2">
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
            <Botao id_pet_remover={post._id}></Botao>
            </div>

            <div className="area_produto2">
                <img src={img} className="img_produto_2"/>

            </div>
            


        </div>
    )
}