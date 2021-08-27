import { Link } from "react-router-dom";
import {listarProdutos} from "../../../api/produtosAPI";
import { Navbar } from "../../commom/Navbar/Navbar";
import { FiChevronRight } from "react-icons/fi";
import "./PaginaDetalheProduto.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../App";
import { Conteudo } from "../PaginaHome/PaginaHome";
import { listarPet, listarPets } from "../../../api/petAPI";
import img from "./cachorro.png";
import { Pets } from "../PaginaHomePet/PaginaHomePetCachorro";

function MostrarDetalhesPet({petDetalhe}){
    console.log("entrou", petDetalhe);
    if(petDetalhe!== undefined){
        
        return <div className="detalhes_pagina_produto">
            <div className="navegador_migalha_card"> <Link exact to="/home/pets" className="Link">Pets</Link><FiChevronRight></FiChevronRight><Link exact to="/home/pets" className="Link">Todos</Link><FiChevronRight></FiChevronRight> {petDetalhe[0].nome_pet} </div>
            <div className= "partes_prod">
            <div className="parte_imagens_produto">
                <div className="imagens">
                    <div className="imagem_grande">
                        <img src={img} className="img_produto_grande"/>
                    </div>

                    <div className="imagem_pequenas">
                        <img src={img} className="img_produto_pequena"/>
                        <img src={img} className="img_produto_pequena"/>
                    </div>
                </div>
                </div>  
                <div className="parte_dados_produtos">
                <div className="nome_e_fornecedor">
                    <h1>{petDetalhe[0].nome_pet}</h1>
                    <h2>Por {petDetalhe[0].id_usuario.nome_completo}</h2>
                </div>
                <div className="classificacao_produto">
                        <h3>Pet</h3><h4>{petDetalhe[0].especie}</h4>
                </div>
                <div className="classificacao_produto">
                        <h3>Raça</h3><h4>{petDetalhe[0].raca}</h4>
                </div>
                <div className="classificacao_produto">
                        <h3>Sexo</h3><h4>{petDetalhe[0].sexo}</h4>
                </div>

                <div className="descricao">
                    {petDetalhe[0].descricao_pet}
                </div>
                <div className="botoes">
                    <button className="contato">Entrar em contato</button>
                </div>
             
                </div>  
            </div>
            
              
              
              
              

        </div>
    }

    return <div></div>
    
}



export function PaginaDetalhePet(id_pet){
    const {auth} = useContext(AuthContext);
    const [petDetalhe, setPetDetalhe] = useState();
    useEffect(()=>{
        listarPet(auth.token, id_pet).then(
            (response) =>{
                console.log("pet: ", response.data)
                setPetDetalhe(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);
    const [pets, setPets] = useState([]);
    useEffect(()=>{
        let especie="Todos";
        listarPets(auth.token, especie).then(
            (response) =>{
                console.log("asas", pets)
                setPets(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);


    return (

        <div>
            <Navbar></Navbar>
            <br></br>
            <MostrarDetalhesPet petDetalhe={petDetalhe}></MostrarDetalhesPet>
            <div className="a">
                <br></br>
                <br></br>
                <h1>Outros Pets</h1>
            </div>
            <Pets pets={pets}></Pets>
        </div>
       
    )

}