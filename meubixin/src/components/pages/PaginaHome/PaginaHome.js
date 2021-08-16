import { useContext, useEffect, useState } from "react";
import { listarProdutos, listarProdutosPorTipo } from "../../../api/produtosAPI";
import { AuthContext } from "../../../App";
import { Banner } from "../../commom/Banner/Banner";
import { Card } from "../../commom/Card/Card";
import { Card_modelo_2 } from "../../commom/Card_modelo_2/Card_modelo_2";
import { Card_modelo_3 } from "../../commom/Card_modelo_3/Card_modelo_3";
import { Categoria } from "../../commom/Categoria/Categoria";
import { Navbar } from "../../commom/Navbar/Navbar";
import "./PaginaHome.css";


export function Conteudo({produtos, decisor}){
    let posts = produtos.map((post)=>(<Card post={post} decisor={decisor}></Card>))

    return ( 
            <div className="conteudo_produtos_recentes">
               {posts}
            </div>
            )
}

export function ConteudoDiversao({produtos}){
    let posts = produtos.map((post)=>(<Card_modelo_2 post={post}></Card_modelo_2>))

    return ( 
            <div className="conteudo_produtos_recentes">
               {posts}
            </div>
            )
}

export function ConteudoArte({produtos}){
    let posts = produtos.map((post)=>(<Card_modelo_3 post={post}></Card_modelo_3>))

    return ( 
            <div className="conteudo_produtos_recentes">
               {posts}
            </div>
            )
}

export function PaginaHome(){
    let categoria;
    const {auth} = useContext(AuthContext);

    // Produtos recentes
    const [produtos, setProdutos] = useState([]);
    useEffect(()=>{
        listarProdutos(auth.token).then(
            (response) =>{
                setProdutos(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);

    // Produtos da área de diversão
    const [produtos_diversao, setProdutos_diversao] = useState([]);
    useEffect(()=>{
        categoria = "brinquedo";
        listarProdutosPorTipo(categoria,auth.token).then(
            (response) =>{
                
                setProdutos_diversao(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);

      // Produtos da área de higiene e acessórios
      const [produtos_higienea, setProdutos_higienea] = useState([]);
      useEffect(()=>{
          categoria = "higiene";
          listarProdutosPorTipo(categoria,auth.token).then(
              (response) =>{
                  setProdutos_higienea(response.data);
              }).catch(
              (error=>{
                  console.log(error);
              })
          )
      },[]);

        // Produtos da área artistica
        const [produtos_arte, setProdutos_arte] = useState([]);
        useEffect(()=>{
            categoria = "arte";
            listarProdutosPorTipo(categoria,auth.token).then(
                (response) =>{
                    setProdutos_arte(response.data);
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
            <div className="produtos_recentes">
                <div className="titulo"> 
                    <h1>Mais recentes</h1>
                    <h2>Ver mais</h2>
                </div>
                <Conteudo produtos={produtos} decisor="1"></Conteudo>
            </div>

            <div className="produtos_diversao">
                <div className="titulo"> 
                    <h1>Diversão</h1>
                    <h2> Ver mais</h2>
                </div>
                <ConteudoDiversao produtos={produtos_diversao}></ConteudoDiversao>
            </div>

            <div className="produtos_recentes"> 
                <div className="titulo"> 
                    <h1>Acessórios e higiene</h1>
                    <h2> Ver mais</h2>
                </div>
                <Conteudo produtos={produtos_higienea} decisor="2"></Conteudo>
            </div>

            <div className="produtos_diversao">
                <div className="titulo"> 
                    <h1>Espaço artistico</h1>
                    <h2> Ver mais</h2>
                </div>
               <ConteudoArte produtos={produtos_arte}></ConteudoArte>
            </div>
           
    </div>
}