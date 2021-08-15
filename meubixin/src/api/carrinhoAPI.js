import axios from "axios";

export function desfavoritarProdutoPorUser(token){ //Creio que aqui não precisa verificar token ja que vou poder entrar sem conta
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

export function listarProdutosFavoritadosPorUser(){ 
    return axios({
        method: "GET",
        url: "http://localhost:8393/carrinho/:id",
        params: {
            id: this.selectedRoute
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
