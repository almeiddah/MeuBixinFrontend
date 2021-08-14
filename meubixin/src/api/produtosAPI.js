import axios from "axios";

export function listarProdutosHome(){
    return axios({
        method: "GET",
        url: "http://localhost:8393/get",
    })
}

export function listarProdutosPorLoja(token){
    return axios({
        method: "GET",
        url: "http://localhost:8393/api/post",
        headers:{
            "token": token,
        },
    })
}

export function inserirProduto(produto_info, token){
    return axios({
        method: "POST",
        url: "http://localhost:8393/produtos",
        headers:{
            "token": token,
        },
        data: produto_info,
    })
}
