import axios from "axios";

export function desfavoritarProdutoPorUser(token){
    return axios({
        method: "DELETE",
        url: "http://localhost:8393/carrinho/:id",
        headers:{
            "token": token,
        },
        params: {
            id: this.selectedRoute
        }
    })
}

export function listarProdutosFavoritadosPorUser(id, token){ 
    return axios({
        method: "GET",
        url: `http://localhost:8393/carrinho/${id}`,
        headers:{
            "token": token,
        }
    })
}

export function inserirProdutoCarrinho(token, produto_info){
    return axios({
        method: "POST",
        url: "http://localhost:8393/carrinho",
        headers:{
            "token": token,
        },
        data: produto_info,
    })
}
