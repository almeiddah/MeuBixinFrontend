import { AuthContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import { listarUsuarioPorId } from "../../../api/usuarioAPI";
import { Navbar } from "../../commom/Navbar/Navbar";
import "./PaginaMeuPerfil.css";
import foto_perfil from './foto_perfil.png';

import {listarPetsPorUser } from "../../../api/petAPI";
import { Card_pet } from "../../commom/Card_pet/Card_pet";
import { Link } from "react-router-dom";

import {FiPlus} from "react-icons/fi";



function Pets2({pets}){
    let posts = pets.map((post)=>(<Card_pet post={post}> </Card_pet>))

    return ( 
            <div className="petsmeuperfil">
               {posts}
            </div>
            )
}



function Dados_usuario({user}){

    console.log(user);

    let numero = user.Telefone;
    let link_magnetico = `https://api.whatsapp.com/send?1=pt_BR&phone= + ${numero}`;
    return <div className="parte_superior_1">
    <div className="titulo"> 
        <h1>Meu perfil</h1>
    </div>
    <div className="conteudo_perfil">
        <div className="conteudo_foto">
            <img src={foto_perfil} className="foto"/>
            <h2>Editar perfil</h2>
        </div>
        <div className="conteudo_texto">
                <div className="dados_pessoais">
                    <h1>{user.Nome}</h1>
                    <h2>{user.Tipo}</h2>
                    <h3>{user.Descrição}</h3>
                </div>
                <div className="endereco">
                    <div className="item">
                            <h2>Cidade</h2>
                            <h1>{user.Cidade}</h1>
                    </div>
                    <div className="item">
                            <h2>Endereço</h2>
                            <h1>{user.Endereço}</h1>
                    </div>
                    <div className="item">
                            <h2>Telefone</h2>
                            <div className="contato">
                            <h1>{user.Telefone}</h1>
                            <h3><a href={link_magnetico}>Entrar em contato</a></h3>
                            </div>
                    </div> 
                </div>
        </div>
    </div>
</div>
}

export function GetDados({usuario}){
    let dados_do_usuario = usuario.map((user)=>(<Dados_usuario user={user}></Dados_usuario>))

    return ( 
            <div>
               {dados_do_usuario}
            </div>
            )
}

export function PaginaMeuPerfil(){
    const {auth} = useContext(AuthContext);

    const [usuario, setUsuario] = useState([]);
    useEffect(()=>{
        
        listarUsuarioPorId(auth._id, auth.token).then(
            (response) =>{
                setUsuario(response.data);
                
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);


    const [pets, setPets] = useState([]);
    useEffect(()=>{
        console.log("ID:", auth._id);
        listarPetsPorUser(auth.token, auth._id).then(
            (response) =>{
                
                setPets(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);

    return <div className="meu_perfil">
        <Navbar></Navbar>
        <br/>
        <GetDados usuario={usuario}> </GetDados>
        <div className="produtos_recentes">
                <div className="titulo"> 
                    <h1>Meus Pets</h1>
                    <Link to="/meuperfil/adicionarPet" className="botao_add_pet"><FiPlus/>Adicionar Pet</Link>
                </div>
                <div className="petsmeuperfil">
                <Pets2 pets={pets}></Pets2>
                </div>
               
            </div>
    </div>
}