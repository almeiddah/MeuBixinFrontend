import { Navbar } from "../../commom/Navbar/Navbar";
import "./PaginaMinhaLista.css";
import { AuthContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import { listarProdutosFavoritadosPorUser } from "../../../api/carrinhoAPI";
import { Card_favoritado } from "../../commom/Card/Card";


export function ConteudoCarrinho({produtos}){

    var total = produtos.reduce(getTotal, 0);
    var quantidade_itens = produtos.length;
    function getTotal(total, item) {
     return total + (item.valor_produto_favoritado);
    
    }
    console.log(total);
    console.log(quantidade_itens);

    let posts = produtos.map((post)=>(<Card_favoritado post={post}> </Card_favoritado>))

    return ( 
        <div className="carrinho">
        <div className="conteudo_favoritado">
               {posts}
        </div>
        <div className="dados_favoritado">
            <h3 className="dados">Dados da lista</h3>
            <div className="qtd"><h1>Quantidade de ítens</h1><h2>{quantidade_itens} Produtos</h2></div>
            <div className="valor_total"><h1>Valor Total</h1><h2>R$ {total}</h2></div>
        </div>
        </div>
            )
}


export function PaginaMinhaLista(){
    const {auth} = useContext(AuthContext);
      //Pegar serviços do usuario logado
      const [produtos_f, setprodutos_f] = useState([]);
      useEffect(()=>{

          listarProdutosFavoritadosPorUser(auth._id,auth.token).then(
              (response) =>{
                  console.log(response.data);
                  setprodutos_f(response.data);
              }).catch(
              (error=>{
                  console.log(error);
              })
          )
      },[]);
    
    
    return <div>
        <Navbar></Navbar>
        <br></br>
        <div className="minha_lista">
            <h2>Minha Lista</h2>
            <h3>Todos os seus produtos aparecerão<br/>aqui na sua lista.</h3>
        </div>
       <ConteudoCarrinho produtos={produtos_f}> </ConteudoCarrinho>
        </div>
} 