import { Link } from "react-router-dom";
import { detalharProduto, listarProdutos, listarProdutosPorTipo} from "../../../api/produtosAPI";
import { Navbar } from "../../commom/Navbar/Navbar";
import { FiChevronRight } from "react-icons/fi";
import "./PaginaDetalheProduto.css"
import img from './imagem_racao.png';
import avaliacao_img from './avaliacao.svg';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../App";
import { Conteudo } from "../PaginaHome/PaginaHome";

function MostrarDetalhes({produtoDetalhe}){
    
    if(produtoDetalhe!== undefined){
        var numero = produtoDetalhe[0].valor_produto;
        return <div className="detalhes_pagina_produto">
            <div className="navegador_migalha_card"> <Link exact to="/home" className="Link">Produtos</Link> <FiChevronRight></FiChevronRight> <Link exact to="/home" className="Link">Mais recentes</Link><FiChevronRight></FiChevronRight> {produtoDetalhe[0].nome_produto} </div>
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
                    <h1>{produtoDetalhe[0].nome_produto}</h1>
                    <h2>Por {produtoDetalhe[0].usuario.nome_completo}</h2>
                </div>
                <div className="preco_produto">
                    <div className="rs">R$</div>
                    <div className="valor">{new Intl.NumberFormat('pt-BR').format(numero)}</div>
                </div>
                <div className="classificacao_produto">
                        <h3>Avaliação</h3><img src={avaliacao_img} className="avaliacao"/><h4>(12)</h4>
                </div>

                <div className="descricao">
                    {produtoDetalhe[0].descricao_produto}
                </div>
                <div className="botoes">
                    <button className="avaliar">Avaliar produto</button>
                    <button className="contato">Entrar em contato</button>
                </div>
             
                </div>  
            </div>
            
              
              
              
              

        </div>
    }

    return <div></div>
    
}



export function PaginaDetalheproduto(id_produto){
    const {auth} = useContext(AuthContext);
    const [produtoDetalhe, setProdutoDetalhe] = useState();
    useEffect(()=>{
        detalharProduto(id_produto).then(
            (response) =>{
                setProdutoDetalhe(response.data);
            }).catch(
            (error=>{
                console.log(error);
            })
        )
    },[]);
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


    return (

        <div>
            <Navbar></Navbar>
            <br></br>
            <MostrarDetalhes produtoDetalhe={produtoDetalhe}></MostrarDetalhes>
            <div className="produtos_recentes">
                <br></br>
                <br></br>
                <h1>Recomendados</h1>
            <Conteudo produtos={produtos} decisor="1"></Conteudo>
            </div>
        </div>
       
    )

}