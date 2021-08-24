import axios from "axios";

export function listarProdutosHome(){ //Creio que aqui não precisa verificar token ja que vou poder entrar sem conta
    return axios({
        method: "GET",
        url: "http://localhost:8393/get",
    })
}

export function listarProdutos(token){
    return axios({
        method:"GET",
        url: "http://localhost:8393/produtos/get",
        headers: {
            "token" : token,
        }
    })
}

export function detalharProduto(id_produto){ 
    let new_id = id_produto.match.params.id;
    return axios({
        method: "GET",
        url: `http://localhost:8393/produto/${new_id}`,
        
    })
}


export function listarProdutosPorTipo(categoria,token){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/produtoscategoria/" + categoria,
        headers: {
            "token" : token,
        }
    })
}

export function inserirProduto(produto_info, token){
    console.log("entrou no axios", produto_info, token);
    return axios({
        method: "POST",
        url: "http://localhost:8393/produtos",
        headers:{
            "token": token,
        },
        data: produto_info,
    })
}

export function removerProduto(produto_info, token){
    console.log("entrou no axios", produto_info, token);
    return axios({
        method: "DELETE",
        url: `http://localhost:8393/produtos/${produto_info.id}`,
        headers:{
            "token": token,
        }
    })
}

