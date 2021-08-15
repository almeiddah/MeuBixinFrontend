import axios from "axios";

export function listarProdutosHome(){ //Creio que aqui não precisa verificar token ja que vou poder entrar sem conta
    return axios({
        method: "GET",
        url: "http://localhost:8393/get",
    })
}

export function listarProdutosPorLoja(id_loja){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/produtos/:id",
        data: id_loja,
    })
}

export function listarProdutosPorTipo(id_produto){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/produtoscategoria/:id",
        params: {
            id: this.selectedRoute
        }
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
