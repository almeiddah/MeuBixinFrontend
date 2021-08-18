import { useContext, useEffect, useState } from "react";
import { listarVeterinario, listarServicosPorTipo } from "../../../api/servicosAPI";
import { AuthContext } from "../../../App";
import { Banner } from "../../commom/Banner/Banner";
import { Card_servico } from "../../commom/Card_servico/Card_servico";
import { CardServicoEvento } from "../../commom/Card_servico_evento/Card_servico_evento";
import { CardVeterinario } from "../../commom/Card_veterinario/Card_veterinario";
import { Categoria } from "../../commom/Categoria/Categoria";
import { Navbar } from "../../commom/Navbar/Navbar";

export function ConteudoEvento({servicos}){
    let posts = servicos.map((post)=>(<CardServicoEvento post={post}></CardServicoEvento>))

    return ( 
            <div className="conteudo_produtos_recentes">
               {posts}
            </div>
            )
}


export function ConteudoSevico({servicos}){
    let posts = servicos.map((post)=>(<Card_servico post={post}></Card_servico>))

    return ( 
            <div className="conteudo_produtos_recentes">
               {posts}
            </div>
            )
}


export function ConteudoVeterinario({veterinario}){
    let posts = veterinario.map((post)=>(<CardVeterinario post={post}></CardVeterinario>))

    return ( 
            <div className="conteudo_produtos_recentes">
               {posts}
            </div>
            )
}

export function PaginaHomeServicos(){
    const {auth} = useContext(AuthContext);
    let categoria;
    // Servicos gerais
    const [servicosGerais, setServicosGerais] = useState([]);
    useEffect(()=>{
        categoria = "todos";
        listarServicosPorTipo(categoria).then(
            (response) =>{
                console.log(response.data);
                setServicosGerais(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);

     // Servicos evento
     const [servicosEvento, setServicosEventos] = useState([]);
     useEffect(()=>{
         categoria = "evento";
         listarServicosPorTipo(categoria).then(
             (response) =>{
                 console.log(response.data);
                 setServicosEventos(response.data);
             }).catch(
             (error=>{
                 console.log(error);
             })
         )
     },[]);

      // Veterinarios
      const [veterinario, setVeterinario] = useState([]);
      useEffect(()=>{
          listarVeterinario().then(
              (response) =>{
                  console.log("VETERINARIO",response.data);
                  setVeterinario(response.data);
              }).catch(
              (error=>{
                  console.log(error);
              })
          )
      },[]);


    return <div className="home_pagina">
            <Navbar></Navbar>
            <Banner></Banner>
            <Categoria></Categoria>
            <div className="produtos_diversao">
                <div className="titulo"> 
                    <h1>Serviços Gerais</h1>
                    <h2> Ver mais</h2>
                </div>
                <ConteudoSevico servicos={servicosGerais}></ConteudoSevico>
            </div>
            <div className="produtos_diversao">
                <div className="titulo"> 
                    <h1>Conteúdo Pet</h1>
                    <h2> Ver mais</h2>
                </div>
                <ConteudoEvento servicos={servicosEvento}> </ConteudoEvento>
            </div>
            <div className="produtos_recentes">
                <div className="titulo"> 
                    <h1>Nossos veterinários</h1>
                    <h2>Ver mais</h2>
                </div>
                <ConteudoVeterinario veterinario={veterinario}></ConteudoVeterinario>
            </div>

    </div>
}