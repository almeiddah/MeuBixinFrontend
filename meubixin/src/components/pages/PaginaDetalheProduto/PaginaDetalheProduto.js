import { useState, useEffect } from "react";
import { detalharProduto, listarProdutosPorLoja } from "../../../api/produtosAPI";
import { Navbar } from "../../commom/Navbar/Navbar";

function InfodoProduto({produto}){
    return(
        <div>
            <div>{produto}</div>
        </div>
    )
}

export function PaginaDetalheproduto(id_produto){
    const [produtoDetalhe, setProdutoDetalhe] = useState([]);
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
    return (

        <div>
            <Navbar></Navbar>
            <div>Pagina detalhe produto</div>
            <InfodoProduto produto={produtoDetalhe}></InfodoProduto>
        </div>
       
    )

}